export const outputReducer = (state = "", action) => {
	switch (action.type) {
		case "SET_NEW_OUTPUT":
			return action.value
		default:
			return state
	}
}