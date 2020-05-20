import React from 'react';
import ASPEditor from "./ASPEditor";
import {useDispatch, useSelector} from "react-redux";

const EditorWrapper = () => {
	const value = useSelector(state => state.editorValue)
	const dispatch = useDispatch()
	const plugins = useSelector(state => state.plugins)
	return (
		<div>
			<ASPEditor value={value} setFather={dispatch} plugins={plugins}/>
		</div>
	);
};

export default EditorWrapper;