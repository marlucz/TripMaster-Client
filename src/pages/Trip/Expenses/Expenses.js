import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector, createSelector } from 'reselect';

import withPageContext from 'hoc/withPageContext';

import { setCurrentActiveTrip as setCurrentActiveTripAction } from 'store/trips/trips.actions';
import { selectAllTrips, selectActiveTrip } from 'store/trips/trips.selectors';
import {
    selectAllExpenses,
    selectExpensesIsLoading,
} from 'store/expenses/expenses.selectors';

import { fetchExpenses as fetchExpensesAction } from 'store/expenses/expenses.actions';

import {
    StyledExpensesList,
    StyledButton,
    StyledInlinEButton,
} from 'pages/Trip/Expenses/Expenses.styles';
import ItemsFetchingTemplate from 'templates/ItemsFetchingTemplate';
import AuthUserTemplate from 'templates/AuthUserTemplate';
import ExpenseItem from 'components/ExpenseItem/ExpenseItem';
import PageHeader from 'components/PageHeader/PageHeader';

import { ExpenseItemPropTypes } from 'utils/propTypes';

const Expenses = ({
    isExpensesLoading,
    fetchExpenses,
    expenses,
    pageContext: { pageType, toggleAddItemForm },
    slugFromURI,
    setActiveTripInState,
    activeTrip,
}) => {
    useEffect(() => {
        // check if there is activeTrip set and if it matches with parameter from the link address
        // eslint-disable-next-line
        if (!activeTrip || activeTrip.slug !== slugFromURI) {
            setActiveTripInState(slugFromURI);
            fetchExpenses(slugFromURI);
        } else {
            fetchExpenses(activeTrip.slug);
        }
    }, []);
    return (
        <AuthUserTemplate withTrip>
            <ItemsFetchingTemplate isLoading={isExpensesLoading}>
                <PageHeader header={activeTrip.slug} subHeader={pageType} />
                {expenses.length ? (
                    <StyledExpensesList>
                        {expenses.map(
                            ({
                                _id,
                                date,
                                hour,
                                name,
                                tags,
                                value,
                                currency,
                            }) => (
                                <ExpenseItem
                                    id={_id}
                                    key={name}
                                    date={date}
                                    hour={hour}
                                    name={name}
                                    tags={tags}
                                    value={value}
                                    currency={currency}
                                    slug={activeTrip.slug}
                                />
                            ),
                        )}
                        <StyledButton secondary onClick={toggleAddItemForm}>
                            Add Expense
                        </StyledButton>
                    </StyledExpensesList>
                ) : (
                    <h2>
                        You don&apos;t have any expenses yet, do you want to
                        <StyledInlinEButton onClick={toggleAddItemForm}>
                            {' '}
                            ADD FIRST EXPENSE?
                        </StyledInlinEButton>
                    </h2>
                )}
            </ItemsFetchingTemplate>
        </AuthUserTemplate>
    );
};

Expenses.propTypes = {
    expenses: PropTypes.arrayOf(ExpenseItemPropTypes).isRequired,
    pageContext: PropTypes.shape({
        pageType: PropTypes.oneOf(['trips', 'itinerary', 'expenses', 'todo']),
        isAddItemFormVisible: PropTypes.bool,
        toggleAddItemForm: PropTypes.func,
    }).isRequired,
};

const mapDispatchToProps = dispatch => ({
    setActiveTripInState: slug => dispatch(setCurrentActiveTripAction(slug)),
    fetchExpenses: slug => dispatch(fetchExpensesAction(slug)),
});

const mapStateToProps = (state, ownProps) => {
    // ownProps selector to memoize params.id and pass it to props
    const selectPageParams = () => ownProps.match.params;
    const selectPageId = createSelector(
        [selectPageParams],
        params => params.id,
    );

    return createStructuredSelector({
        trips: selectAllTrips,
        activeTrip: selectActiveTrip,
        expenses: selectAllExpenses,
        slugFromURI: selectPageId,
        isExpensesLoading: selectExpensesIsLoading,
    });
};

export default withPageContext(
    connect(mapStateToProps, mapDispatchToProps)(Expenses),
);
