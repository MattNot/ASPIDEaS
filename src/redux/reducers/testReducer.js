class Test {
	name: ""
	scope: []
	programFiles: []
	input: ""
	inputFiles: []
	assert: []

	constructor(name: "", scope: [], programFiles: [], input: "", inputFiles: [], assert: []) {
		this.name = name;
		this.scope = scope;
		this.programFiles = programFiles;
		this.input = input;
		this.inputFiles = inputFiles;
		this.assert = assert;
	}
}


export const testReducer = (state = [], action) => {
	switch (action.type) {
		case "RESET_TESTS":
			state = state.filter(r => false);
			return state;
		case "ADD_TEST":
			state.push(new Test(action.name, action.scope, action.input, action.inputFiles, action.assert))
			return state;
		default:
			return state;
	}
}