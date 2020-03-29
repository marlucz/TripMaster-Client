import React from 'react';
import { storiesOf } from '@storybook/react';
import PageHeader from './PageHeader';

storiesOf('PageHeader', module).add('Normal', () => (
  <PageHeader header="trip" subHeader="you upcoming" />
));
