export const changeEditorValueReducer = (state = "", action) => {
	if (action.type === "CHANGE_EDITOR_VALUE") {
		return action.value;
	}
	return state;
}