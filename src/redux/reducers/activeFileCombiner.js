export const activeFileCombiner = (state = {}, action) => {
	if (action.type === "SET_ACTIVE_FILE") {
		return action.file
	}
	return state
}