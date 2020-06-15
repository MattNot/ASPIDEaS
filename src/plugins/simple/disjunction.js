const StatementContext = require("../../IDE/editor/parser/ASPCore2_0cParser").ASPCore2_0cParser.StatementContext;
const DisjunctionContext = require("../../IDE/editor/parser/ASPCore2_0cParser").ASPCore2_0cParser.DisjunctionContext;
let counted = 0;

const findDis = (lineContext) => {
	if (lineContext.children !== undefined)
		for (let child of lineContext.children) {
			if (child instanceof DisjunctionContext) {
				for (let child2 of child.children) {
					if (child2 instanceof DisjunctionContext)
						return true;
				}
			} else {
				let r = findDis(child)
				if (r)
					return r
			}
		}
	return false
}

let disjunctionRewrite = {
	name: "RewriteDisjunction",
	function: function (event, {editor, lineContext}) {
		let oldRule = editor.editor.getSession().getLine(editor.editor.getCursorPosition().row);
		let head = oldRule.split(":-");
		let splitted = head[0].split("|");
		if (head[1] !== undefined) {
			head[1] = head[1].replace(/[\s.]/g, "");
		}
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
		return findDis(lineContext)
	},
	description: "Rewrite disjunction without |",
	type: "simple"
}

export default disjunctionRewrite;