import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { color, gradient, shadow } from 'theme/GlobalStyle';
import TimeContainer from 'components/TimeContainer/TimeContainer';
import Paragraph from 'components/Paragraph/Paragraph';

const StyledWrapper = styled.div`
    display: grid;
    grid-template-columns: 25% 1fr min-content;
    padding: 0.5rem 0;
    width: 100%;
    background-color: ${color.white};
    border: 1px solid ${gradient.dark};
    box-shadow: ${shadow.light};
`;

const ExpenseItem = ({ date, hour }) => (
    <StyledWrapper>
        <TimeContainer>
            <Paragraph>{date}</Paragraph>
            <Paragraph>{hour}</Paragraph>
        </TimeContainer>
    </StyledWrapper>
);

ExpenseItem.propTypes = {
    date: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string])
        .isRequired,
    hour: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string])
        .isRequired,
};

export default ExpenseItem;
