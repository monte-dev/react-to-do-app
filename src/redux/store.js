import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import { strContains } from '../utils/strContains';

export const getFilteredCards = ({ cards, searchStr }, columnId) =>
	cards.filter(
		(card) =>
			card.columnId === columnId && strContains(card.title, searchStr)
	);

export const getAllColumns = (state) => state.columns;
export const getListById = ({ lists }, listId) =>
	lists.find((list) => list.id === listId);
export const getColumnsByList = ({ columns }, listId) =>
	columns.filter((column) => column.listId === listId);
export const getAllLists = (state) => state.lists;

export const addList = (payload) => ({ type: 'ADD_LIST', payload });
export const addColumn = (payload) => ({ type: 'ADD_COLUMN', payload });
export const addCard = (payload) => ({ type: 'ADD_CARD', payload });
export const searchCard = (payload) => ({ type: 'SEARCH', payload });

const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD_LIST':
			return {
				...state,
				lists: [...state.lists, { ...action.payload, id: shortid() }],
			};
		case 'ADD_COLUMN':
			return {
				...state,
				columns: [
					...state.columns,
					{ ...action.payload, id: shortid() },
				],
			};
		case 'ADD_CARD':
			return {
				...state,
				cards: [...state.cards, { ...action.payload, id: shortid() }],
			};
		case 'SEARCH':
			return {
				...state,
				searchStr: action.payload,
			};
		default:
			return state;
	}
};

const store = createStore(
	reducer,
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
