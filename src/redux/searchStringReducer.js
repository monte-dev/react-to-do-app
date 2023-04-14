import { strContains } from '../utils/strContains';

// actions
const createActionName = (actionName) => `app/${actionName}`;
const SEARCH = createActionName('SEARCH');

export const searchCard = (payload) => ({ type: SEARCH, payload });

export const getFilteredCards = ({ cards, searchStr }, columnId) =>
	cards.filter(
		(card) =>
			card.columnId === columnId && strContains(card.title, searchStr)
	);

export const searchStringReducer = (statePart = '', action) => {
	switch (action.type) {
		case SEARCH:
			return action.payload;
		default:
			return statePart;
	}
};
