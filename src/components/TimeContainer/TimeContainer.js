import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledTime = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;

    @media screen and (min-width: 1024px) and (orientation: landscape),
        (min-width: 1200px) {
        align-items: flex-start;
    }
`;

const TimeContainer = ({ children }) => <StyledTime>{children}</StyledTime>;

TimeContainer.propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.node])
        .isRequired,
};

export default TimeContainer;
