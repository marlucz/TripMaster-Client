import React from 'react';
import { storiesOf } from '@storybook/react';

import ExpenseItem from './ExpenseItem';

const tags = ['food', 'souvenirs', 'tickets'];

storiesOf('Expense', module).add('Normal', () => (
    <ExpenseItem
        date="2020.04.28"
        hour="10:28"
        name="Expensive wine"
        tags={tags}
        value={10}
    >
        TripMaster
    </ExpenseItem>
));
