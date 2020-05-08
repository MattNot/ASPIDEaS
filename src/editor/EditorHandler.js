import antlr4 from "antlr4";
import AceErrorListener from "./parser/AceErrorListener";
import CustomASPCore2_0cListener from "./parser/CustomASPCore2_0cListener";

const Lexer = require("./parser/ASPCore2_0cLexer").ASPCore2_0cLexer;
const Parser = require("./parser/ASPCore2_0cParser").ASPCore2_0cParser;

export default class EditorHandler {
	constructor(aceEditor, plugins) {
		this.aceEditor = aceEditor;
		this.plugins = plugins;
	}

	parse = (actualAnnotations, lineContext) => {
		let actualRow = this.aceEditor.current.editor.getCursorPosition().row;
		let delta = this.aceEditor.current.editor.getSession().getLine(actualRow);
		let stream = new antlr4.InputStream(delta);
		let lexer = new Lexer(stream);
		let tokens = new antlr4.CommonTokenStream(lexer);
		let parser = new Parser(tokens);
		let annotations = [];
		let errorListener = new AceErrorListener(annotations);

		lineContext[actualRow] = undefined;
		parser.removeErrorListeners();
		parser.buildParseTrees = true;
		parser.addErrorListener(errorListener);
		let tree = parser.program();
		let walker = new CustomASPCore2_0cListener(annotations, lineContext[actualRow]);
		antlr4.tree.ParseTreeWalker.DEFAULT.walk(walker, tree);
		lineContext[actualRow] = walker.getLastContext();

		annotations = annotations.map(ann => {
			ann.row = actualRow;
			return ann;
		});
		if (annotations.length === 0) {
			return actualAnnotations.filter(ann => ann.row !== actualRow);
		} else {
			let old = actualAnnotations.filter(ann => ann.row !== actualRow);
			annotations.forEach(a => old.push(a));
			return old;
		}
	}
	copy = () => {
		let x = this.aceEditor.current.editor.getSelectedText();
		navigator.clipboard.writeText(x).then(r => console.log(`${x} copied in the clipboard`));
	}
	paste = () => {
		navigator.clipboard.readText().then(r => {
			this.aceEditor.current.editor.getSession().replace(this.aceEditor.current.editor.getSelectionRange(), r);
		});
	}
	cut = () => {
		this.copy();
		this.aceEditor.current.editor.getSession().replace(this.aceEditor.current.editor.getSelectionRange(), "");
	}
}