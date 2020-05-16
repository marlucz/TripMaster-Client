import UserActionsTypes from 'store/user/user.types';
import axios from 'axios';

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
        .then(({ data }) =>
            dispatch({
                type: UserActionsTypes.REGISTER_SUCCESS,
                payload: data,
            }),
        )
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
            dispatch({ type: UserActionsTypes.AUTH_SUCCESS, payload: data });
        })
        .catch(err =>
            dispatch({ type: UserActionsTypes.AUTH_FAILURE, payload: err }),
        );
};
