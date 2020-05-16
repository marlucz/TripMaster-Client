import UserActionsTypes from 'store/user/user.types';

const INITIAL_STATE = {
    currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionsTypes.REGISTER_SUCCESS:
        case UserActionsTypes.AUTH_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;
