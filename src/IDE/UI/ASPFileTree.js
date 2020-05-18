import React, {useEffect, useState} from "react";
import {Treebeard} from 'react-treebeard';


const ASPFileTree = ({size, setEditorValue, notifyTree}) => {
	const [projects, setProjects] = useState([])
	const [cursor, setCursor] = useState(false)
	useEffect(() => {
		setProjects(obj)
		fetch("/api/projects").then(data => data.json()).then(data => {
			setProjects(data);
		})
	}, [notifyTree])

	function onSelect(node, toggled) {
		console.log(cursor)
		console.log(node)
		if (cursor) {
			cursor.active = false;
		}
		node.active = true;
		if (node.children) {
			node.toggled = toggled;
		}
		setCursor(node)
		setProjects(Object.assign({}, projects));
	}

	return (
		<Treebeard data={projects} onToggle={onSelect} style={{
			tree: {
				base: {
					height: "100%"
				}
			}
		}}/>
	)
};

export default ASPFileTree;