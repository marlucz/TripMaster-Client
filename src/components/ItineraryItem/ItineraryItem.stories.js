import React from 'react';
import { storiesOf } from '@storybook/react';

import ItineraryItem from './ItineraryItem';

storiesOf('ItineraryItem', module)
    .add('ItineraryDone', () => (
        <ItineraryItem
            date="2020.04.28"
            hour="10:28"
            name="My Trip"
            location="Warsaw"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            status="done"
        />
    ))
    .add('ItineraryNow', () => (
        <ItineraryItem
            date="2020.04.28"
            hour="10:28"
            name="My Trip"
            location="Warsaw"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            status="now"
        />
    ))
    .add('ItineraryNext', () => (
        <ItineraryItem
            date="2020.04.28"
            hour="10:28"
            name="My Trip"
            location="Warsaw"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            status="next"
        />
    ));
