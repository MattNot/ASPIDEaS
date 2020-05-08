let counted = 0;

function findDis(lineContext) {
	if (lineContext.children !== undefined) {
		for (let x = 0; x < lineContext.children.length; x++) {
			if (lineContext.children[x].ruleIndex === 6 || lineContext.children[x].ruleIndex === 8)
				counted++;
			if (counted >= 2)
				return true;
			findDis(lineContext.children[x]);
		}
	}
	return false;
}


let disjunctionRewrite = {
	name: "RewriteDisjunction",
	function: function (event, {editor, lineContext}) {
		let oldRule = editor.editor.getSession().getLine(editor.editor.getCursorPosition().row);
		let head = oldRule.split(":-");
		let splitted = head[0].split("|");
		if (head[1] !== undefined)
			head[1] = head[1].replace(/[\s.]/g, "");
		splitted = splitted.map(s => s.replace(/[\s.]/g, ""));
		let newRules = splitted.map((tok, index) => {
			return tok + " :- not " + splitted.filter((t, i) => i !== index).join(", not ") + (head[1] !== undefined ? (", " + head[1] + ".") : ".");
		});
		editor.editor.getSession().removeFullLines(editor.editor.getCursorPosition().row, editor.editor.getCursorPosition().row);
		editor.editor.insert(newRules.join("\n") + "\n");
		editor.editor.focus();
	},
	applicability: (lineContext) => {
		counted = 0;
		if (lineContext === undefined)
			return false;
		return findDis(lineContext);
	},
	description: "Rewrite disjunction without |",
	type: "simple"
}

export default disjunctionRewrite;