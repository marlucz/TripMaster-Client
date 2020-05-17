import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
    StyledWrapper,
    StyledTagWrapper,
    StyledItemsDone,
    StyledTagHeader,
    StyledChevron,
    StyledTodoList,
} from 'components/TodoListTagged/TodoListTagged.styles';

import Paragraph from 'components/Paragraph/Paragraph';
import TodoItem from 'components/TodoItem/TodoItem';

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
