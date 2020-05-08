import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AuthUserTemplate from 'templates/AuthUserTemplate';
import ExpenseItem from 'components/ExpenseItem/ExpenseItem';
import PageHeader from 'components/PageHeader/PageHeader';
import Button from 'components/Button/Button';

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

const Expenses = ({ expenses }) => (
    <AuthUserTemplate withTrip>
        <PageHeader header="My trip" subHeader="Expenses" />
        <StyledItineraryList>
            {expenses.map(({ date, hour, name, tags, value, currency }) => (
                <ExpenseItem
                    key={name}
                    date={date}
                    hour={hour}
                    name={name}
                    tags={tags}
                    value={value}
                    currency={currency}
                />
            ))}
            <StyledButton secondary>Add Expense</StyledButton>
        </StyledItineraryList>
    </AuthUserTemplate>
);

Expenses.propTypes = {
    expenses: PropTypes.arrayOf(
        PropTypes.shape({
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
};

const mapStateToProps = ({ expenses }) => expenses;

export default connect(mapStateToProps)(Expenses);
