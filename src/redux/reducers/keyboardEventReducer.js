export const keyboardEventReducer = (state = false, action) => {
	switch (action.type) {
		case "SET_LAST_KEYBOARD_EVENT":
			state = action.event
			return state
		default:
			return state
	}
}

export const multipleReducer = (state = [], action) => {
	switch (action.type) {
		case "SET_MULTIPLES":
			return action.multiples
		default:
			return state
	}
}