import UserActionsTypes from 'store/user/user.types';

const INITIAL_STATE = {
    userID: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionsTypes.AUTH_SUCCESS:
            return {
                ...state,
                userID: action.payload.data._id,
            };
        default:
            return state;
    }
};

export default userReducer;
