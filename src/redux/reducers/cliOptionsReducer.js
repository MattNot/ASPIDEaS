export const cliOptionsReducer = (state = [], action) => {
	switch (action.type) {
		case "ADD_OPTION":
			if (state.includes(action.value))
				return state
			state.push(action.value)
			return state
		case "REMOVE_OPTION":
			state = state.filter(option => !(option === action.value))
			return state
		default:
			return state
	}
}