import React from "react";


export const setNewProjects = (projects) => {
	return {
		type: "SET_NEW_PROJECTS",
		projects
	}
}

export const reloadProjects = () => {
	return {
		type: "RELOAD_ALL"
	}
}

export const addNewProject = (project) => {
	return {
		type: 'ADD_NEW',
		payload: project
	}
}

export const setActiveProject = (project) => {
	return {
		type: "SET_ACTIVE",
		project
	}
}

export const setActiveFile = (file) => {
	return {
		type: "SET_ACTIVE_FILE",
		file
	}
}

export const setActiveFileInput = (newValue) => {
	return {
		type: "SET_ACTIVE_FILE_VALUE",
		newValue
	}
}

export const addNewFile = (name) => {
	return {
		type: "ADD_NEW_FILE",
		name
	}
}

export const reloadAsync = () => {
	return (dispatch) => {
		fetch("/api/projects").then(data => data.json()).then(data => {
			let newProjects = []
			data.forEach(p => {
				newProjects.push({
					id: p.id,
					name: p.name,
					toggled: true,
					children: p.programs,
					active: false,
					father: p.father,
					cliOptions: p.cliOptions,
				});
			});
			dispatch(setNewProjects(newProjects))
		});
	}
}

