import React, {useEffect, useState} from "react";
import Tree from "@naisutech/react-tree"


const ASPFileTree = ({size, setEditorValue}) => {
	const [projects, setProjects] = useState([])
	useEffect(() => {
		fetch("/api/projects").then(data => data.json()).then(data => setProjects(data))
	})

	function onSelect(file) {
		if (file.items === null || file.items === undefined) {
			setEditorValue(file.content)
		}
	}

	return (
		<Tree nodes={projects} onSelect={onSelect} size={size === undefined ? "full" : size}/>
	)
};

export default ASPFileTree;