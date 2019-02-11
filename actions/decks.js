import * as API from '../api/api';
import handleInitialData from './shared';
export const GET_DECKS = 'GET_DECKS';
export const GET_DECK = 'GET_DECK';
export const DELETE_DECK = 'DELETE_DECK';
export const SAVE_DECK_TITLE = 'SAVE_DECK_TITLE';
export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK';

export function getDeck(key) {
  return {
    type: GET_DECK,
    key,
  };
}
export function getDecks(decks) {
  return {
    type: GET_DECKS,
    decks,
  };
}

export function saveDeckTitle(title, key) {
  return {
    type: SAVE_DECK_TITLE,
    title,
    key,
  };
}
export function addCardToDeck(card, key) {
  return {
    type: ADD_CARD_TO_DECK,
    card,
    key,
  };
}

export function handleGetDeck(key) {
  return dispatch => {
    API.getDeck(key).then(deck => {
      dispatch(getDeck(deck));
    });
  };
}
export function handleSaveDeckTitle(title, key) {
  return dispatch => {
    dispatch(saveDeckTitle(title, key));
    API.saveDeckTitle({title, key});
  };
}

export function handleAddCardToDeck(card, key) {
  return dispatch => {
    dispatch(addCardToDeck(card, key));
    API.getDeck(key).then(deck => {
      const newDeck = {
        ...deck,
        questions: [...deck.questions, card],
      };
      API.submitQuestion(newDeck, key);
    });
  };
}
