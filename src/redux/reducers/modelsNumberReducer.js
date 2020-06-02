export const modelsNumberReducer = (state = 1, action) => {
	switch (action.type) {
		case "SET_MODELS":
			return action.modelsNumber
		default:
			return state
	}
}