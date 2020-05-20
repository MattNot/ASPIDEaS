export const setNewProjects = (projects) => {
	return {
		type: "SET_NEW",
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

export const addNewFile = (name) => {
	return {
		type: "ADD_NEW_FILE",
		name
	}
}