import styled from 'styled-components';

import { gap, breakpoints, theme } from 'theme/GlobalStyle';

export const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

export const StyledTripsList = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(26rem, 1fr));
    grid-template-rows: min-content;
    grid-gap: ${gap.small};
    list-style: none;
    overflow-y: scroll;

    @media ${breakpoints.md} {
        grid-gap: ${gap.medium};
    }

    @media ${breakpoints.ld} {
        grid-gap: ${gap.big};
        margin-bottom: ${gap.big};
    }

    @media screen and (min-width: 1024px) and (orientation: portrait),
        (min-width: 1200px) {
        grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
    }
`;

export const StyledListItem = styled.li`
    margin: 0;
    padding: 0;
`;

export const StyledInlineButton = styled.button`
    display: inline;
    font-size: 2rem;
    margin-left: 1rem;
    color: ${theme.secondary};
    border: none;
    background: none;
    cursor: pointer;
`;
