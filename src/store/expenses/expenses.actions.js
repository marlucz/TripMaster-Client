import ExpensesActionsTypes from 'store/expenses/expenses.types';
import axios from 'axios';

export const fetchExpenses = slug => (dispatch, getState) => {
    dispatch({ type: ExpensesActionsTypes.FETCH_EXPENSES_REQUEST });

    return axios
        .get(`http://localhost:4000/api/trips/${slug}/expenses`, {
            params: {
                userID: getState().user.currentUser.id,
            },
        })
        .then(({ data }) => {
            dispatch({
                type: ExpensesActionsTypes.FETCH_EXPENSES_SUCCESS,
                payload: data,
            });
        })
        .catch(err =>
            dispatch({
                type: ExpensesActionsTypes.FETCH_EXPENSES_FAILURE,
                payload: err,
            }),
        );
};

export const addExpenseItem = itemContent => (dispatch, getState) => {
    dispatch({
        type: ExpensesActionsTypes.ADD_EXPENSE_ITEM_REQUEST,
    });

    const { slug } = getState().trips.activeTrip;

    return axios
        .post(`http://localhost:4000/api/trips/${slug}/expenses`, {
            userID: getState().user.currentUser.id,
            ...itemContent,
        })
        .then(payload => {
            dispatch({
                type: ExpensesActionsTypes.ADD_EXPENSE_ITEM_SUCCESS,
                payload,
            });
        })
        .catch(err => {
            dispatch({
                type: ExpensesActionsTypes.ADD_EXPENSE_ITEM_FAILURE,
                payload: err,
            });
        });
};

export const removeExpenseItem = (slug, id) => dispatch => {
    dispatch({ type: ExpensesActionsTypes.REMOVE_EXPENSE_ITEM_REQUEST });

    return axios
        .delete(`http://localhost:4000/api/trips/${slug}/expenses/${id}`)
        .then(() => {
            dispatch({
                type: ExpensesActionsTypes.REMOVE_EXPENSE_ITEM_SUCCESS,
                payload: {
                    id,
                },
            });
        })
        .catch(err =>
            dispatch({
                type: ExpensesActionsTypes.REMOVE_EXPENSE_ITEM_FAILURE,
                payload: err,
            }),
        );
};
