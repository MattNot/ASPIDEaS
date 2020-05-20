export const pluginsCombiner = (state = [], action) => {
	if (action.type === "SET_PLUGINS")
		return action.plugins
	return state
}