import * as APIUtil from '../util/session_api_util';

export const login = user => dispatch => (
    APIUtil.login(user)
        .then(user => (dispatch(receiveCurrentUser(user))), 
        error => (
            dispatch(receiveErrors(error.responseJSON))
        ))
);