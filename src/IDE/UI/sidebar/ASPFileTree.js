import React, {useEffect, useState} from "react";
import {Treebeard} from 'react-treebeard';
import {useDispatch, useSelector} from "react-redux";
import {editorValue, reloadAsync, setActiveFile, setActiveProject, setNewProjects} from "../../../redux/actions";


const ASPFileTree = ({size, notifyTree}) => {
	const projects = useSelector(state => state.projects);
	const dispatch = useDispatch();
	const [cursor, setCursor] = useState({})
	const [, reRenderMe] = useState(0)
	useEffect(() => {
		dispatch(reloadAsync())

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
			let father = projects.filter(f => f.id === node.father);
			dispatch(setActiveProject(father[0]))
			dispatch(setActiveFile(node))
			dispatch(editorValue(node.inputProgram))
		}
		setCursor(node);
		dispatch(setNewProjects(projects))
		reRenderMe(n => !n)
	}

	return (
		<Treebeard data={projects} onToggle={onSelect} style={{
			tree: {
				base: {
					height: "100%",
					width: "100%",
					position: "absolute"
				}
			}
		}}/>
	)
};

export default ASPFileTree;