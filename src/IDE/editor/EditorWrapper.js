import React from 'react';
import ASPEditor from "./ASPEditor";
import {useDispatch, useSelector} from "react-redux";

const EditorWrapper = (props) => {
	const value = useSelector(state => state.editorValue)
	const activeProject = useSelector(state => state.activeProject)
	const activeFile = useSelector(state => state.activeFile)
	const dispatch = useDispatch()
	const plugins = useSelector(state => state.plugins)
	return (
		<div>
			<ASPEditor value={value} dispatch={dispatch} plugins={plugins} activeProject={activeProject}
			           activeFile={activeFile} handleSave={props.handleSave}/>
		</div>
	);
};

export default EditorWrapper;