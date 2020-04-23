import React from 'react';
import styled from 'styled-components';

import AuthUserTemplate from 'templates/AuthUserTemplate';
import ItineraryItem from 'components/ItineraryItem/ItineraryItem';
import PageHeader from 'components/PageHeader/PageHeader';

import mapPlaceholder from 'assets/photos/map_placeholder.JPG';
import add from 'assets/icons/add.svg';
import { breakpoints, shadow, gradient } from 'theme/GlobalStyle';
import { itineraries } from './ItineraryHelper';

const StyledWrapper = styled.div`
    height: 100%;
    display: grid;
    grid-template-rows: 40% 50%;
    grid-gap: 0.5rem;

    @media screen and (min-width: 1024px) and (orientation: landscape),
        (min-width: 1200px) {
        grid-template-rows: 1fr;
        grid-template-columns: 40% 60%;
        grid-template-areas: 'timeline map';
    }

    @media (min-width: 1600px) {
        grid-template-columns: 35% 65%;
    }
`;

const StyledItineraryList = styled.ul`
    list-style: none;
    width: 100%;
    overflow-y: scroll;

    @media screen and (min-width: 1024px) and (orientation: landscape),
        (min-width: 1200px) {
        width: 100%;
        height: 100%;
        grid-area: timeline;
        height: 100%;
        max-height: 70vh;
    }
`;

const StyledListItem = styled.li`
    margin: 0;
    padding: 0;
`;

const StyledMapContainer = styled.div`
    border: 1px solid ${gradient.dark};
    box-shadow: ${shadow.light};

    @media ${breakpoints.ld} {
        margin-bottom: 2rem;
    }

    @media screen and (min-width: 1024px) and (orientation: landscape),
        (min-width: 1200px) {
        grid-area: map;
        max-height: 70vh;
    }
`;

const StyledMap = styled.div`
    background: url(${mapPlaceholder}) no-repeat center;
    background-size: cover;
    width: 100%;
    height: 100%;
`;

const StyledButton = styled.button`
    display: block;
    width: 4rem;
    height: 4rem;
    background: none;
    background-image: url(${add});
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 100% 100%;
    margin-left: 25%;
    margin-top: 2rem;
    border: none;
    cursor: pointer;
`;

const Itinerary = () => (
    <AuthUserTemplate withTrip>
        <PageHeader
            header="My trip"
            subHeader="Thu, Sep 14 - Fri, Sep 20, 2019"
        />
        <StyledWrapper>
            <StyledMapContainer>
                <StyledMap />
            </StyledMapContainer>
            <StyledItineraryList>
                {itineraries.map(
                    ({ date, hour, name, location, description, status }) => (
                        <StyledListItem key={name}>
                            <ItineraryItem
                                date={date}
                                hour={hour}
                                name={name}
                                location={location}
                                description={description}
                                status={status}
                            />
                        </StyledListItem>
                    ),
                )}
                <StyledButton />
            </StyledItineraryList>
        </StyledWrapper>
    </AuthUserTemplate>
);

export default Itinerary;
