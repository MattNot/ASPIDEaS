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
import {ContextMenu, ContextMenuTrigger} from "react-contextmenu";
import EditorHandler from "./EditorHandler";
import ContextMenuHandler from "../UI/contextMenu/ContextMenuHandler";
import {
	editorValue,
	resetBlock,
	resetRules,
	resetTests,
	setActiveFileInput,
	setActiveProject
} from "../../redux/actions";

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
		setInterval(this.parse, 2000)
	}

	componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS) {
		if (prevProps.value !== this.props.value) {
			this.setState({
				currentValue: this.props.value
			})
			this.activeProject = this.props.activeProject;
			this.activeFile = this.props.activeFile;

		}
		if (prevProps.plugins !== this.props.plugins) {
			this.editorHandler = new EditorHandler(this.aceEditor, this.props.plugins);
		}
		if (prevProps.activeFile.name !== this.props.activeFile.name) {
			this.parse(this.props.value)
		}
	}

	//FIXME: This is **NOT** the way it should be. You should use workers but I didn't manage to find a way to do it.
	//FIXME: Matteo Notaro, 28/03/2020
	parse = () => {
		this.dispatch(resetBlock())
		this.dispatch(resetRules())
		this.dispatch(resetTests())
		let {lineContext} = this.state;
		const newObj = this.editorHandler.parse(this.aceEditor.current.editor.getSession().getAnnotations(), lineContext);
		this.setState({lineContext: newObj.lineContext});
		this.aceEditor.current.editor.getSession().setAnnotations(newObj.annotations);
	}


	editValue = (val) => {
		this.dispatch(editorValue(val));
		this.dispatch(setActiveFileInput(val))
		this.activeProject.children = this.activeProject.children.map(child => {
			if (child.name === this.activeFile.name) {
				child.inputProgram = this.activeFile.inputProgram;
			}
			return child;
		})
		this.dispatch(setActiveProject(this.activeProject));
	}


	setContextMenu = () => {
		this.errorOnThisLine();
		this.setState({activeLine: this.aceEditor.current.editor.getSelection().getCursor().row});
	}

	errorOnThisLine = () => {
		let actualRow = this.aceEditor.current.editor.getSelection().getCursor().row;
		let annotations = this.aceEditor.current.editor.getSession().getAnnotations();
		console.log(actualRow)
		let isError = [];
		isError = annotations.filter(ann => ann.row === actualRow);
		if (isError.length > 0) {
			this.setState({
				errorOnThisLine: {
					value: true,
					name: isError[0].name,
					unsafeVariables: isError[0].unsafeVariables,
					line: actualRow
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
				<ContextMenuTrigger id="contextMenu" holdToDisplay={-1}>
					<AceEditor theme="dracula"
					           mode="text"
					           onChange={(val, event) => this.editValue(val)}
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
						           bindKey: {win: "Ctrl-S", mac: "Command-S"},
						           exec: () => {
							           this.props.handleSave();
						           }
					           }]}
					/>
				</ContextMenuTrigger>
				<div style={{position: "fixed", top: "-{parentTop}px", left: "-{parentLeft}px"}}>
					<ContextMenu id="contextMenu" hideOnLeave style={{
						position: "relative !important"
					}}
					             onShow={event => {
						             document.getElementsByClassName("react-contextmenu")[0].getBoundingClientRect().x = 0;
						             document.getElementsByClassName("react-contextmenu")[0].getBoundingClientRect().y = 0;
						             console.log(document.getElementsByClassName("react-contextmenu")[0].getBoundingClientRect());
					             }}>
						{this.editorHandler !== undefined &&
						<ContextMenuHandler errorInLine={this.state.errorOnThisLine}
						                    handler={this.editorHandler}
						                    context={this.state.lineContext[this.state.activeLine]}
						/>}
					</ContextMenu>
				</div>
			</span>
		);
	}
}

export default ASPEditor;