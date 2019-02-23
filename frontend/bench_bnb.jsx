import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    window.signup = APIUtil.signup
    window.login = APIUtil.login
    window.logout = APIUtil.logout

    ReactDOM.render(<h1>Brandon and Melvin are cool</h1>, root);
});