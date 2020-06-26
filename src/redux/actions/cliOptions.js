export const addOption = (value: string) => {
	return {
		type: "ADD_OPTION",
		value
	}
}
export const removeOption = (value: string) => {
	return {
		type: "REMOVE_OPTION",
		value
	}
}