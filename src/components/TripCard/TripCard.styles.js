import styled from 'styled-components';

import { breakpoints, shadow, theme, color, gradient } from 'theme/GlobalStyle';

export const StyledWrapper = styled.div`
    width: 100%;
    max-width: 40rem;
    position: relative;
    display: flex;
    align-items: center;
    background-color: ${color.white};
    border: 1px solid ${gradient.dark};
    border-radius: 1rem;
    box-shadow: ${shadow.light};
    overflow: hidden;

    @media ${breakpoints.md} {
        flex-direction: column;
    }
`;

export const StyledImageWrapper = styled.div`
    width: 25%;
    height: 12vh;

    @media ${breakpoints.md} {
        width: 100%;
        height: 15vh;
    }

    @media ${breakpoints.ld} {
        height: 18vh;
    }

    @media ${breakpoints.xld} {
        height: 25vh;
    }
`;

export const StyledImage = styled.img`
    object-fit: cover;
    height: 100%;
    width: 100%;
`;

export const StyledInfoSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    flex-grow: 1;
    padding-left: 1rem;
    height: 12vh;

    @media ${breakpoints.md} {
        width: 100%;
        height: auto;
        padding: 1rem 1.5rem;
    }
`;

export const StyledHeaderWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const StyledHeader = styled.h3`
    font-size: 1.6rem;
    padding: 0.5rem 0.5rem 0 0;

    cursor: pointer;

    @media ${breakpoints.md} {
        font-size: 2.2rem;
        padding-bottom: 1rem;
        padding-right: 0;
    }
`;

export const StyledData = styled.div`
    display: flex;
    align-items: center;

    @media ${breakpoints.md} {
        padding-bottom: 1rem;
    }
`;

export const StyledIcon = styled.div`
    svg {
        width: 1.5rem;
        height: 1.5rem;
        margin-right: 8px;
        path {
            fill: ${theme.primary};
        }

        @media ${breakpoints.md} {
            width: 2rem;
            height: 2rem;
            margin-right: 2rem;
        }
    }
`;
