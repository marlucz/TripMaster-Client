import styled, { css } from 'styled-components';

import { color, gradient, shadow, theme } from 'theme/GlobalStyle';

export const StyledWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 1rem;
    padding: 1.2rem 2rem;
    background-color: ${color.white};
    border: 1px solid ${gradient.dark};
    box-shadow: ${shadow.light};
    border: none;
    color: ${color.grayDark};
    font-family: inherit;
`;

export const StyledTagsWrapper = styled.ul`
    display: inline-flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    width: 100%;
`;

export const StyledButton = styled.button`
    align-items: center;
    appearance: none;
    background: ${theme.secondary};
    border: none;
    border-radius: 50%;
    color: white;
    cursor: pointer;
    display: inline-flex;
    font-size: 1.2rem;
    height: 1.5rem;
    justify-content: center;
    line-height: 0;
    margin-left: 0.8rem;
    padding: 0;
    transform: rotate(45deg);
    width: 1.5rem;
`;

export const StyledInput = styled.input`
    border: none;
    width: 100%;
    font-size: 1.6rem;

    &::placeholder {
        text-transform: capitalize;
    }
`;

export const StyledTagListItem = styled.li`
    align-items: center;
    background: ${theme.primary};
    border-radius: 0.2rem;
    color: white;
    display: flex;
    font-weight: 300;
    list-style: none;
    padding: 0 1rem;

    ${({ input }) =>
        input &&
        css`
            background: none;
            flex-grow: 1;
            padding: 0;
        `}
`;
