import React from 'react';
import { connect } from 'react-redux';

import { removeExpenseItem as removeExpenseItemAction } from 'store/expenses/expenses.actions';

import { currencies } from 'components/ExpenseItem/currencies';
import {
    StyledWrapper,
    StyledTimeContainer,
    StyledDetails,
    StyledTags,
    StyledHeader,
    StyledValue,
} from 'components/ExpenseItem/ExpenseItem.styles';

import Paragraph from 'components/Paragraph/Paragraph';
import EditItems from 'components/EditItems/EditItems';

import { ExpenseItemPropTypes } from 'utils/propTypes';

const ExpenseItem = ({
    id,
    date,
    hour,
    name,
    tags,
    value,
    currency,
    removeExpenseItem,
    slug,
}) => (
    <StyledWrapper>
        <StyledTimeContainer>
            <Paragraph>{date}</Paragraph>
            <Paragraph>{hour}</Paragraph>
        </StyledTimeContainer>
        <StyledDetails>
            <StyledTags>
                {tags.map(tag => (
                    <li key={tag}>{tag}</li>
                ))}
            </StyledTags>
            <StyledHeader>{name}</StyledHeader>
            <StyledValue>
                {value}
                <span>{currencies[currency].symbol_native}</span>
            </StyledValue>
        </StyledDetails>
        <EditItems handleClickRemove={() => removeExpenseItem(slug, id)} />
    </StyledWrapper>
);

ExpenseItem.propTypes = ExpenseItemPropTypes.isRequired;

const mapDispatchToProps = dispatch => ({
    removeExpenseItem: (slug, id) =>
        dispatch(removeExpenseItemAction(slug, id)),
});

export default connect(null, mapDispatchToProps)(ExpenseItem);
