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
		// let actualRow = line || this.aceEditor.current.editor.getCursorPosition().row;
		let delta = this.aceEditor.current.editor.getSession().getValue();
		let stream = new antlr4.InputStream(delta);
		let lexer = new Lexer(stream);
		let tokens = new antlr4.CommonTokenStream(lexer);
		let parser = new Parser(tokens);
		let annotations = [];
		let errorListener = new AceErrorListener(annotations);

		lineContext = [];
		parser.removeErrorListeners();
		parser.buildParseTrees = true;
		parser.addErrorListener(errorListener);
		let tree = parser.inizio();
		let walker = new CustomASPCore2_0cListener(annotations, lineContext);
		antlr4.tree.ParseTreeWalker.DEFAULT.walk(walker, tree);
		lineContext = walker.getLastContext();

		return {annotations, lineContext};
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