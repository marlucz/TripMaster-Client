import React from 'react';
import styled from 'styled-components';

import AuthUserTemplate from 'templates/AuthUserTemplate';
import TodoListTagged from 'components/TodoListTagged/TodoListTagged';
import PageHeader from 'components/PageHeader/PageHeader';
import Button from 'components/Button/Button';

import { todoList } from './TodoListHelper';

const StyledTagsList = styled.ul`
    height: 90%;
    list-style: none;
    overflow-y: scroll;
`;

const StyledButton = styled(Button)`
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    z-index: 10;
    flex-shrink: 0;

    &:hover {
        transform: none;
        cursor: pointer;
    }
`;

const TodoList = () => {
    return (
        <AuthUserTemplate withTrip>
            <PageHeader header="My Trip" subHeader="Todo List" />
            <StyledTagsList>
                {todoList.map(({ tag, list }) => (
                    <TodoListTagged todoList={list} tag={tag} key={tag} />
                ))}
                <StyledButton secondary>Add Todo Item</StyledButton>
            </StyledTagsList>
        </AuthUserTemplate>
    );
};

export default TodoList;
