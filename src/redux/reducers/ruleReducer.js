class Rule {
	name = ""
	rule = {
		start: 0,
		end: 0
	}

	constructor(name: string, rule: any) {
		this.name = name;
		this.rule = rule;
	}
}

export const ruleReducer = (state = [], action) => {
	switch (action.type) {
		case "ADD_RULE":
			state.push(new Rule(action.name, action.rule))
			return state;
		case "RESET_RULES":
			state = state.filter(r => false);
			return state;
		default:
			return state;
	}
}