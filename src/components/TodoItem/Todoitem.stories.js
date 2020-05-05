import React from 'react';
import { storiesOf } from '@storybook/react';

import TodoItem from './TodoItem';

storiesOf('TodoItem', module)
    .add('Not done', () => <TodoItem name="Buy tickets" />)
    .add('Done', () => <TodoItem done name="Buy tickets" />);
