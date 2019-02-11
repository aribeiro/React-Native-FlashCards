import {
  GET_DECKS,
  GET_DECK,
  SAVE_DECK_TITLE,
  DELETE_DECK,
  ADD_CARD_TO_DECK,
} from '../actions/decks';

export default function decks(state = {}, action) {
  switch (action.type) {
    case GET_DECK:
      return state[action.key];
    case GET_DECKS:
      return {...state, ...action.decks};
    case SAVE_DECK_TITLE:
      return {...state, [action.key]: {title: action.title, questions: []}};
    case DELETE_DECK:
      return state.filter(k => k === action.key);
    case ADD_CARD_TO_DECK:
      return {
        ...state,
        [action.key]: {
          ...state[action.key],
          questions: [...state[action.key].questions, action.card],
        },
      };
    default:
      return state;
  }
}
