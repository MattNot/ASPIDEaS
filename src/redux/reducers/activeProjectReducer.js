export const activeProjectReducer = (state = {cliOptions: []}, action) => {
	switch (action.type) {
		case "SET_ACTIVE":
			if (action.project === undefined)
				return state
			return action.project
		case "ADD_NEW_FILE":
			fetch("api/projects/" + state.id + "/newFile/" + action.name).then(r => r.text());
			return state
		case "ADD_OPTION":
			if (state.cliOptions.includes(action.value))
				return state
			state.cliOptions.push(action.value)
			fetch("api/projects/" + state.id + "/cliOptions/add/" + action.value).then(r => r.text());
			return state
		case "REMOVE_OPTION":
			state.cliOptions = state.cliOptions.filter(option => !(option === action.value))
			fetch("api/projects/" + state.id + "/cliOptions/remove/" + action.value).then(r => r.text());
			return state
		default:
			return state
	}
}