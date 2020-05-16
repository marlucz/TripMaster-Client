import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { theme, color, gradient, shadow, breakpoints } from 'theme/GlobalStyle';
import EditItems from 'components/EditItems/EditItems';
import { ReactComponent as DoneIcon } from 'assets/icons/done.svg';
import { ReactComponent as TodoIcon } from 'assets/icons/todo.svg';

const StyledWrapper = styled.div`
    display: grid;
    grid-template-columns: 10% 1fr 10%;
    align-items: center;
    padding: 0.5rem;
    width: 100%;
    background-color: ${color.white};
    border: 1px solid ${gradient.dark};
    box-shadow: ${shadow.light};
`;

const StyledHeader = styled.h3`
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

const StyledIcon = styled.button`
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

const TodoItem = ({ id, name, done }) => {
    const [isDone, setDone] = useState(done);

    const handleIconClick = () => {
        setDone(!isDone);
    };

    return (
        <StyledWrapper>
            <StyledIcon done={isDone} onClick={handleIconClick} id={id}>
                {isDone ? <DoneIcon /> : <TodoIcon />}
            </StyledIcon>
            <StyledHeader done={isDone}>{name}</StyledHeader>
            <EditItems />
        </StyledWrapper>
    );
};

TodoItem.propTypes = {
    id: PropTypes.number.isRequired,
    done: PropTypes.bool,
    name: PropTypes.string.isRequired,
};

TodoItem.defaultProps = {
    done: false,
};

export default TodoItem;
