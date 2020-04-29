import React from 'react';
import { storiesOf } from '@storybook/react';

import ExpenseItem from './ExpenseItem';

storiesOf('Expense', module).add('Normal', () => (
    <ExpenseItem date="2020.04.28" hour="10:28">
        TripMaster
    </ExpenseItem>
));
