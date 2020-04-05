import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';

import Button from './Button';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('Selectable', () => {
    const label = 'Colors';
    const options = {
      Primary: false,
      Secondary: true,
    };
    const defaultValue = false;
    const groupId = 'GROUP-ID1';
    const value = select(label, options, defaultValue, groupId);

    return <Button secondary={value}>TripMaster</Button>;
  })
  .add('Primary', () => <Button>TripMaster</Button>)
  .add('Secondary', () => <Button secondary>TripMaster</Button>);
