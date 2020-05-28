export const execTestsReducer = (state = false, action) => {
	switch (action.type) {
		case "CHANGE_TEST":
			return !state
		default:
			return state
	}
}