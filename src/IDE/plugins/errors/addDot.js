let addDot = {
	name: "addDot",
	function: function (event, {editor, lineContext, errorInLine}) {
		editor.editor.navigateLineEnd();
		editor.editor.getSession().replace(editor.editor.getSelectionRange(), ".");
	},
	description: "Add Dot at the end of file",
	type: "error",
	errorName: "missingDot"
}

export default addDot;