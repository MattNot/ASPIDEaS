import antlr4 from "antlr4/index"
import {NoViableAltException} from "antlr4/error/Errors"

export default class AceErrorListener extends antlr4.error.ErrorListener {
	constructor(annotations) {
		super();
		antlr4.error.ErrorListener.call(this);
		this.annotations = annotations;
	}

	setMessage(offendingSymbol, msg, exceptionDetails) {
		if (exceptionDetails instanceof NoViableAltException)
			if (!offendingSymbol.source[1].strdata.includes("\."))
				return "Missing DOT at end of statement";
			else
				return "Generic syntax error";
		return msg;
	}

	syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
		this.annotations.push({
			row: line - 1,
			column: column,
			text: this.setMessage(offendingSymbol, msg, e),
			type: "error"
		})
	}
}