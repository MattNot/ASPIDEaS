export const changeExecTest = () => {
	return {
		type: "CHANGE_TEST"
	}
}

export const addBlock = (name, rules) => {
	return {
		type: "ADD_BLOCK",
		name,
		rules
	}
}

export const resetBlock = () => {
	return {
		type: "RESET_BLOCK"
	}
}