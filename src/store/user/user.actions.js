import UserActionsTypes from 'store/user/user.types';
import axios from 'axios';

export const authenticateAction = (email, password) => dispatch => {
    dispatch({ type: UserActionsTypes.AUTH_REQUEST });

    return axios
        .post('http://localhost:3000/api/user/login', {
            email,
            password,
        })
        .then(payload =>
            dispatch({ type: UserActionsTypes.AUTH_SUCCESS, payload }),
        )
        .catch(err => dispatch({ type: UserActionsTypes.AUTH_FAILURE, err }));
};
