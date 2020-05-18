import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import withPageContext from 'hoc/withPageContext';

import {
    StyledExpensesList,
    StyledButton,
    StyledInlinEButton,
} from 'pages/Trip/Expenses/Expenses.styles';
import AuthUserTemplate from 'templates/AuthUserTemplate';
import ExpenseItem from 'components/ExpenseItem/ExpenseItem';
import PageHeader from 'components/PageHeader/PageHeader';

const Expenses = ({
    expenses,
    pageContext: { pageType, toggleAddItemForm },
}) => (
    <AuthUserTemplate withTrip>
        <PageHeader header="My trip" subHeader={pageType} />
        {expenses.length ? (
            <StyledExpensesList>
                {expenses.map(
                    ({ _id, date, hour, name, tags, value, currency }) => (
                        <ExpenseItem
                            id={_id}
                            key={name}
                            date={date}
                            hour={hour}
                            name={name}
                            tags={tags}
                            value={value}
                            currency={currency}
                        />
                    ),
                )}
                <StyledButton secondary onClick={toggleAddItemForm}>
                    Add Expense
                </StyledButton>
            </StyledExpensesList>
        ) : (
            <h2>
                You don&apos;t have any trips, do you want to
                <StyledInlinEButton onClick={toggleAddItemForm}>
                    {' '}
                    ADD FIRST EXPENSE?
                </StyledInlinEButton>
            </h2>
        )}
    </AuthUserTemplate>
);

Expenses.propTypes = {
    expenses: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.number.isRequired,
            date: PropTypes.oneOfType([
                PropTypes.instanceOf(Date),
                PropTypes.string,
            ]).isRequired,
            hour: PropTypes.oneOfType([
                PropTypes.instanceOf(Date),
                PropTypes.string,
            ]).isRequired,
            name: PropTypes.string.isRequired,
            tags: PropTypes.arrayOf(PropTypes.string),
            value: PropTypes.number.isRequired,
            currency: PropTypes.string,
        }),
    ).isRequired,
    pageContext: PropTypes.shape({
        pageType: PropTypes.oneOf(['trips', 'itinerary', 'expenses', 'todo']),
        isAddItemFormVisible: PropTypes.bool,
        toggleAddItemForm: PropTypes.func,
    }).isRequired,
};

const mapStateToProps = ({ expenses }) => ({
    expenses: expenses.items,
});

export default connect(mapStateToProps)(withPageContext(Expenses));
