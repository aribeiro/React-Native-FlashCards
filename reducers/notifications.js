import {UPDATE_NOTIFICATION} from '../actions/notifications';

export default function notifications(state = false, action) {
  console.log('REDUCER NOTIFICATION', {state: state, action: action});
  switch (action.type) {
    case UPDATE_NOTIFICATION:
      return action.notification;
    default:
      return state;
  }
}
