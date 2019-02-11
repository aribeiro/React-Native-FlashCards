import {combineReducers} from 'redux';

import decks from './decks';
import loading from './shared';
import notifications from './notifications';

export default combineReducers({
  decks,
  loading,
  notifications,
});
