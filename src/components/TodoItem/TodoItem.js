import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { theme, color, gradient, shadow, breakpoints } from 'theme/GlobalStyle';
import EditItems from 'components/EditItems/EditItems';
import { ReactComponent as DoneIcon } from 'assets/icons/done.svg';
import { ReactComponent as TodoIcon } from 'assets/icons/todo.svg';

const StyledWrapper = styled.div`
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    align-items: center;
    padding: 0.5rem 0;
    width: 100%;
    background-color: ${color.white};
    border: 1px solid ${gradient.dark};
    box-shadow: ${shadow.light};
`;

const StyledHeader = styled.h3`
    font-size: 1.6rem;
    justify-self: center;
    color: ${theme.secondary};
    ${({ done }) =>
        done &&
        css`
            text-decoration: line-through;
            color: ${theme.primary};
        `}

    @media ${breakpoints.md} {
        margin-bottom: 0.3rem;
    }

    @media ${breakpoints.ld} {
        margin: 0;
        margin-right: 3rem;
    }
`;

const StyledIcon = styled.button`
    background: none;
    border: none;
    margin-right: 2rem;
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

const TodoItem = ({ done, name }) => (
    <StyledWrapper>
        <StyledIcon done={done}>
            {done ? <DoneIcon /> : <TodoIcon />}
        </StyledIcon>
        <StyledHeader done={done}>{name}</StyledHeader>
        <EditItems />
    </StyledWrapper>
);

TodoItem.propTypes = {
    done: PropTypes.bool,
    name: PropTypes.string.isRequired,
};

TodoItem.defaultProps = {
    done: false,
};

export default TodoItem;
