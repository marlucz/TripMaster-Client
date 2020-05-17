import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import withPageContext from 'hoc/withPageContext';

import AuthUserTemplate from 'templates/AuthUserTemplate';
import ExpenseItem from 'components/ExpenseItem/ExpenseItem';
import PageHeader from 'components/PageHeader/PageHeader';
import Button from 'components/Button/Button';

import { theme } from 'theme/GlobalStyle';

const StyledItineraryList = styled.ul`
    height: 90%;
    list-style: none;
    overflow-y: scroll;
`;

const StyledButton = styled(Button)`
    width: 100%;
    max-width: 100%;
    margin: 1rem auto;
    z-index: 10;
    flex-shrink: 0;

    &:hover {
        transform: none;
        cursor: pointer;
    }
`;

const StyledInlinEButton = styled.button`
    display: inline;
    font-size: 2rem;
    margin-left: 1rem;
    color: ${theme.secondary};
    border: none;
    background: none;
    cursor: pointer;
`;

const Expenses = ({
    expenses,
    pageContext: { pageType, toggleAddItemForm },
}) => (
    <AuthUserTemplate withTrip>
        <PageHeader header="My trip" subHeader={pageType} />
        {expenses.length ? (
            <StyledItineraryList>
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
            </StyledItineraryList>
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

const mapStateToProps = ({ expenses }) => expenses;

export default connect(mapStateToProps)(withPageContext(Expenses));
