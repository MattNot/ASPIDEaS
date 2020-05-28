export const loginReducer = (state = false, action) => {
	if (action.type === "SET_LOGIN")
		return action.boolean
	return state
}