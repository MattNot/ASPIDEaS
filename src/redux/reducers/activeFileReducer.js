export const activeFileReducer = (state = {}, action) => {
	if (action.type === "SET_ACTIVE_FILE") {
		return action.file
	}
	if (action.type === "SET_ACTIVE_FILE_VALUE") {
		return {
			...state,
			inputProgram: action.newValue
		}
	}
	return state
}