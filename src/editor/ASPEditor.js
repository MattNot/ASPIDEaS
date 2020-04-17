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
import CustomASPCore2_0cListener from "./parser/CustomASPCore2_0cListener";


const Lexer = require("./parser/ASPCore2_0cLexer").ASPCore2_0cLexer;
const Parser = require("./parser/ASPCore2_0cParser").ASPCore2_0cParser;

window.ace.acequire("ace/snippets/text").snippetText = snippets;

const styles = {
	EDITOR: {
		width: "100%",
		height: "80vh"
	}
};

class ASPEditor extends React.Component {

	constructor(props) {
		super(props);
		this.aceEditor = React.createRef();
		this.state = {
			currentValue: '',
		};
	}

	componentDidMount() {
		this.aceEditor.current.editor.getSession().setMode(new CustomAspMode());
		this.aceEditor.current.editor.setBehavioursEnabled(true);
		this.aceEditor.current.editor.setWrapBehavioursEnabled(true);
	}

	//FIXME: This is **NOT** the way it should be. You should use ace workers but i didn't manage to find a way to do it.
	//FIXME: I spent a week looking for that, everyone uses the workers that are already in the ace-builds/src-noconflict/ folder
	//FIXME: Matteo Notaro, 28/03/2020
	parse(val: string, event: any) {
		this.setState({currentValue: val});
		let delta = this.aceEditor.current.editor.getSession().getLine(event.start.row);
		let stream = new antlr4.InputStream(delta);
		let lexer = new Lexer(stream);
		let tokens = new antlr4.CommonTokenStream(lexer);
		let parser = new Parser(tokens);
		let annotations = [];
		let errorListener = new AceErrorListener(annotations);
		parser.removeErrorListeners();
		parser.buildParseTrees = true;
		parser.addErrorListener(errorListener);
		let tree = parser.program();
		antlr4.tree.ParseTreeWalker.DEFAULT.walk(new CustomASPCore2_0cListener(annotations), tree);
		annotations = annotations.map(ann => {
			ann.row = event.start.row;
			return ann;
		});
		this.aceEditor.current.editor.getSession().setAnnotations(annotations);
	}


	render() {
		return (
			<AceEditor theme="dracula"
			           mode="text"
			           onChange={(val, event) => this.parse(val, event)}
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