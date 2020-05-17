import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchTrips } from 'store/trips/trips.actions';

import withPageContext from 'hoc/withPageContext';

import AuthUserTemplate from 'templates/AuthUserTemplate';
import TripCard from 'components/TripCard/TripCard';
import PageHeader from 'components/PageHeader/PageHeader';

import { gap, breakpoints, theme } from 'theme/GlobalStyle';

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

const StyledInlineButton = styled.button`
    display: inline;
    font-size: 2rem;
    margin-left: 1rem;
    color: ${theme.secondary};
    border: none;
    background: none;
    cursor: pointer;
`;

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
