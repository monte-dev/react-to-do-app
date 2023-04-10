export const strContains = (string, query) => {
	if (string.toLowerCase().includes(query.toLowerCase())) {
		return true;
	} else {
		return false;
	}
};
