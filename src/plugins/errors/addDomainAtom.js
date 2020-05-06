import {Range} from "ace-builds";

let addDomainAtom = {
	name: "addDomainAtom",
	function: function (event, {editor, lineContext, errorInLine}) {
		let x = editor.editor.getCursorPosition();
		x.column -= 1;
		let y = ", newDomain(" + errorInLine.unsafeVariables.join(",") + ")";
		let range = new Range(x.row, x.column + y.length, x.row, x.column);
		editor.editor.getSession().insert(x, y);
		editor.editor.selection.setRange(range, true);
		console.log(editor.editor.getSelection())
	},
	description: "Add new domain atom at the end of the rule",
	type: "error",
	errorName: "safety"
}

export default addDomainAtom;