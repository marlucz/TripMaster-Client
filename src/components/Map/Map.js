import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import ReactMapGL, { NavigationControl, Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { ReactComponent as PinDone } from 'assets/icons/pin-done.svg';
import { ReactComponent as PinNow } from 'assets/icons/pin-now.svg';
import { ReactComponent as PinNext } from 'assets/icons/pin-next.svg';

import { selectActiveTripObject } from 'store/trips/trips.selectors';
import {
    StyledMapWrapper,
    StyledNavigation,
    StyledPopup,
    StyledPinWrapper,
    StyledPinIcon,
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
                                <StyledPinIcon status={status}>
                                    {status === 'done' && <PinDone />}
                                    {status === 'now' && <PinNow />}
                                    {status === 'next' && <PinNext />}
                                </StyledPinIcon>
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
    itinerary: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
                .isRequired,
            name: PropTypes.string.isRequired,
            startDate: PropTypes.oneOfType([
                PropTypes.instanceOf(Date),
                PropTypes.string,
            ]).isRequired,
            location: PropTypes.shape({
                address: PropTypes.string,
                coordinates: PropTypes.array,
            }).isRequired,
            description: PropTypes.string,
            status: PropTypes.string.isRequired,
        }),
    ).isRequired,
};

const mapStateToProps = createStructuredSelector({
    activeTripData: selectActiveTripObject,
});

export default connect(mapStateToProps)(Map);
