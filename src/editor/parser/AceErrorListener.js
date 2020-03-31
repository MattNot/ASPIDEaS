import antlr4 from "antlr4/index"

export default class AceErrorListener extends antlr4.error.ErrorListener {
	constructor(annotations) {
		super();
		antlr4.error.ErrorListener.call(this);
		this.annotations = annotations;
	}

	syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
		this.annotations.push({
			row: line - 1,
			column: column,
			text: msg,
			type: "error"
		})
	}
}