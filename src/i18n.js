class English {
	constructor() {
		this.words = {
			"save": "Save",
			"edit": "Edit",
			"file": "File",
			"newproj": "Add a new project",
			"projname": "Project name",
			"changelang": "Cambia lingua a Italiano",
			"newfile": "Add a new file in the active project"
		}
	}

	__(word: string) {
		word = word.toLowerCase();
		return this.words[word] || "LocaleError";
	}
}

class Italian extends English {
	constructor() {
		super();
		this.words["save"] = "Salva";
		this.words["edit"] = "Modifica";
		this.words["changelang"] = "Change language in English";
		this.words["newproj"] = "Crea un nuovo progetto";
		this.words["projname"] = "Nome del progetto";
		this.words["newfile"] = "Crea nuovo file";

	}
}

const locales = {
	en: new English(),
	it: new Italian()
};
export default locales;