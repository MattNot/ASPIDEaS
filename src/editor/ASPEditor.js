import React from "react";
import AceEditor from "react-ace";
import "ace-builds"
import "ace-builds/src-noconflict/theme-dracula"
import "ace-builds/src-min-noconflict/snippets/text"
import "ace-builds/src-min-noconflict/ext-language_tools"
import "ace-builds/webpack-resolver"
import antlr4 from "antlr4/index"
import AceErrorListener from "./parser/AceErrorListener";
import snippets from "./ASPSnippets";
import CustomAspMode from "./Asp-Mode";
import ASPCore2_0cListener from "./parser/ASPCore2_0cListener";

let Lexer = require("./parser/ASPCore2_0cLexer").ASPCore2_0cLexer;
let Parser = require("./parser/ASPCore2_0cParser").ASPCore2_0cParser;

window.ace.acequire("ace/snippets/text").snippetText = snippets;

const styles = {
	EDITOR: {
		width: "100%",
		height: "100vh"
	}
};

class ASPEditor extends React.Component {

	/*getCircularReplacer = () => {
		const seen = new WeakSet();
		return (key, value) => {
			if (typeof value === "object" && value !== null) {
				if (seen.has(value)) {
					return;
				}
				seen.add(value);
			}
			return value;
		};
	};*/

	constructor(props) {
		super(props);
		this.aceEditor = React.createRef();
		this.state = {
			currentValue: '',
		};
		/*this.parser = new Worker("parserWorker.js");
		this.parser.onmessage = e => {
			//this.aceEditor.current.editor.getSession().setAnnotations([e.data])
		};*/
	}

	componentDidMount() {
		this.aceEditor.current.editor.getSession().setMode(new CustomAspMode());
		this.aceEditor.current.editor.setBehavioursEnabled(true);
		this.aceEditor.current.editor.setWrapBehavioursEnabled(true);
	}

	//FIXME: This is **NOT** the way it should be. You should use ace workers but i didn't manage to find a way to do it.
	//FIXME: I spent a week looking for that, everyone uses the workers that are already in the ace-builds/src-noconflict/ folder
	//FIXME: Matteo Notaro, 28/03/2020
	parse(val: string) {
		this.setState({currentValue: val});
		let stream = new antlr4.InputStream(val);
		let lexer = new Lexer(stream);
		let tokens = new antlr4.CommonTokenStream(lexer);
		let parser = new Parser(tokens);
		let annotations = [];
		let markers = [];
		let errorListener = new AceErrorListener(annotations, markers);
		parser.removeErrorListeners();
		parser.buildParseTrees = true;
		parser.addErrorListener(errorListener);
		let tree = parser.program();
		antlr4.tree.ParseTreeWalker.DEFAULT.walk(new ASPCore2_0cListener(annotations), tree);
		this.aceEditor.current.editor.getSession().setAnnotations(annotations);
	}


	render() {
		return (
			<AceEditor theme="dracula"
			           mode="text"
			           onChange={val => this.parse(val)}
			           name="unique"
			           editorProps={{$blockScrolling: true}}
			           ref={this.aceEditor}
			           enableLiveAutocompletion={true}
			           enableBasicAutocompletion={true}
			           enableSnippets={true}
			           style={styles.EDITOR}
			           showPrintMargin={false}
			           setOptions={{useWorker: true}}
			           value={this.state.currentValue}
			/>
		);
	}
}

export default ASPEditor;