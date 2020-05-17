import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import withPageContext from 'hoc/withPageContext';

import {
    StyledWrapper,
    StyledTripsList,
    StyledListItem,
    StyledInlineButton,
} from 'pages/Trips/Trips.styles';
import AuthUserTemplate from 'templates/AuthUserTemplate';
import TripCard from 'components/TripCard/TripCard';
import PageHeader from 'components/PageHeader/PageHeader';

import { fetchTrips } from 'store/trips/trips.actions';

class Trips extends Component {
    componentDidMount() {
        // eslint-disable-next-line
        this.props.fetchTrips();
    }

    render() {
        const {
            trips,
            pageContext: { pageType, toggleAddItemForm },
        } = this.props;
        return (
            <AuthUserTemplate>
                <StyledWrapper>
                    <PageHeader header={pageType} subHeader="your" />
                    {trips.length ? (
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
                </StyledWrapper>
            </AuthUserTemplate>
        );
    }
}

Trips.propTypes = {
    trips: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
                .isRequired,
            image: PropTypes.string,
            name: PropTypes.string.isRequired,
            slug: PropTypes.string.isRequired,
            startDate: PropTypes.oneOfType([
                PropTypes.instanceOf(Date),
                PropTypes.string,
            ]).isRequired,
            endDate: PropTypes.oneOfType([
                PropTypes.instanceOf(Date),
                PropTypes.string,
            ]).isRequired,
            duration: PropTypes.number.isRequired,
            startsIn: PropTypes.number.isRequired,
        }),
    ).isRequired,
    pageContext: PropTypes.shape({
        pageType: PropTypes.oneOf(['trips', 'itinerary', 'expenses', 'todo']),
        isAddItemFormVisible: PropTypes.bool,
        toggleAddItemForm: PropTypes.func,
    }).isRequired,
};

const mapStateToProps = ({ trips }) => trips;

const mapDispatchToProps = dispatch => ({
    fetchTrips: () => dispatch(fetchTrips()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(withPageContext(Trips));
