import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import withPageContext from 'hoc/withPageContext';

import {
    StyledTagsList,
    StyledButton,
    StyledInlinEButton,
} from 'pages/Trip/TodoList/TodoList.styles';
import AuthUserTemplate from 'templates/AuthUserTemplate';
import TodoListTagged from 'components/TodoListTagged/TodoListTagged';
import PageHeader from 'components/PageHeader/PageHeader';

const TodoList = ({ todos, pageContext: { pageType, toggleAddItemForm } }) => {
    return (
        <AuthUserTemplate withTrip>
            <PageHeader header="My Trip" subHeader={pageType} />

            {todos.length ? (
                <StyledTagsList>
                    {todos.map(({ tag, list }) => (
                        <TodoListTagged list={list} tag={tag} key={tag} />
                    ))}
                    <StyledButton secondary onClick={toggleAddItemForm}>
                        Add Todo Item
                    </StyledButton>
                </StyledTagsList>
            ) : (
                <h2>
                    You don&apos;t have any todos, do you want to
                    <StyledInlinEButton onClick={toggleAddItemForm}>
                        {' '}
                        ADD TODO ITEM?
                    </StyledInlinEButton>
                </h2>
            )}
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
