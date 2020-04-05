import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import NavBar from './NavBar';

storiesOf('NavBar', module)
  .addDecorator(StoryRouter())
  .add('Top', () => <NavBar />)
  .add('Bottom', () => <NavBar isInTrip />)
  .add('Both Open', () => (
    <>
      <NavBar />
      <NavBar isInTrip />
    </>
  ));
