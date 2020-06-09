import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactMapGL, { NavigationControl, Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import PinIcon from 'components/PinIcon/PinIcon';

import { ItineraryItemPropTypes } from 'utils/propTypes';
import {
    StyledMapWrapper,
    StyledNavigation,
    StyledPopup,
    StyledPinWrapper,
    StyledInfo,
    StyledTitle,
    StyledDesc,
} from './Map.styles';

const INITIAL_VIEWPORT = {
    latitude: 52.237049,
    longitude: 21.017532,
    zoom: 13,
};

const Map = ({ activeTripData, itinerary }) => {
    const [viewport, setViewport] = useState(INITIAL_VIEWPORT);

    useEffect(() => {
        if (!activeTripData) return;

        const [lng, lat] = activeTripData.location.coordinates;

        const initViewport = {
            latitude: lat,
            longitude: lng,
            zoom: 12,
        };

        setViewport(initViewport);
    }, [activeTripData]);

    return (
        <StyledMapWrapper>
            <ReactMapGL
                width="100%"
                height="100%"
                mapStyle="mapbox://styles/bukacz/ck0e93vsg1gd61cn5qwr6ljq9"
                mapboxApiAccessToken="pk.eyJ1IjoiYnVrYWN6IiwiYSI6ImNrMGU5MTk2NjA0d2ozcHBsZGU4Z2Y4d2gifQ.dOvbuvm8OvaACvUMDkiY4w"
                onViewportChange={newViewport => setViewport(newViewport)}
                {...viewport}
            >
                <StyledNavigation>
                    <NavigationControl
                        onViewportChange={newViewport =>
                            setViewport(newViewport)
                        }
                    />
                </StyledNavigation>

                {itinerary.map(
                    ({
                        name,
                        location: {
                            coordinates: [lng, lat],
                        },
                        description,
                        status,
                    }) => (
                        <StyledPinWrapper key={name}>
                            <Marker
                                latitude={lat}
                                longitude={lng}
                                offsetLeft={-10}
                                offsetTop={-20}
                            >
                                <PinIcon status={status} />
                                {name && (
                                    <StyledPopup>
                                        <StyledInfo>
                                            <StyledTitle>{name}</StyledTitle>
                                            <StyledDesc>
                                                {description}
                                            </StyledDesc>
                                        </StyledInfo>
                                    </StyledPopup>
                                )}
                            </Marker>
                        </StyledPinWrapper>
                    ),
                )}
            </ReactMapGL>
        </StyledMapWrapper>
    );
};

Map.propTypes = {
    itinerary: PropTypes.arrayOf(ItineraryItemPropTypes).isRequired,
};

export default Map;
