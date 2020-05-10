import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import withPageContext from 'hoc/withPageContext';

import AuthUserTemplate from 'templates/AuthUserTemplate';
import TodoListTagged from 'components/TodoListTagged/TodoListTagged';
import PageHeader from 'components/PageHeader/PageHeader';
import Button from 'components/Button/Button';

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

const TodoList = ({ todos, pageContext: { pageType, toggleAddItemForm } }) => {
    return (
        <AuthUserTemplate withTrip>
            <PageHeader header="My Trip" subHeader={pageType} />
            <StyledTagsList>
                {todos.map(({ tag, list }) => (
                    <TodoListTagged list={list} tag={tag} key={tag} />
                ))}
                <StyledButton secondary onClick={toggleAddItemForm}>
                    Add Todo Item
                </StyledButton>
            </StyledTagsList>
        </AuthUserTemplate>
    );
};

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            tag: PropTypes.string.isRequired,
            list: PropTypes.arrayOf(PropTypes.object).isRequired,
        }),
    ).isRequired,
    pageContext: PropTypes.shape({
        pageType: PropTypes.oneOf(['trips', 'itinerary', 'expenses', 'todo']),
        isAddItemFormVisible: PropTypes.bool,
        toggleAddItemForm: PropTypes.func,
    }).isRequired,
};

const mapStateToProps = ({ todos }) => todos;

export default connect(mapStateToProps)(withPageContext(TodoList));
