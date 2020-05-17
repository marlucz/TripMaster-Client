import styled, { css } from 'styled-components';

import { theme, color, gradient, shadow, breakpoints } from 'theme/GlobalStyle';

export const StyledWrapper = styled.div`
    display: grid;
    grid-template-columns: 10% 1fr 10%;
    align-items: center;
    padding: 0.5rem;
    width: 100%;
    background-color: ${color.white};
    border: 1px solid ${gradient.dark};
    box-shadow: ${shadow.light};
`;

export const StyledHeader = styled.h3`
    text-align: center;
    display: block;
    position: relative;
    width: 100%;
    font-size: 1.6rem;
    justify-self: center;
    color: ${theme.secondary};
    ${({ done }) =>
        done &&
        css`
            &:before {
                content: '';
                position: absolute;
                top: 50%;
                left: 0;
                width: 100%;
                height: 1px;
                background-color: ${theme.primary};
            }
            color: ${theme.primary};
        `}

    @media ${breakpoints.md} {
        margin-bottom: 0.3rem;
    }

    @media ${breakpoints.ld} {
        margin: 0;
    }
`;

export const StyledIcon = styled.button`
    background: none;
    border: none;
    cursor: pointer;

    svg {
        width: 2rem;
        height: 2rem;
        margin: 2px;

        path {
            fill: ${({ done }) => (done ? theme.primary : theme.secondary)};
        }

        @media ${breakpoints.ld} {
            width: 2.5rem;
            height: 2.5rem;
            margin: 0.5rem;
        }
    }
`;
