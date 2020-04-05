import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

import NotFound from './NotFound';

storiesOf('NotFound', module)
  .addDecorator(StoryRouter())
  .add('Page not Found', () => <NotFound />);
