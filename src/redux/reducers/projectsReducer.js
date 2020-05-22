export const projectsReducer = (state = [], action) => {
	switch (action.type) {
		case 'SET_NEW_PROJECTS':
			return action.projects
		case 'ADD_NEW':
			state.push(action.payload)
			return state
		default:
			return state
	}
}