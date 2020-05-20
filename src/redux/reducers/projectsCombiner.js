export const projectsCombiner = async (state = [], action) => {
	switch (action.type) {
		case 'SET_NEW':
			return action.projects
		case 'ADD_NEW':
			state.push(action.payload)
			return state
		case 'RELOAD_ALL':
			let newProjects = [];
			return await fetch("/api/projects").then(data => data.json()).then(data => {
				data.map(p => {
					newProjects.push({
						id: p.id,
						name: p.name,
						toggled: true,
						children: p.programs,
						active: false
					});
				});
				return newProjects;
			});
	}
}