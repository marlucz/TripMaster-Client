import ExpensesActionsTypes from 'store/expenses/expenses.types';

const INITIAL_STATE = {
    items: [],
    isLoading: false,
};

const expensesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ExpensesActionsTypes.FETCH_EXPENSES_REQUEST:
        case ExpensesActionsTypes.ADD_EXPENSE_ITEM_REQUEST:
        case ExpensesActionsTypes.REMOVE_EXPENSE_ITEM_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case ExpensesActionsTypes.FETCH_EXPENSES_SUCCESS:
            return {
                ...state,
                items: [...action.payload],
                isLoading: false,
            };
        case ExpensesActionsTypes.ADD_EXPENSE_ITEM_SUCCESS:
            return {
                ...state,
                items: [...state.items, action.payload.data],
                isLoading: false,
            };
        case ExpensesActionsTypes.REMOVE_EXPENSE_ITEM_SUCCESS:
            return {
                ...state,
                items: [
                    ...state.items.filter(
                        item => item._id !== action.payload.id,
                    ),
                ],
                isLoading: false,
            };
        default:
            return state;
    }
};

export default expensesReducer;
