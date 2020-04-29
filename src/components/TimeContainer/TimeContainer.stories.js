import React from 'react';
import { storiesOf } from '@storybook/react';

import TimeContainer from './TimeContainer';

storiesOf('TimeContainer', module).add('Normal', () => (
    <TimeContainer>
        <h1>Time Container</h1>
    </TimeContainer>
));
