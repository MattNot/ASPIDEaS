import React from "react";
import AceEditor from "react-ace";
import "ace-builds"
import "ace-builds/webpack-resolver"
import "ace-builds/src-noconflict/theme-dracula"
import "ace-builds/src-min-noconflict/snippets/text"
import "ace-builds/src-min-noconflict/ext-language_tools"
import "ace-builds/src-min-noconflict/keybinding-vscode"
import snippets from "./ASPSnippets";
import CustomAspMode from "./Asp-Mode";
import ContextMenuHandler from "../UI/contextMenu/ContextMenuHandler";
import {ContextMenu, ContextMenuTrigger} from "react-contextmenu";
import EditorHandler from "./EditorHandler";
import {editorValue, setActiveFileInput} from "../../redux/actions";

let TextSnippets = window.ace.acequire("ace/snippets/text");

const styles = {
	EDITOR: {
		width: "100%",
		height: "80vh"
	}
};

class ASPEditor extends React.Component {

	constructor(props) {
		super(props);
		if (TextSnippets !== undefined)
			TextSnippets.snippetText = snippets;
		this.aceEditor = React.createRef();
		this.state = {
			currentValue: props.value,
			annotations: [],
			lineContext: [],
			errorOnThisLine: {},
			activeLine: 0
		};
		this.dispatch = props.dispatch;
		this.activeProject = props.activeProject;
		this.activeFile = props.activeFile
		this.editorHandler = new EditorHandler(this.aceEditor, props.plugins);
	}


	componentDidMount() {
		this.aceEditor.current.editor.getSession().setMode(new CustomAspMode());
		this.aceEditor.current.editor.setBehavioursEnabled(true);
		this.aceEditor.current.editor.setWrapBehavioursEnabled(true);
	}

	componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS) {
		if (prevProps.value !== this.props.value) {
			this.setState({
				currentValue: this.props.value
			})
		}
		if (prevProps.plugins !== this.props.plugins) {
			this.editorHandler = new EditorHandler(this.aceEditor, this.props.plugins);
		}
		if (prevProps.activeFile !== this.props.activeFile) {
			let splittedInput = this.props.value.split("\n");
			splittedInput.forEach(row => {
				this.parse(row, true)
			})
		}
	}

	//FIXME: This is **NOT** the way it should be. You should use ace workers but I didn't manage to find a way to do it.
	//FIXME: I spent a week looking for that, everyone uses the workers that are already in the ace-builds/src-noconflict/ folder, maybe there's a way to override one (like snippets)
	//FIXME: Matteo Notaro, 28/03/2020
	parse(val: string, global) {
		if (!global) {
			this.dispatch(editorValue(val));
			this.dispatch(setActiveFileInput(val))
		}
		let {lineContext} = this.state;
		const newAnnotations = this.editorHandler.parse(this.state.annotations, lineContext);
		this.setState({annotations: newAnnotations, lineContext: lineContext});
		this.aceEditor.current.editor.getSession().setAnnotations(newAnnotations);
	}


	setContextMenu = () => {
		this.errorOnThisLine();
		this.setState({activeLine: this.aceEditor.current.editor.getSelection().getCursor().row});
	}

	errorOnThisLine = () => {
		let actualRow = this.aceEditor.current.editor.getSelection().getCursor().row;
		let annotations = this.aceEditor.current.editor.getSession().getAnnotations();
		let isError = [];
		isError = annotations.filter(ann => ann.row === actualRow);
		if (isError.length > 0) {
			this.setState({
				errorOnThisLine: {
					value: true,
					name: isError[0].name,
					unsafeVariables: isError[0].unsafeVariables
				}
			});
		} else {
			this.setState({
				errorOnThisLine: {
					value: false,
					name: undefined,
					unsafeVariables: undefined
				}
			})
		}
	}

	render() {
		return (
			<span>
				<ContextMenuTrigger id="contextMenu">
					<AceEditor theme="dracula"
					           mode="text"
					           onChange={(val, event) => this.parse(val, false)}
					           name="unique"
					           editorProps={{$blockScrolling: true}}
					           ref={this.aceEditor}
					           enableLiveAutocompletion={true}
					           enableBasicAutocompletion={true}
					           enableSnippets={true}
					           style={styles.EDITOR}
					           showPrintMargin={false}
					           setOptions={{useWorker: true}}
					           value={this.props.value}
					           onCursorChange={this.setContextMenu}
					           commands={[{
						           name: "Save",
						           bindKey: {win: "Ctrl-S", mac: "Command-M"},
						           exec: () => {
							           this.props.handleSave();
						           }
					           }]}
					/>
				</ContextMenuTrigger>
				<ContextMenu id="contextMenu">
					{this.editorHandler !== undefined && <ContextMenuHandler errorInLine={this.state.errorOnThisLine}
					                                                         handler={this.editorHandler}
					                                                         context={this.state.lineContext[this.state.activeLine]}
					/>}
				</ContextMenu>
			</span>
		);
	}
}

export default ASPEditor;