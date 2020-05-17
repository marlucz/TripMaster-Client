import React from 'react';
import PropTypes from 'prop-types';

import { StyledTime } from 'components/TimeContainer/TimeContainer.styles';

const TimeContainer = ({ children }) => <StyledTime>{children}</StyledTime>;

TimeContainer.propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.node])
        .isRequired,
};

export default TimeContainer;
