class English {
	constructor() {
		this.words = {
			"save": "Save",
			"edit": "Edit",
			"file": "File",
			"changelang": "Cambia lingua a Italiano"
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
		this.words["changelang"] = "Change language in English"
	}
}

const locales = {
	en: new English(),
	it: new Italian()
};
export default locales;