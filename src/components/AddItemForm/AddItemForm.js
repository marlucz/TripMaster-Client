import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import withPageContext from 'hoc/withPageContext';

import Button from 'components/Button/Button';
import PageHeader from 'components/PageHeader/PageHeader';

import { color, gradient, shadow } from 'theme/GlobalStyle';

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding-top: 2rem;
`;

const StyledForm = styled.form`
    align-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    max-width: 50rem;
`;

const StyledInput = styled.input`
    display: block;
    font-family: inherit;
    font-size: 1.6rem;
    width: 100%;
    margin-top: 1rem;
    padding: 1.2rem 2rem;
    background-color: rgba(${color.grayLight}, 0.8);
    border: 1px solid ${gradient.dark};
    box-shadow: ${shadow.light};
    border: none;
    color: ${color.grayDark};

    &::placeholder {
        text-transform: capitalize;
    }
`;

const StyledTextArea = styled(StyledInput)`
    height: 20vh;
`;

const StyledButton = styled(Button)`
    margin: 1rem auto;
    margin-top: auto;
    z-index: 10;
    flex-shrink: 0;

    &:hover {
        transform: none;
        cursor: pointer;
    }
`;

const AddItemForm = ({ pageContext: { pageType, toggleAddItemForm } }) => (
    <StyledWrapper>
        <PageHeader header={pageType} subHeader="Add new" />
        <StyledForm onSubmit={toggleAddItemForm}>
            <StyledInput
                type="text"
                name="name"
                placeholder={`${pageType} title`}
            />
            <StyledInput
                type="date"
                name="startDate"
                placeholder="Start date"
            />
            <StyledInput type="date" name="endDate" placeholder="End date" />
            <StyledInput type="number" name="duration" placeholder="Duration" />
            <StyledInput
                type="number"
                name="startsIn"
                placeholder="Starts in"
            />
            <StyledTextArea
                name="content"
                as="textarea"
                placeholder={`${pageType} description`}
            />
            <StyledButton type="submit">Add item</StyledButton>
        </StyledForm>
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
