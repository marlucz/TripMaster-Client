import React from 'react';
import styled from 'styled-components';

import AuthUserTemplate from 'templates/AuthUserTemplate';
import TripCard from 'components/TripCard/TripCard';
import PageHeader from 'components/PageHeader/PageHeader';

import { gap, breakpoints } from 'theme/GlobalStyle';
import { trips } from './TripsHelper';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const StyledTripsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(26rem, 1fr));
  grid-template-rows: min-content;
  grid-gap: ${gap.small};
  margin-bottom: ${gap.medium};
  list-style: none;
  overflow-y: scroll;

  @media ${breakpoints.md} {
    grid-gap: ${gap.medium};
  }

  @media ${breakpoints.ld} {
    grid-gap: ${gap.big};
    margin-bottom: ${gap.big};
  }

  @media screen and (min-width: 1024px) and (orientation: portrait),
    (min-width: 1200px) {
    grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  }
`;

const StyledListItem = styled.li`
  margin: 0;
  padding: 0;
`;

const Home = () => (
  <AuthUserTemplate withTrip>
    <StyledWrapper>
      <PageHeader header="Trips" subHeader="your" />
      <StyledTripsList>
        {trips.map(
          ({ image, name, startDate, endDate, duration, startsIn }) => (
            <StyledListItem key={name}>
              <TripCard
                image={image}
                name={name}
                startDate={startDate}
                endDate={endDate}
                duration={duration}
                startsIn={startsIn}
              />
            </StyledListItem>
          ),
        )}
      </StyledTripsList>
    </StyledWrapper>
  </AuthUserTemplate>
);

export default Home;
