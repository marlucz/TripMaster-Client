import ExpensesActionsTypes from 'store/expenses/expenses.types';

export const getExpenses = () => ({
    type: ExpensesActionsTypes.GET_EXPENSES,
});
