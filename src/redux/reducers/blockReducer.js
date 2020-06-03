class Block {
	name: string
	rules: string[]

	constructor(name, rules) {
		this.name = name;
		this.rules = rules;
	}
}

export const blockReducer = (state = [], action) => {
	switch (action.type) {
		case "RESET_BLOCK":
			state = state.filter(r => false);
			return state;
		case "ADD_BLOCK":
			let t = false;
			for (let i = 0; i < state.length; i++) {
				if (state[i].name && state[i].name === action.name) {
					t = true;
					if (action.rules)
						state[i].rules.push(action.rules)
				}
			}
			if (!t)
				state.push(new Block(action.name, action.rules));
			return state;
		default:
			return state;
	}
}