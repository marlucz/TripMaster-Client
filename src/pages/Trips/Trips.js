import React from 'react';

import AuthUserTemplate from 'templates/AuthUserTemplate';
import MainSectionTemplate from 'templates/MainSectionTemplate';
import TripCard from 'components/TripCard/TripCard';

const Home = () => (
  <AuthUserTemplate>
    <MainSectionTemplate>
      <TripCard
        name="Budapest"
        startDate="20.04.2020"
        endDate="25.04.2020"
        duration={6}
        startsIn={9}
      />
      <TripCard
        name="Warsaw"
        startDate="20.04.2020"
        endDate="25.04.2020"
        duration={6}
        startsIn={9}
      />
      <TripCard
        name="Berlin"
        startDate="20.04.2020"
        endDate="25.04.2020"
        duration={6}
        startsIn={9}
      />
      <TripCard
        name="New York"
        startDate="20.04.2020"
        endDate="25.04.2020"
        duration={6}
        startsIn={9}
      />
    </MainSectionTemplate>
  </AuthUserTemplate>
);

export default Home;
