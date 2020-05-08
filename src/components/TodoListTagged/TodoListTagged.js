import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { color } from 'theme/GlobalStyle';

import Paragraph from 'components/Paragraph/Paragraph';
import Chevron from 'components/Chevron/Chevron';
import TodoItem from 'components/TodoItem/TodoItem';

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
`;

const StyledTagWrapper = styled.li`
    position: relative;
    display: grid;
    grid-template-columns: 10% 80%;
    align-items: center;
    padding: 0.5rem;
    width: 100%;
    color: ${color.white};
    background-color: ${color.grayDark};
`;

const StyledItemsDone = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${color.whihte};
`;

const StyledTagHeader = styled.h2`
    text-align: center;
    font-size: 1.6rem;
    text-transform: uppercase;
`;

const StyledTodoList = styled.ul`
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

const StyledChevron = styled(Chevron)`
    margin-top: 0.5rem;
    polygon {
        fill: ${color.white};
    }
    ${({ rotate }) =>
        rotate ? `transform: rotate(180deg); margin-top: .7rem` : ``}
`;

const TodoListTagged = ({ tag, list }) => {
    const [isCollapsed, setCollapsed] = useState(true);
    const [isChevronRotated, rotateChevron] = useState(false);

    const handleChevronClick = () => {
        setCollapsed(!isCollapsed);
        rotateChevron(!isChevronRotated);
    };

    const getAllItems = itemsArray => itemsArray.length;
    const getItemsDone = itemsArray => {
        const filteredArray = itemsArray.filter(item => item.done);
        return filteredArray.length;
    };

    return (
        <StyledWrapper>
            <StyledTagWrapper>
                <StyledItemsDone>
                    <Paragraph>{getItemsDone(list)}</Paragraph>/
                    <Paragraph>{getAllItems(list)}</Paragraph>
                </StyledItemsDone>
                <StyledTagHeader>{tag}</StyledTagHeader>
                <StyledChevron
                    onClick={handleChevronClick}
                    rotate={isChevronRotated ? 1 : undefined}
                />
            </StyledTagWrapper>
            <StyledTodoList collapsed={isCollapsed}>
                {list.map(({ name, done }) => (
                    <TodoItem key={name} name={name} done={done} />
                ))}
            </StyledTodoList>
        </StyledWrapper>
    );
};

TodoListTagged.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
    tag: PropTypes.string.isRequired,
};

export default TodoListTagged;
