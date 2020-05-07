import React from 'react';
import { storiesOf } from '@storybook/react';

import card1 from 'assets/photos/card1.jpg';
import TripCard from './TripCard';

storiesOf('TripCard', module).add('Normal', () => (
    <TripCard
        id={1}
        image={card1}
        name="Trip 1"
        startDate="20.04.2020"
        endDate="25.04.2020"
        duration={6}
        startsIn={9}
    />
));
