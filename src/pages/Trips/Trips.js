import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import withPageContext from 'hoc/withPageContext';

import {
    StyledWrapper,
    StyledTripsList,
    StyledListItem,
    StyledInlineButton,
} from 'pages/Trips/Trips.styles';
import AuthUserTemplate from 'templates/AuthUserTemplate';
import ItemsFetchingTemplate from 'templates/ItemsFetchingTemplate';
import TripCard from 'components/TripCard/TripCard';
import PageHeader from 'components/PageHeader/PageHeader';

import { fetchTrips } from 'store/trips/trips.actions';
import {
    selectAllTripsDateAscending,
    selectTripsIsLoading,
} from 'store/trips/trips.selectors';

import { TripsItemPropTypes } from 'utils/propTypes';

class Trips extends Component {
    componentDidMount() {
        // eslint-disable-next-line
        this.props.fetchTrips();
    }

    render() {
        const {
            trips,
            isTripsLoading,
            pageContext: { pageType, toggleAddItemForm },
        } = this.props;
        return (
            <AuthUserTemplate>
                <StyledWrapper>
                    <ItemsFetchingTemplate isLoading={isTripsLoading}>
                        <PageHeader header={pageType} subHeader="your" />
                        {trips.length > 0 ? (
                            <StyledTripsList>
                                {trips.map(
                                    ({
                                        _id,
                                        image,
                                        name,
                                        slug,
                                        startDate,
                                        endDate,
                                        duration,
                                        startsIn,
                                        location,
                                    }) => (
                                        <StyledListItem key={_id}>
                                            <TripCard
                                                id={_id}
                                                image={image}
                                                name={name}
                                                slug={slug}
                                                startDate={startDate}
                                                endDate={endDate}
                                                duration={duration}
                                                startsIn={startsIn}
                                                location={location}
                                            />
                                        </StyledListItem>
                                    ),
                                )}
                            </StyledTripsList>
                        ) : (
                            <h2>
                                You don&apos;t have any trips, do you want to
                                <StyledInlineButton onClick={toggleAddItemForm}>
                                    {' '}
                                    ADD TRIP?
                                </StyledInlineButton>
                            </h2>
                        )}
                    </ItemsFetchingTemplate>
                </StyledWrapper>
            </AuthUserTemplate>
        );
    }
}

Trips.propTypes = {
    trips: PropTypes.arrayOf(TripsItemPropTypes).isRequired,
    pageContext: PropTypes.shape({
        pageType: PropTypes.oneOf(['trips', 'itinerary', 'expenses', 'todo']),
        isAddItemFormVisible: PropTypes.bool,
        toggleAddItemForm: PropTypes.func,
    }).isRequired,
};

const mapStateToProps = createStructuredSelector({
    trips: selectAllTripsDateAscending,
    isTripsLoading: selectTripsIsLoading,
});

const mapDispatchToProps = dispatch => ({
    fetchTrips: () => dispatch(fetchTrips()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(withPageContext(Trips));
