import React from 'react';
import { NavLink } from 'react-router-dom';

import {
    StyledWrapper,
    Status,
    Message,
    StyledButton,
} from 'pages/NotFound/NotFound.styles';

const NotFound = () => (
    <StyledWrapper>
        <Status>404</Status>
        <Message>The page that you are looking for cannot be found</Message>
        <StyledButton as={NavLink} to="/">
            Back to Homepage
        </StyledButton>
    </StyledWrapper>
);

export default NotFound;
