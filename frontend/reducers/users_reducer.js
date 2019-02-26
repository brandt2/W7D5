import {
  RECEIVE_CURRENT_USER,
} from '../actions/session_actions';
import merge from 'lodash/merge';

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      let newState = merge({}, oldState, {[action.currentUser.id]: action.currentUser});
      return newState;
    default:
      return oldState;
  }
};

export default usersReducer;