export const activeProjectReducer = (state = {}, action) => {
	switch (action.type) {
		case "SET_ACTIVE":
			if (action.project === undefined)
				return state
			return action.project
		case "ADD_NEW_FILE":
			fetch("api/projects/" + state.id + "/newFile/" + action.name).then(r => r.text());
			return state
		default:
			return state
	}
}