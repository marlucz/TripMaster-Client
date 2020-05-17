import styled from 'styled-components';

import mapPlaceholder from 'assets/photos/map_placeholder.JPG';
import { theme, breakpoints, shadow, gradient } from 'theme/GlobalStyle';
import Button from 'components/Button/Button';

export const StyledWrapper = styled.div`
    height: 100%;
    display: grid;
    grid-template-rows: 40% 50%;
    grid-gap: 0.5rem;

    @media screen and (min-width: 1024px) and (orientation: landscape),
        (min-width: 1200px) {
        grid-template-rows: 1fr;
        grid-template-columns: 40% 60%;
        grid-template-areas: 'timeline map';
    }

    @media (min-width: 1600px) {
        grid-template-columns: 35% 65%;
    }
`;

export const StyledItineraryList = styled.ul`
    position: relative;
    list-style: none;
    width: 100%;
    overflow-y: scroll;

    @media screen and (min-width: 1024px) and (orientation: landscape),
        (min-width: 1200px) {
        width: 100%;
        height: 100%;
        grid-area: timeline;
        height: 100%;
        max-height: 75vh;
    }
`;

export const StyledMapContainer = styled.div`
    border: 1px solid ${gradient.dark};
    box-shadow: ${shadow.light};

    @media ${breakpoints.ld} {
        margin-bottom: 2rem;
    }

    @media screen and (min-width: 1024px) and (orientation: landscape),
        (min-width: 1200px) {
        grid-area: map;
        max-height: 75vh;
    }
`;

export const StyledMap = styled.div`
    background: url(${mapPlaceholder}) no-repeat center;
    background-size: cover;
    width: 100%;
    height: 100%;
`;

export const StyledButton = styled(Button)`
    width: 100%;
    max-width: 100%;
    margin: 1rem auto;
    z-index: 10;
    flex-shrink: 0;

    &:hover {
        transform: none;
        cursor: pointer;
    }
`;

export const StyledInlinEButton = styled.button`
    display: inline;
    font-size: 2rem;
    margin-left: 1rem;
    color: ${theme.secondary};
    border: none;
    background: none;
    cursor: pointer;
`;
