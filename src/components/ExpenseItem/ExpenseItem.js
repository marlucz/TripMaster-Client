import React from 'react';

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

const ExpenseItem = ({ date, hour, name, tags, value, currency }) => (
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
        <EditItems />
    </StyledWrapper>
);

ExpenseItem.propTypes = ExpenseItemPropTypes.isRequired;

export default ExpenseItem;
