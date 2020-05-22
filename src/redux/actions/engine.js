export const engine = (newEngine) => {
	return {
		type: "CHANGE_ENGINE",
		newEngine
	}
}