import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector, createSelector } from 'reselect';

import withPageContext from 'hoc/withPageContext';

import { setCurrentActiveTrip as setCurrentActiveTripAction } from 'store/trips/trips.actions';

import { selectActiveTrip } from 'store/trips/trips.selectors';
import { selectAllitineraryDateAscending } from 'store/itinerary/itinerary.selectors';

import {
    StyledWrapper,
    StyledMapContainer,
    StyledMap,
    StyledItineraryList,
    StyledButton,
    StyledInlinEButton,
} from 'pages/Trip/Itinerary/Itinerary.styles';
import AuthUserTemplate from 'templates/AuthUserTemplate';
import ItineraryItem from 'components/ItineraryItem/ItineraryItem';
import PageHeader from 'components/PageHeader/PageHeader';

import { fetchItinerary as fetchItineraryAction } from 'store/itinerary/itinerary.actions';

const Itinerary = ({
    fetchItinerary,
    itinerary,
    pageContext: { pageType, toggleAddItemForm },
    tripSlug,
    setCurrentActiveTrip,
    activeTrip,
}) => {
    useEffect(() => {
        let slug;
        // eslint-disable-next-line
        if (!activeTrip) {
            setCurrentActiveTrip(tripSlug);
            slug = tripSlug;
        } else {
            slug = activeTrip;
        }

        fetchItinerary(slug);
    }, [tripSlug, activeTrip]);

    return (
        <AuthUserTemplate withTrip>
            <PageHeader header={activeTrip} subHeader={pageType} />
            {itinerary.length ? (
                <StyledWrapper>
                    <StyledMapContainer>
                        <StyledMap />
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
        </AuthUserTemplate>
    );
};

Itinerary.propTypes = {
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
                lat: PropTypes.number,
                lng: PropTypes.number,
            }).isRequired,
            description: PropTypes.string,
            status: PropTypes.string.isRequired,
        }),
    ).isRequired,
    pageContext: PropTypes.shape({
        pageType: PropTypes.oneOf(['trips', 'itinerary', 'expenses', 'todo']),
        isAddItemFormVisible: PropTypes.bool,
        toggleAddItemForm: PropTypes.func,
    }).isRequired,
};

const mapDispatchToProps = dispatch => ({
    setCurrentActiveTrip: slug => dispatch(setCurrentActiveTripAction(slug)),
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
        activeTrip: selectActiveTrip,
        itinerary: selectAllitineraryDateAscending,
        tripSlug: selectPageId,
    });
};

export default withPageContext(
    connect(mapStateToProps, mapDispatchToProps)(Itinerary),
);
