import React from 'react';

import AuthUserTemplate from 'templates/AuthUserTemplate';
import TripCard from 'components/TripCard/TripCard';

const Home = () => (
  <AuthUserTemplate>
    <TripCard
      name="Budapest"
      startDate="20.04.2020"
      endDate="25.04.2020"
      duration={6}
      startsIn={9}
    />
  </AuthUserTemplate>
);

export default Home;
