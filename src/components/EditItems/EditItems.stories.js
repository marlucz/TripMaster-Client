import React from 'react';
import { storiesOf } from '@storybook/react';

import EditItems from './EditItems';

storiesOf('EditItem', module).add('Normal', () => (
    <EditItems>Hello Marcin</EditItems>
));
