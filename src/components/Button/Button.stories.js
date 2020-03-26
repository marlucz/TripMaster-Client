import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';

import Button from './Button';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('Primary', () => {
    const label = 'Colors';
    const options = {
      Primary: '#05A859',
      Secondary: '#F15E4C',
    };
    const defaultValue = '#F15E4C';
    const groupId = 'GROUP-ID1';
    const value = select(label, options, defaultValue, groupId);

    return <Button bgColor={value}>TripMaster</Button>;
  })
  .add('Secondary', () => <Button secondary>TripMaster</Button>);
