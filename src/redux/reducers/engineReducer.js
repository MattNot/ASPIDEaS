export const engineReducer = (state = "dlv2", action) => {
	switch (action.type) {
		case "CHANGE_ENGINE":
			return action.newEngine
		default:
			return state
	}
}