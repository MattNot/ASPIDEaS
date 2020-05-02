import {ASPCore2_0cListener} from "./ASPCore2_0cListener"

export default class CustomASPCore2_0cListener extends ASPCore2_0cListener {
	constructor(annotations, lineContext) {
		super();
		this.safetyHandler = {
			inHead: false,
			inBody: false,
			haveBody: false,
			set: new Set(),
		};
		this.lineContext = lineContext;
		this.annotations = annotations;
	}

	getLastContext() {
		return this.lineContext;
	}

	exitStatement(ctx) {
		if (this.safetyHandler.set.size !== 0 && this.safetyHandler.haveBody) {
			this.annotations.push({
				row: ctx.start.line - 1,
				column: ctx.start.column,
				type: "error",
				text: `Safety error, missing '${[...this.safetyHandler.set].join(",")}' in positive body members`,
				name: "safety"
			})
		}
		this.lineContext = ctx;
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
			}
		}
	}

	exitTerm(ctx) {
		if (this.safetyHandler.inHead) {
			if (ctx.children[0].symbol.text.charAt(0).match("[A-Z]"))
				this.safetyHandler.set.add(ctx.children[0].symbol.text);
		} else if (this.safetyHandler.inBody) {
			this.safetyHandler.set.delete(ctx.children[0].symbol.text);// no-effect if symbol isn't in the set
		}
	}

}