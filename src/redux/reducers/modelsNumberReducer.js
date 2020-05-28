export const modelsNumberReducer = (state = 0, action) => {
	switch (action.type) {
		case "SET_MODELS":
			return action.modelsNumber
		default:
			return state
	}
}