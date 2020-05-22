export const pluginsReducer = (state = [], action) => {
	if (action.type === "SET_PLUGINS")
		return action.plugins
	return state
}