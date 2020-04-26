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
import ContextMenuHandler from "../UI/ContextMenuHandler";
import {ContextMenu, ContextMenuTrigger} from "react-contextmenu";


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
			annotations: [],
			errorOnThisLine: {}
		};
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

	componentDidMount() {
		this.aceEditor.current.editor.getSession().setMode(new CustomAspMode());
		this.aceEditor.current.editor.setBehavioursEnabled(true);
		this.aceEditor.current.editor.setWrapBehavioursEnabled(true);
	}

	//FIXME: This is **NOT** the way it should be. You should use ace workers but i didn't manage to find a way to do it.
	//FIXME: I spent a week looking for that, everyone uses the workers that are already in the ace-builds/src-noconflict/ folder, maybe there's a way to override one (like snippets)
	//FIXME: Matteo Notaro, 28/03/2020
	parse(val: string) {
		this.setState({currentValue: val});
		let actualRow = this.aceEditor.current.editor.getCursorPosition().row;
		let delta = this.aceEditor.current.editor.getSession().getLine(actualRow);
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
			ann.row = actualRow;
			return ann;
		});
		if (annotations.length === 0) {
			let old = this.state.annotations;
			let newAnn = old.filter(ann => ann.row !== actualRow)
			this.setState({annotations: newAnn});
			this.aceEditor.current.editor.getSession().setAnnotations(this.state.annotations);
		} else {
			let old = this.state.annotations;
			annotations.forEach(a => old.push(a));
			old.filter(ann => ann.row !== actualRow)
			this.setState({annotations: old});
			this.aceEditor.current.editor.getSession().setAnnotations(this.state.annotations);
		}
	}


	setContextMenu = () => {
		this.errorOnThisLine();
	}

	errorOnThisLine = () => {
		let actualRow = this.aceEditor.current.editor.getSelection().getCursor().row;
		let annotations = this.aceEditor.current.editor.getSession().getAnnotations();
		let isError = [];
		isError = annotations.filter(ann => ann.row === actualRow);
		this.setState({
			errorOnThisLine: {
				value: isError.length > 0,
				name: isError.length > 0 ? isError[0].name : "null"
			}
		});
	}

	render() {
		return (
			<span>
				<ContextMenuTrigger id="contextMenu">
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
					           onCursorChange={this.setContextMenu}
					/>
				</ContextMenuTrigger>
				<ContextMenu id="contextMenu">
						<ContextMenuHandler errorInLine={this.state.errorOnThisLine}
						                    functions={{
							                    copy: this.props.ext,
							                    paste: this.paste,
							                    cut: this.cut,
							                    addDot: this.addDot
						                    }}/>
				</ContextMenu>
			</span>
		);
	}
}

export default ASPEditor;