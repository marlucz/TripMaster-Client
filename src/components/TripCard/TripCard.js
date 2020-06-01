import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
    StyledWrapper,
    StyledImageWrapper,
    StyledImage,
    StyledInfoSection,
    StyledHeader,
    StyledHeaderWrapper,
    StyledData,
    StyledIcon,
} from 'components/TripCard/TripCard.styles';
import EditItems from 'components/EditItems/EditItems';
import { ReactComponent as CalendarLogo } from 'assets/icons/calendar.svg';
import { ReactComponent as ClockLogo } from 'assets/icons/clock.svg';

import {
    removeTrip as removeTripAction,
    setCurrentActiveTrip as setCurrentActiveTripAction,
} from 'store/trips/trips.actions';

const TripCard = ({
    id,
    image,
    name,
    slug,
    startDate,
    endDate,
    duration,
    removeTrip,
    startsIn,
    location,
    setCurrentActiveTrip,
}) => {
    const [redirect, setRedirect] = useState(false);

    const handleCardClick = () => {
        setCurrentActiveTrip({
            id,
            name,
            slug,
            location,
        });
        setRedirect(true);
    };

    const stockImage = `https://source.unsplash.com/600x600/?city,${name}`;

    const getDateOnly = date => {
        const year = date.getUTCFullYear();
        const month = date.getUTCMonth() + 1;
        const day = date.getUTCDate();

        return `${year}.${month < 10 ? `0${month}` : month}.${
            day < 10 ? `0${day}` : day
        }`;
    };

    if (redirect) {
        return <Redirect to={`trips/${slug}/itinerary`} />;
    }

    return (
        <StyledWrapper>
            <StyledImageWrapper>
                <StyledImage src={image || stockImage} alt={name} />
            </StyledImageWrapper>
            <StyledInfoSection>
                <StyledHeaderWrapper>
                    <StyledHeader onClick={handleCardClick}>
                        {name}
                    </StyledHeader>
                    <EditItems handleClickRemove={() => removeTrip(id)} />
                </StyledHeaderWrapper>
                <StyledData>
                    <StyledIcon>
                        <CalendarLogo />
                    </StyledIcon>
                    <span>
                        {getDateOnly(new Date(startDate))} -{' '}
                        {getDateOnly(new Date(endDate))}
                    </span>
                </StyledData>
                <StyledData>
                    <StyledIcon>
                        <ClockLogo />
                    </StyledIcon>
                    <span>
                        {`${duration} ${
                            duration > 1 ? 'days' : 'day'
                        } trip, starts in ${startsIn} ${
                            startsIn > 1 ? 'days' : 'day'
                        }`}
                    </span>
                </StyledData>
            </StyledInfoSection>
        </StyledWrapper>
    );
};

TripCard.propTypes = {
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    startDate: PropTypes.oneOfType([
        PropTypes.instanceOf(Date),
        PropTypes.string,
    ]).isRequired,
    endDate: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string])
        .isRequired,
    duration: PropTypes.number.isRequired,
    removeTrip: PropTypes.func.isRequired,
    startsIn: PropTypes.number.isRequired,
    location: PropTypes.shape({
        coordinates: PropTypes.arrayOf(PropTypes.number),
        address: PropTypes.string,
    }).isRequired,
};

TripCard.defaultProps = {
    image: null,
};

const mapDispatchToProps = dispatch => ({
    removeTrip: id => dispatch(removeTripAction(id)),
    setCurrentActiveTrip: activeTrip =>
        dispatch(setCurrentActiveTripAction(activeTrip)),
});

export default connect(null, mapDispatchToProps)(TripCard);
