import UserActionsTypes from 'store/user/user.types';
import axios from 'axios';
// eslint-disable-next-line
import jwt_decode from 'jwt-decode';

import { setToken } from 'store/user/user.utils';

export const register = (
    name,
    email,
    password,
    passwordConfirm,
) => dispatch => {
    dispatch({ type: UserActionsTypes.REGISTER_REQUEST });

    return axios
        .post('http://localhost:3000/api/user/register', {
            name,
            email,
            password,
            passwordConfirm,
        })
        .then(({ data }) => {
            localStorage.setItem('jwtToken', data.token);
            setToken(data.token);
            dispatch({
                type: UserActionsTypes.REGISTER_SUCCESS,
                payload: data,
            });
        })
        .catch(err =>
            dispatch({ type: UserActionsTypes.REGISTER_FAILURE, payload: err }),
        );
};

export const authenticate = (email, password) => dispatch => {
    dispatch({ type: UserActionsTypes.AUTH_REQUEST });

    return axios
        .post('http://localhost:3000/api/user/login', {
            email,
            password,
        })
        .then(({ data }) => {
            localStorage.setItem('jwtToken', data.token);
            setToken(data.token);
            dispatch({ type: UserActionsTypes.AUTH_SUCCESS, payload: data });
        })
        .catch(err =>
            dispatch({ type: UserActionsTypes.AUTH_FAILURE, payload: err }),
        );
};

const logOut = () => {
    setToken();
    localStorage.removeItem('jwtToken');
    // action to be written
    // dispatch({type: UserActionsTypes.SIGN_OUT});
};

export const checkSession = () => dispatch => {
    dispatch({ type: UserActionsTypes.CHECK_SESSION });

    if (localStorage.jwtToken) {
        const decoded = jwt_decode(localStorage.jwtToken);
        const currentTime = Date.now() / 1000;

        if (decoded.exp < currentTime) {
            logOut();
        } else {
            const payload = {
                id: decoded.id,
                email: decoded.email,
            };

            dispatch({ type: UserActionsTypes.AUTH_SUCCESS, payload });
        }
    } else {
        logOut();
    }
};
