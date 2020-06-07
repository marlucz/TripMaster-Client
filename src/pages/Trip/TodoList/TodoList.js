import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';

import withPageContext from 'hoc/withPageContext';

import {
    StyledTagsList,
    StyledButton,
    StyledInlinEButton,
} from 'pages/Trip/TodoList/TodoList.styles';
import AuthUserTemplate from 'templates/AuthUserTemplate';
import TodoListTagged from 'components/TodoListTagged/TodoListTagged';
import PageHeader from 'components/PageHeader/PageHeader';

const TodoList = ({
    todos,
    pageContext: { pageType, toggleAddItemForm },
    activeTrip,
}) => {
    useEffect(() => {
        axios
            .get(`http://localhost:4000/api/trips/${activeTrip}/todo`)
            .then(({ data }) => {
                console.log(data);
            })
            .catch(err => console.log(err));
    });
    return (
        <AuthUserTemplate withTrip>
            <PageHeader header={activeTrip.slug} subHeader={pageType} />

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

const mapStateToProps = ({ todos }, ownProps) => {
    return {
        activeTrip: ownProps.match.params.id,
        todos: todos.items,
    };
};

export default connect(mapStateToProps)(withPageContext(TodoList));
