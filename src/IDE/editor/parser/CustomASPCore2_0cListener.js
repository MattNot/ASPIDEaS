import {ASPCore2_0cListener} from "./ASPCore2_0cListener"
import {ASPCore2_0cParser} from "./ASPCore2_0cParser";
import {store} from "../../../redux";
import {addBlock, addRule} from "../../../redux/actions";

export default class CustomASPCore2_0cListener extends ASPCore2_0cListener {
	constructor(annotations, lineContext) {
		super();
		this.safetyHandler = {
			inHead: false,
			inBody: false,
			haveBody: false,
			negativeTerms: false,
			set: new Set(),
		};
		this.blockConstructor = {
			name: "",
			rules: []
		}
		this.ruleConstructor = {
			name: "",
			rule: {
				start: 0,
				end: 0
			}
		}

		this.testConstructor = {
			name: "",
			scope: [],
			programFiles: [],
			input: "",
			inputFiles: [],
			assert: []
		}

		this.assertConstructor = {
			"@type": ""
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
			let start = ctx.start.line;
			let end = ctx.stop.line;
			this.ruleConstructor.rule = {start, end}
		}
	}

	exitRuleTest(ctx) {
		store.dispatch(addRule(this.ruleConstructor.name, this.ruleConstructor.rule));
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
			let regExp = new RegExp('[,{}]', 'g');
			let listOfRules = ctx.children.map(child => {
				return child.symbol.text
			});
			let rules = listOfRules.join().split(",");
			rules = rules.filter(r => !regExp.test(r)).filter(r => r !== '').map(r => r.replace(/"/g, ""))
			this.blockConstructor.rules.push(...rules);
		}
		if (ctx.parentCtx instanceof ASPCore2_0cParser.TestTestContext) {
			
		}
	}

	exitBlockTest(ctx) {
		store.dispatch(addBlock(this.blockConstructor.name, this.blockConstructor.rules));
		this.blockConstructor.rules = [];
		this.blockConstructor.name = "";
	}

	exitStatement(ctx) {
		if (this.safetyHandler.set.size !== 0 && this.safetyHandler.haveBody) {
			this.annotations.push({
				row: ctx.start.line - 1,
				column: ctx.start.column,
				type: "error",
				text: `Safety error, missing '${[...this.safetyHandler.set].join(",")}' in positive body members`,
				unsafeVariables: [...this.safetyHandler.set],
				name: "safety"
			})
		}
		this.lineContext[ctx.start.line - 1] = ctx;
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