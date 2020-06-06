import {Range} from "ace-builds";

let addDomainAtom = {
	name: "addDomainAtom",
	function: function (event, {editor, lineContext, errorInLine}) {
		let x = editor.editor.getCursorPosition();
		let oldRow = editor.editor.getSession().getLine(x.row);
		x.column = oldRow.indexOf(".");
		let newAtom = ", newDomain(" + errorInLine.unsafeVariables.join(",") + ")";
		let range = new Range(x.row, x.column + 2, x.row, x.column + 2 + "newDomain".length);
		editor.editor.getSession().insert(x, newAtom);
		editor.editor.getSelection().setRange(range);
		editor.editor.focus();
	},
	description: "Add new domain atom at the end of the rule",
	type: "error",
	errorName: "safety"
}

export default addDomainAtom;