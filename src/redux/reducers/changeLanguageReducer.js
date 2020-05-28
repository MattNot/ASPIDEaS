import locales from "../../i18n";

export const changeLanguageReducer = (state = locales.en, action) => {
	switch (action.type) {
		case 'ITALIAN':
			return locales.it
		case 'ENGLISH':
			return locales.en
		default:
			return state
	}
}
