import styled, { css } from 'styled-components';

import { color, theme, breakpoints } from 'theme/GlobalStyle';

export const StyledWrapper = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 4rem;
    padding: 5px;

    &::after {
        content: '';
        position: absolute;
        left: 0;
        top: 100%;
        height: 1px;
        width: 100%;
        background-color: ${color.black};

        @media ${breakpoints.md} {
            left: 2.5%;
            width: 95%;
        }
    }

    ${({ bottom }) =>
        bottom &&
        css`
            top: 100%;
            transform: translateY(-100%);

            &::after {
                top: 0;
            }
        `}
`;

export const StyledList = styled.ul`
    display: flex;
    justify-content: space-around;
    width: 95%;
    max-width: 90rem;
    margin: auto;
`;

export const StyledListItem = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-basis: 25%;
    cursor: pointer;
`;
export const StyledIcon = styled.button`
    display: block;
    width: 3rem;
    height: 3rem;
    background-image: url(${({ icon }) => icon});
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 80%;
    border: none;

    &.active + span {
        color: ${theme.primary};
    }
`;

export const StyledText = styled.span`
    display: none;

    @media ${breakpoints.md} {
        display: block;
    }
`;
