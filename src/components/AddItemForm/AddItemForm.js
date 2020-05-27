import React from 'react';
import PropTypes from 'prop-types';

import withPageContext from 'hoc/withPageContext';

import PageHeader from 'components/PageHeader/PageHeader';
import TripForm from 'components/AddItemForm/TripForm';
import ItineraryForm from 'components/AddItemForm/ItineraryForm';
import ExpenseForm from 'components/AddItemForm/ExpenseForm';
import TodoForm from 'components/AddItemForm/TodoForm';
import { StyledWrapper } from 'components/AddItemForm/AddItemForm.styles';

const AddItemForm = ({ pageContext: { pageType } }) => {
    return (
        <StyledWrapper>
            <PageHeader header={pageType} subHeader="Add new" />
            {pageType === 'trips' && <TripForm />}
            {pageType === 'itinerary' && <ItineraryForm />}
            {pageType === 'expenses' && <ExpenseForm />}
            {pageType === 'todo' && <TodoForm />}
        </StyledWrapper>
    );
};

AddItemForm.propTypes = {
    pageContext: PropTypes.shape({
        pageType: PropTypes.oneOf(['trips', 'itinerary', 'expenses', 'todo']),
    }).isRequired,
};

export default withPageContext(AddItemForm);
