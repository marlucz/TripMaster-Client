import React from 'react';
import { storiesOf } from '@storybook/react';

import TodoListTagged from './TodoListTagged';

const tag = 'food';
const list = [
    { name: 'sandwiches', done: false },
    { name: 'water', done: false },
];

storiesOf('TodoListTagged', module).add('Normal', () => (
    <TodoListTagged list={list} tag={tag} />
));
