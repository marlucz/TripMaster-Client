import styled, { css } from 'styled-components';

import Chevron from 'components/Chevron/Chevron';
import { color } from 'theme/GlobalStyle';

export const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
`;

export const StyledTagWrapper = styled.li`
    position: relative;
    display: grid;
    grid-template-columns: 10% 80%;
    align-items: center;
    padding: 0.5rem;
    width: 100%;
    color: ${color.white};
    background-color: ${color.grayDark};
`;

export const StyledItemsDone = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${color.whihte};
`;

export const StyledTagHeader = styled.h2`
    text-align: center;
    font-size: 1.6rem;
    text-transform: uppercase;
`;

export const StyledTodoList = styled.ul`
    max-height: 0;
    opacity: 0;
    transition: all 0.35s 0.2s linear;
    overflow: hidden;

    ${({ collapsed }) =>
        !collapsed &&
        css`
            max-height: 100%;
            opacity: 1;
            transition: all 0.35s 0.2s linear;
        `}
`;

export const StyledChevron = styled(Chevron)`
    margin-top: 0.5rem;
    polygon {
        fill: ${color.white};
    }
    ${({ rotate }) =>
        rotate ? `transform: rotate(180deg); margin-top: .7rem` : ``}
`;
