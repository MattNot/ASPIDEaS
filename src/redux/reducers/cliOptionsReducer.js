export const cliOptionsReducer = (state = [], action) => {
	switch (action.type) {
		case "ADD_OPTION":
			state.push(action.value)
			return state
		case "REMOVE_OPTION":
			state = state.filter(option => !option.equals(action.value))
			return state
		default:
			return state
	}
}