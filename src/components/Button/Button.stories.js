import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Button', module)
  .add('Primary', () => <Button>TripMaster</Button>)
  .add('Secondary', () => <Button secondary>TripMaster</Button>);
