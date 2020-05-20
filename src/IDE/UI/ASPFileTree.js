import React, {useEffect, useState} from "react";
import {Treebeard} from 'react-treebeard';


const ASPFileTree = ({size, setEditorValue, notifyTree, setActiveProject}) => {
	const [projects, setProjects] = useState([])
	const [cursor, setCursor] = useState({})
	useEffect(() => {
		fetch("/api/projects").then(data => data.json()).then(data => {
			let newProjects = [];
			data.map(p => {
				newProjects.push({
					id: p.id,
					name: p.name,
					toggled: true,
					children: p.programs,
					active: false
				});
			});
			setProjects(newProjects);
		});
	}, [notifyTree])

	function onSelect(node, toggled) {
		if (cursor) {
			cursor.active = false;
		}
		node.active = true;
		if (node.children) {
			node.toggled = toggled;
			setActiveProject(node)
		} else {
			setEditorValue(node.inputProgram)
		}
		setCursor(node);
		setProjects(Object.assign([], projects));
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