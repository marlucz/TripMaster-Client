import { createSelector } from 'reselect';

const selectExpenses = state => state.expenses;

export const selectAllExpenses = createSelector(
    [selectExpenses],
    expenses => expenses.items,
);
export const selectExpensesIsLoading = createSelector(
    [selectExpenses],
    expenses => expenses.isLoading,
);
