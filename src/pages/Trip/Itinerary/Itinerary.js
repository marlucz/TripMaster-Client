import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector, createSelector } from 'reselect';

import withPageContext from 'hoc/withPageContext';

import { setCurrentActiveTrip as setCurrentActiveTripAction } from 'store/trips/trips.actions';
import { selectAllTrips, selectActiveTrip } from 'store/trips/trips.selectors';
import {
    selectAllItineraryDateAscending,
    selectItineraryIsLoading,
} from 'store/itinerary/itinerary.selectors';
import { fetchItinerary as fetchItineraryAction } from 'store/itinerary/itinerary.actions';

import {
    StyledWrapper,
    StyledMapContainer,
    StyledItineraryList,
    StyledButton,
    StyledInlinEButton,
} from 'pages/Trip/Itinerary/Itinerary.styles';
import AuthUserTemplate from 'templates/AuthUserTemplate';
import ItemsFetchingTemplate from 'templates/ItemsFetchingTemplate';
import ItineraryItem from 'components/ItineraryItem/ItineraryItem';
import PageHeader from 'components/PageHeader/PageHeader';
import Map from 'components/Map/Map';

import { ItineraryItemPropTypes, TripsItemPropTypes } from 'utils/propTypes';

const Itinerary = ({
    isItineraryLoading,
    fetchItinerary,
    itinerary,
    pageContext: { pageType, toggleAddItemForm },
    slugFromURI,
    setActiveTripInState,
    trips,
    activeTrip,
}) => {
    const [currentActiveTrip, setCurrentActiveTrip] = useState(null);

    useEffect(() => {
        // check if there is activeTrip set and if it matches with parameter from the link address
        // eslint-disable-next-line
        if (!activeTrip || activeTrip.slug !== slugFromURI) {
            setActiveTripInState(slugFromURI);

            const currentActive = trips.filter(trip => {
                return trip.slug === slugFromURI;
            });

            setCurrentActiveTrip(currentActive);
            fetchItinerary(slugFromURI);
        } else {
            setCurrentActiveTrip(activeTrip);
            fetchItinerary(activeTrip.slug);
        }
    }, []);

    return (
        <AuthUserTemplate withTrip>
            <ItemsFetchingTemplate isLoading={isItineraryLoading}>
                <PageHeader header={slugFromURI} subHeader={pageType} />
                {itinerary.length ? (
                    <StyledWrapper>
                        <StyledMapContainer>
                            <Map
                                itinerary={itinerary}
                                activeTripData={currentActiveTrip}
                            />
                        </StyledMapContainer>
                        <StyledItineraryList>
                            {itinerary.map(
                                ({
                                    _id,
                                    name,
                                    startDate,
                                    location,
                                    description,
                                    status,
                                }) => (
                                    <ItineraryItem
                                        key={_id}
                                        id={_id}
                                        startDate={startDate}
                                        name={name}
                                        location={location}
                                        description={description}
                                        status={status}
                                        slug={activeTrip.slug || slugFromURI}
                                    />
                                ),
                            )}
                            <StyledButton secondary onClick={toggleAddItemForm}>
                                Add Next Stop
                            </StyledButton>
                        </StyledItineraryList>
                    </StyledWrapper>
                ) : (
                    <h2>
                        You don&apos;t have any trip stops, do you want to
                        <StyledInlinEButton onClick={toggleAddItemForm}>
                            {' '}
                            ADD TRIP STOP?
                        </StyledInlinEButton>
                    </h2>
                )}
            </ItemsFetchingTemplate>
        </AuthUserTemplate>
    );
};

Itinerary.propTypes = {
    itinerary: PropTypes.arrayOf(ItineraryItemPropTypes).isRequired,
    pageContext: PropTypes.shape({
        pageType: PropTypes.oneOf(['trips', 'itinerary', 'expenses', 'todo']),
        isAddItemFormVisible: PropTypes.bool,
        toggleAddItemForm: PropTypes.func,
    }).isRequired,
    slugFromURI: PropTypes.string.isRequired,
    setActiveTripInState: PropTypes.func.isRequired,
    activeTrip: TripsItemPropTypes,
};

Itinerary.defaultProps = {
    activeTrip: null,
};

const mapDispatchToProps = dispatch => ({
    setActiveTripInState: slug => dispatch(setCurrentActiveTripAction(slug)),
    fetchItinerary: slug => dispatch(fetchItineraryAction(slug)),
});

const mapStateToProps = (state, ownProps) => {
    // ownProps selector to memoize params.id and pass it to props
    const selectPageParams = () => ownProps.match.params;
    const selectPageId = createSelector(
        [selectPageParams],
        params => params.id,
    );

    return createStructuredSelector({
        trips: selectAllTrips,
        activeTrip: selectActiveTrip,
        itinerary: selectAllItineraryDateAscending,
        slugFromURI: selectPageId,
        isItineraryLoading: selectItineraryIsLoading,
    });
};

export default withPageContext(
    connect(mapStateToProps, mapDispatchToProps)(Itinerary),
);
