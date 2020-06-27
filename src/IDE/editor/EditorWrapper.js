import React from 'react';
import ASPEditor from "./ASPEditor";
import {useDispatch, useSelector} from "react-redux";
import {Label} from "semantic-ui-react";

const EditorWrapper = (props) => {
	const value = useSelector(state => state.editorValue)
	const activeProject = useSelector(state => state.activeProject)
	const activeFile = useSelector(state => state.activeFile)
	const dispatch = useDispatch()
	const plugins = useSelector(state => state.plugins)
	return (
		<div>
			{activeFile.name &&
			<ASPEditor value={value} dispatch={dispatch} plugins={plugins} activeProject={activeProject}
			           activeFile={activeFile} handleSave={props.handleSave}/>
			}
			{!activeFile.name &&
			<div style={{width: "100vw", height: "100vh"}}>
				<Label style={{position: "absolute", top: "50vh", left: "50vw"}} color={"black"}>Click on a File</Label>
			</div>
			}
		</div>
	);
};

export default EditorWrapper;