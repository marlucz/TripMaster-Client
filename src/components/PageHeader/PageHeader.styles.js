import styled from 'styled-components';

import { theme, breakpoints, fontSize } from 'theme/GlobalStyle';

export const HeaderWrapper = styled.header`
    margin-bottom: 1rem;
`;

export const Heading = styled.h2`
    text-transform: uppercase;
`;

export const SubHeading = styled.span`
    font-size: ${fontSize.textSecondaryScreen};
    display: block;
    text-transform: uppercase;
    color: ${theme.secondary};
    @media ${breakpoints.sm} {
        font-size: ${fontSize.textSecondaryTablet};
    }
    @media ${breakpoints.sm} {
        font-size: ${fontSize.textSecondaryDesktop};
    }
`;
