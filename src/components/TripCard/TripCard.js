import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import EditItems from 'components/EditItems/EditItems';
import { breakpoints, shadow, theme, color, gradient } from 'theme/GlobalStyle';
import { ReactComponent as CalendarLogo } from 'assets/icons/calendar.svg';
import { ReactComponent as ClockLogo } from 'assets/icons/clock.svg';

import { removeTrip as removeTripAction } from 'store/trips/trips.actions';

const StyledWrapper = styled.div`
    width: 100%;
    max-width: 40rem;
    position: relative;
    display: flex;
    align-items: center;
    background-color: ${color.white};
    border: 1px solid ${gradient.dark};
    border-radius: 1rem;
    box-shadow: ${shadow.light};
    overflow: hidden;

    @media ${breakpoints.md} {
        flex-direction: column;
    }
`;

const StyledImageWrapper = styled.div`
    width: 25%;
    height: 12vh;

    @media ${breakpoints.md} {
        width: 100%;
        height: 15vh;
    }

    @media ${breakpoints.ld} {
        height: 18vh;
    }

    @media ${breakpoints.xld} {
        height: 25vh;
    }
`;

const StyledImage = styled.img`
    object-fit: cover;
    height: 100%;
    width: 100%;
`;

const StyledInfoSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    flex-grow: 1;
    padding-left: 1rem;
    height: 12vh;

    @media ${breakpoints.md} {
        width: 100%;
        height: auto;
        padding: 1rem 1.5rem;
    }
`;

const StyledHeaderWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const StyledHeader = styled.h3`
    font-size: 1.6rem;
    padding: 0.5rem 0.5rem 0 0;

    cursor: pointer;

    @media ${breakpoints.md} {
        font-size: 2.2rem;
        padding-bottom: 1rem;
        padding-right: 0;
    }
`;

const StyledData = styled.div`
    display: flex;
    align-items: center;

    @media ${breakpoints.md} {
        padding-bottom: 1rem;
    }
`;

const StyledIcon = styled.div`
    svg {
        width: 1.5rem;
        height: 1.5rem;
        margin-right: 8px;
        path {
            fill: ${theme.primary};
        }

        @media ${breakpoints.md} {
            width: 2rem;
            height: 2rem;
            margin-right: 2rem;
        }
    }
`;

class TripCard extends Component {
    state = {
        redirect: false,
    };

    handleCardClick = () => this.setState({ redirect: true });

    render() {
        const getDateOnly = date => {
            const year = date.getUTCFullYear();
            const month = date.getUTCMonth() + 1;
            const day = date.getUTCDate();

            return `${year}.${month < 10 ? `0${month}` : month}.${
                day < 10 ? `0${day}` : day
            }`;
        };

        const {
            id,
            image,
            name,
            startDate,
            endDate,
            duration,
            startsIn,
            removeTrip,
        } = this.props;
        const { redirect } = this.state;
        const stockImage = `https://source.unsplash.com/600x600/?city,${name}`;

        if (redirect) {
            return <Redirect to={`trip/${id}/itinerary`} />;
        }

        return (
            <StyledWrapper>
                <StyledImageWrapper>
                    <StyledImage src={image || stockImage} alt={name} />
                </StyledImageWrapper>
                <StyledInfoSection>
                    <StyledHeaderWrapper>
                        <StyledHeader onClick={this.handleCardClick}>
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
    }
}

TripCard.propTypes = {
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    startDate: PropTypes.oneOfType([
        PropTypes.instanceOf(Date),
        PropTypes.string,
    ]).isRequired,
    endDate: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string])
        .isRequired,
    duration: PropTypes.number.isRequired,
    startsIn: PropTypes.number.isRequired,
    removeTrip: PropTypes.func.isRequired,
};

TripCard.defaultProps = {
    image: null,
};

const mapDispatchToProps = dispatch => ({
    removeTrip: id => dispatch(removeTripAction(id)),
});

export default connect(null, mapDispatchToProps)(TripCard);
