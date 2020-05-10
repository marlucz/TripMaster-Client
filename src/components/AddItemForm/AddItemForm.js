import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import withPageContext from 'hoc/withPageContext';

import Button from 'components/Button/Button';
import PageHeader from 'components/PageHeader/PageHeader';

const StyledWrapper = styled.div`
    z-index: 9999;
    display: flex;
    flex-direction: column;
`;

const AddItemForm = ({ pageContext: { pageType, toggleAddItemForm } }) => (
    <StyledWrapper>
        <PageHeader header={pageType} subHeader="add item" />
        <Button onClick={toggleAddItemForm}>Add item</Button>
    </StyledWrapper>
);

AddItemForm.propTypes = {
    pageContext: PropTypes.shape({
        pageType: PropTypes.oneOf(['trips', 'itinerary', 'expenses', 'todo']),
        isAddItemFormVisible: PropTypes.bool,
        toggleAddItemForm: PropTypes.func,
    }).isRequired,
};

export default withPageContext(AddItemForm);
