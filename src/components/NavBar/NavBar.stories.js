import React from 'react';
import { storiesOf } from '@storybook/react';
import NavBar from './NavBar';

storiesOf('NavBar', module)
  .add('Top', () => <NavBar />)
  .add('Bottom', () => <NavBar isInTrip />)
  .add('Both Oopen', () => (
    <>
      <NavBar />
      <NavBar isInTrip />
    </>
  ));
