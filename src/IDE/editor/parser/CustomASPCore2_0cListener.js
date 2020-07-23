import {ASPCore2_0cListener} from "./ASPCore2_0cListener"
import {ASPCore2_0cParser} from "./ASPCore2_0cParser";
import {store} from "../../../redux";
import {addBlock, addRule, addTest} from "../../../redux/actions";

export default class CustomASPCore2_0cListener extends ASPCore2_0cListener {
	constructor(annotations, lineContext) {
		super();
		this.safetyHandler = {
			inHead: false,
			inBody: false,
			haveBody: false,
			negativeTerms: false,
			set: new Set(),
			reset: () => {
				this.safetyHandler.negativeTerms = false;
				this.safetyHandler.inBody = false;
				this.safetyHandler.inHead = false;
				this.safetyHandler.haveBody = false;
				this.safetyHandler.set = new Set();
			}
		};
		this.rules = []
		this.blocks = []
		this.blockConstructor = {
			name: "",
			rules: []
		}
		this.ruleConstructor = {
			name: "",
			rule: ""
		}

		this.testConstructor = {
			name: "",
			scope: [],
			programFiles: [],
			input: "",
			inputFiles: [],
			assertions: [],
			clear: () => {
				this.testConstructor.name = "";
				this.testConstructor.scope = [];
				this.testConstructor.programFiles = [];
				this.testConstructor.input = "";
				this.testConstructor.inputFiles = [];
				this.testConstructor.assertions = [];
			}
		}

		this.assertConstructor = {
			"@type": "",
			clear: () => {
				for (let x in this.assertConstructor) {
					if (x !== "clear" && x !== "@type")
						delete this.assertConstructor[x]
				}
			}
		}
		this.lineContext = lineContext;
		this.annotations = annotations;
	}

	getLastContext() {
		return this.lineContext;
	}

	exitBlockEqual(ctx) {
		if (ctx.parentCtx instanceof ASPCore2_0cParser.RuleTestContext) {
			this.blockConstructor.name = ctx.children[2].symbol.text.replace(/"/g, "");
			this.blockConstructor.rules.push(this.ruleConstructor.name);
		}
	}

	exitStatementForTest(ctx) {
		if (ctx.parentCtx instanceof ASPCore2_0cParser.RuleTestContext) {
			this.ruleConstructor.rule = ctx.start.source[1].getText(ctx.start.start, ctx.stop.stop);
		}
	}

	exitTrueIn(ctx) {
		this.assertConstructor["@type"] = ctx.children[0].children[0].symbol.text;
		this.testConstructor.assertions.push(Object.assign({}, this.assertConstructor));
		this.assertConstructor.clear();
	}

	exitHardConstraint(ctx) {
		if (ctx.parentCtx instanceof ASPCore2_0cParser.ConstraintEqualContext) {
			const plainConstraint: string = ctx.start.source[1].getText(ctx.start.start, ctx.stop.stop);
			const onlyAtoms = plainConstraint.replace(/#\w+{.*}.*,*[^.]/g, "");
			let listOfAtoms = onlyAtoms.replace(/not (\w+\(.*?\))/g, "");
			listOfAtoms = listOfAtoms.matchAll(/(\w+\(.*?\))/g)
			let positiveMembers = ":-";
			for (let l of listOfAtoms)
				positiveMembers += l[0] + ",";
			let set = new Set();
			let matches = positiveMembers.matchAll(/\(((\w),*)+\)/g);
			for (let match of matches) {
				match[0].replace("(", "").replace(")", "").split(',').forEach(letter => set.add(letter));
			}
			let head;
			if (set.size > 0)
				head = "constraintHead(" + [...set].join(",") + ")";
			else
				head = "constraintHead"
			const finalConstraint = head + plainConstraint;

			let addedConstraint = positiveMembers + " " + head + ".";

			this.assertConstructor.constraint = finalConstraint + "\n" + addedConstraint;
		}
	}

	exitConstraintIn(ctx) {
		this.assertConstructor["@type"] = ctx.children[0].children[0].symbol.text;
		this.testConstructor.assertions.push(Object.assign({}, this.assertConstructor));
		this.assertConstructor.clear();
	}

	exitNoAnswerSet(ctx) {
		this.assertConstructor.clear();
		this.testConstructor.assertions.push({
			"@type": "noAnswerSets"
		});
	}

	exitNumberEqual(ctx) {
		this.assertConstructor.number = ctx.children[2].symbol.text;
	}

	exitAtomsEqual(ctx) {
		let string = ""
		for (let x = 3; x < ctx.children.length; x++) {
			let child = ctx.children[x];
			if (child instanceof ASPCore2_0cParser.Classical_literalContext) {
				string += child.start.source[1].getText(child.start.start, child.stop.stop) + ". ";
			}
		}
		this.assertConstructor.atoms = string;
	}

	exitTestTest(ctx) {
		store.dispatch(addTest(this.testConstructor));
		this.testConstructor.clear();
	}


	exitRuleTest(ctx) {
		let nam = this.ruleConstructor.name
		let ru = this.ruleConstructor.rule
		store.dispatch(addRule(this.ruleConstructor.name, this.ruleConstructor.rule));
		this.rules.push({
			name: nam,
			rule: ru
		});
		if (this.blockConstructor.name)
			this.exitBlockTest();
		this.ruleConstructor.name = "";
		this.ruleConstructor.rule = {}
	}

	exitNameEqual(ctx) {
		if (ctx.parentCtx instanceof ASPCore2_0cParser.BlockTestContext) {
			this.blockConstructor.name = ctx.children[2].symbol.text.replace(/"/g, "");
		}
		if (ctx.parentCtx instanceof ASPCore2_0cParser.RuleTestContext) {
			this.ruleConstructor.name = ctx.children[2].symbol.text.replace(/"/g, "");
		}
		if (ctx.parentCtx instanceof ASPCore2_0cParser.TestTestContext) {
			this.testConstructor.name = ctx.children[2].symbol.text.replace(/"/g, "");
		}
	}

	exitListOfString(ctx) {
		if (ctx.parentCtx instanceof ASPCore2_0cParser.BlockTestContext) {
			let entireString = ctx.start.source[1].getText(ctx.start.start + 1, ctx.stop.stop - 1);
			let splitted = entireString.split(",");
			this.blockConstructor.rules.push(...(splitted.map(r => r.replace(/"/g, "").trim())));
		}
		if (ctx.parentCtx instanceof ASPCore2_0cParser.TestTestContext) {
			let entireString = ctx.start.source[1].getText(ctx.start.start + 1, ctx.stop.stop - 1);
			let splitted = entireString.split(",");
			this.testConstructor.scope = splitted.map(r => r.replace(/"/g, "").trim());
		}
		if (ctx.parentCtx instanceof ASPCore2_0cParser.InputFilesTestContext) {
			let entireString = ctx.start.source[1].getText(ctx.start.start + 1, ctx.stop.stop - 1);
			let splitted = entireString.split(",");
			this.testConstructor.inputFiles = splitted.map(r => r.replace(/"/g, "").trim());
		}
		if (ctx.parentCtx instanceof ASPCore2_0cParser.ProgramFilesTestContext) {
			let entireString = ctx.start.source[1].getText(ctx.start.start + 1, ctx.stop.stop - 1);
			let splitted = entireString.split(",");
			this.testConstructor.programFiles = splitted.map(r => r.replace(/"/g, "").trim());
		}
	}

	exitStatementsForTest(ctx) {
		if (ctx.parentCtx instanceof ASPCore2_0cParser.InputTestContext) {
			this.testConstructor.input = ctx.start.source[1].getText(ctx.start.start, ctx.stop.stop);
		}
		this.exitStatement(ctx)
	}

	exitBlockTest(ctx) {
		let name = this.blockConstructor.name;
		let rules = this.blockConstructor.rules;
		store.dispatch(addBlock(this.blockConstructor.name, this.blockConstructor.rules));
		this.blocks.push({
			name: name,
			rules: rules
		})
		this.blockConstructor.rules = [];
		this.blockConstructor.name = "";
	}

	exitStatement(ctx) {
		if (this.safetyHandler.set.size !== 0 && this.safetyHandler.haveBody) {
			this.annotations.push({
				row: ctx.stop.line - 1,
				column: ctx.start.column,
				type: "error",
				text: `Safety error, missing '${[...this.safetyHandler.set].join(",")}' in positive body members`,
				unsafeVariables: [...this.safetyHandler.set],
				name: "safety"
			})
			this.safetyHandler.reset();
		}
		this.lineContext[ctx.stop.line - 1] = ctx;
	}

	enterHead(ctx) {
		this.safetyHandler.inHead = true;
	}

	exitHead(ctx) {
		this.safetyHandler.inHead = false;
	}

	enterBody(ctx) {
		this.safetyHandler.inBody = true;
		this.safetyHandler.haveBody = true;
	}

	exitBody(ctx) {
		this.safetyHandler.inBody = false;
	}

	enterNaf_literal(ctx) {
		if (ctx.children[0].children === undefined) {
			if (ctx.children[0].symbol.text === "not") {
				this.safetyHandler.inBody = false;
				this.safetyHandler.negativeTerms = true;
			}
		}
	}

	exitNaf_literal(ctx) {
		this.safetyHandler.negativeTerms = false;
	}

	exitTerm(ctx) {
		if (this.safetyHandler.inHead || this.safetyHandler.negativeTerms) {
			if (ctx.children[0].symbol.text.charAt(0).match("[A-Z]"))
				this.safetyHandler.set.add(ctx.children[0].symbol.text);
		} else if (this.safetyHandler.inBody) {
			this.safetyHandler.set.delete(ctx.children[0].symbol.text);// no-effect if symbol isn't in the set
		}
	}

}