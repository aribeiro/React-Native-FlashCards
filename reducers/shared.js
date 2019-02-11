import {UPDATE_LOADING} from '../actions/shared';

export default function loading(state = true, action) {
  switch (action.type) {
    case UPDATE_LOADING:
      return action.loading;
    default:
      return state;
  }
}
