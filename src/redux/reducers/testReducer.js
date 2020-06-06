class Test {
	name: ""
	scope: []
	programFiles: []
	input: ""
	inputFiles: []
	assertions: []

	constructor(name: "", scope: [], programFiles: [], input: "", inputFiles: [], assert: []) {
		this.name = name;
		this.scope = scope;
		this.programFiles = programFiles;
		this.input = input;
		this.inputFiles = inputFiles;
		this.assertions = assert;
	}
}


export const testReducer = (state = [], action) => {
	switch (action.type) {
		case "RESET_TESTS":
			state = state.filter(r => false);
			return state;
		case "ADD_TEST":
			state.push(new Test(action.test.name, action.test.scope, action.test.programFiles, action.test.input, action.test.inputFiles, action.test.assertions))
			return state;
		default:
			return state;
	}
}