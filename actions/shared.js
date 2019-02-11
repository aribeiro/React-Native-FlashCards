import {getDecks} from './decks';
import * as API from '../api/api';

export const UPDATE_LOADING = 'UPDATE_LOADING';

export function updateLoading(loading) {
  return {
    type: UPDATE_LOADING,
    loading,
  };
}

export function handleInitialData() {
  return dispatch => {
    API.getDecks().then(decks => {
      dispatch(getDecks(decks));
      dispatch(updateLoading(false))
    });
  };
}
