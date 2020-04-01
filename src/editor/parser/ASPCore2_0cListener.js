import {ASPCore2_0cEMPTYListener} from "./ASPCore2_0cEMPTYListener"

export default class ASPCore2_0cListener extends ASPCore2_0cEMPTYListener {
	constructor(annotations) {
		super();
		this.safetyHandler = {
			inHead: false,
			inBody: false,
			set: new Set(),
		};
		this.annotations = annotations;
	}

	exitStatement(ctx) {
		if (this.safetyHandler.set.size !== 0) {
			this.annotations.push({
				row: ctx.start.line - 1,
				column: ctx.start.column,
				type: "error",
				text: "SAFETY ERROR"
			})
		}
	}

	enterHead(ctx) {
		this.safetyHandler.inHead = true;
	}

	exitHead(ctx) {
		this.safetyHandler.inHead = false;
	}

	enterBody(ctx) {
		this.safetyHandler.inBody = true;
	}

	exitBody(ctx) {
		this.safetyHandler.inBody = false;
	}

	exitTerm(ctx) {
		if (this.safetyHandler.inHead) {
			this.safetyHandler.set.add(ctx.children[0].symbol.text);
		} else if (this.safetyHandler.inBody) {
			this.safetyHandler.set.delete(ctx.children[0].symbol.text);
		}
	}

}