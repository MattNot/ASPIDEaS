import React, {useEffect, useState} from "react";
import {Treebeard} from 'react-treebeard';
import {useDispatch, useSelector} from "react-redux";
import {reloadProjects, setActiveFile, setActiveProject, setNewProjects} from "../../redux/actions/projects";
import {editorValue} from "../../redux/actions/editorValue";


const ASPFileTree = ({size, notifyTree}) => {
	// const [projects, setProjects] = useState([])
	const projects = useSelector(state => state.projects);
	const dispatch = useDispatch();
	const [cursor, setCursor] = useState({})
	useEffect(() => {
		dispatch(reloadProjects())
	}, [notifyTree])

	function onSelect(node, toggled) {
		if (cursor) {
			cursor.active = false;
		}
		node.active = true;
		if (node.children) {
			node.toggled = toggled;
			dispatch(setActiveProject(node))
		} else {
			dispatch(setActiveFile(node))
			dispatch(editorValue(node.inputProgram))
		}
		setCursor(node);
		dispatch(setNewProjects(projects))
	}

	return (
		<Treebeard data={projects} onToggle={onSelect} style={{
			tree: {
				base: {
					height: "100%",
					width: "100%"
				}
			}
		}}/>
	)
};

export default ASPFileTree;