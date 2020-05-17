import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
    StyledWrapper,
    StyledIcon,
    StyledHeader,
} from 'components/TodoItem/TodoItem.styles';

import EditItems from 'components/EditItems/EditItems';
import { ReactComponent as DoneIcon } from 'assets/icons/done.svg';
import { ReactComponent as TodoIcon } from 'assets/icons/todo.svg';

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
