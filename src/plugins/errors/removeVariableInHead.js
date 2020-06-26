import {Range} from "ace-builds";

let removeHead = {
	name: "removeHead",
	function: function (event, {editor, lineContext, errorInLine}) {
		let old = editor.editor.getSession().getLine(editor.editor.getCursorPosition().row);
		let variablesToRemove = errorInLine.unsafeVariables;
		let spliced = old.split(":-");
		let head = spliced[0];
		variablesToRemove.forEach(variable => {
			head = head.replace(/([A-Z]\w*),/g, (global, first) => {
				if (first === variable) {
					return "";
				} else {
					return first + ",";
				}
			});
			head = head.replace(/([A-Z]\w*)\)/g, (global, first) => {
				if (first === variable) {
					return ")";
				}
				return first + ")";
			});
			head = head.replace(/,\)/, ")");
		});
		spliced[0] = head;
		let newRow = spliced.join(" :- ");
		let selection = new Range(editor.editor.getCursorPosition().row, 0, editor.editor.getCursorPosition().row, editor.editor.getSession().getLine(editor.editor.getCursorPosition().row).length);
		editor.editor.getSession().replace(selection, newRow);
	},
	description: "Remove variable in head",
	type: "error",
	errorName: "safety"
}

export default removeHead;