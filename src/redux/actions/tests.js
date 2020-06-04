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

export const addRule = (name, rule) => {
	return {
		type: "ADD_RULE",
		name,
		rule
	}
}

export const resetRules = () => {
	return {
		type: "RESET_RULES"
	}
}

export const addTest = (test) => {
	return {
		type: "ADD_TEST",
		test
	}
}

export const resetTests = () => {
	return {
		type: "RESET_TESTS"
	}
}