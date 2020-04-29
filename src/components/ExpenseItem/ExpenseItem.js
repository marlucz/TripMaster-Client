import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { color, gradient, shadow, breakpoints } from 'theme/GlobalStyle';
import { currencies } from 'components/ExpenseItem/currencies';
import TimeContainer from 'components/TimeContainer/TimeContainer';
import Paragraph from 'components/Paragraph/Paragraph';
import EditItems from 'components/EditItems/EditItems';

const StyledWrapper = styled.div`
    display: grid;
    grid-template-columns: 25% 1fr min-content;
    padding: 0.5rem 0;
    width: 100%;
    background-color: ${color.white};
    border: 1px solid ${gradient.dark};
    box-shadow: ${shadow.light};
`;

const StyledDetails = styled.div`
    padding-left: 1rem;
    color: ${color.secondary};

    @media ${breakpoints.md} {
        padding-left: 2rem;

        p,
        span {
            font-size: 2rem;
        }
    }

    @media ${breakpoints.ld} {
        display: flex;
        align-items: center;
    }
`;

const StyledTimeContainer = styled(TimeContainer)`
    justify-content: center;
`;

const StyledHeader = styled.h3`
    font-size: 1.6rem;

    @media ${breakpoints.md} {
        margin-bottom: 0.3rem;
    }
`;

const StyledTags = styled.ul`
    display: flex;
    list-style: none;

    @media ${breakpoints.md} {
        font-size: 1.8rem;
    }

    li {
        display: block;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${color.grayLight};
        padding: 0 1rem;
        margin-right: 0.5rem;
        background: ${color.grayDark};
        border-radius: 1rem;
    }
`;

const StyledValue = styled.p`
    span {
        display: inline-block;
    }
`;

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

ExpenseItem.propTypes = {
    date: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string])
        .isRequired,
    hour: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string])
        .isRequired,
    name: PropTypes.string.isRequired,
    tags: PropTypes.objectOf(PropTypes.string),
    value: PropTypes.number.isRequired,
    currency: PropTypes.string,
};

ExpenseItem.defaultProps = {
    tags: null,
    currency: 'USD',
};

export default ExpenseItem;
