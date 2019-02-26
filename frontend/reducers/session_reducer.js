import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
} from '../actions/session_actions';

const _nullUser = Object.freeze({
  id: null
});

const sessionReducer = (oldstate = {}, action) => {
  Object.freeze(oldstate);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return {id: action.currentUser.id};
    case LOGOUT_CURRENT_USER:
      return {id: null};
    default:
      return _nullUser;
  }
};

export default sessionReducer;