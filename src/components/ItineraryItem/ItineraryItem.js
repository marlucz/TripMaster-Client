import React from 'react';
import styled from 'styled-components';

import { breakpoints, theme } from 'theme/GlobalStyle';

const StyledWrapper = styled.li`
    display: grid;
    grid-template-columns: 25% min-content 1fr;
    padding-bottom: 1rem;

    @media ${breakpoints.md} {
        padding-bottom: 1.5rem;
        grid-template-columns: 18% min-content 1fr;
    }

    @media screen and (min-width: 1024px) and (orientation: landscape),
        (min-width: 1200px) {
        padding-bottom: 1rem;
        grid-template-columns: 22% min-content 1fr;
    }

    &:nth-last-of-type(1) {
        .itinerary__icon:before {
            background-color: red;
        }
    }

    &:last-of-type {
        color: ${theme.secondary};
        padding-bottom: 0;

        svg {
            fill: ${theme.secondary};
        }
        .itinerary__icon:before {
            display: none;
        }
    }
`;

const ItineraryItem = () => <StyledWrapper />;

export default ItineraryItem;
