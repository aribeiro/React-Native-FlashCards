import { combineReducers } from 'redux'

import decks from './decks'
import loading from './shared'

export default combineReducers({
    decks,
    loading
})
