import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';

import PinIcon from './PinIcon';

storiesOf('PinIcon', module)
    .addDecorator(withKnobs)
    .add('Selectable', () => {
        const label = 'Status';
        const options = {
            Done: 'done',
            Now: 'now',
            Next: 'next',
        };
        const defaultValue = 'done';
        const groupId = 'GROUP-ID1';
        const value = select(label, options, defaultValue, groupId);

        return <PinIcon status={value} />;
    })
    .add('Done', () => <PinIcon status="done" />)
    .add('Now', () => <PinIcon status="now" />)
    .add('Next', () => <PinIcon status="next" />);
