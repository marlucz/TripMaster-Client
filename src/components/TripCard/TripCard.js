import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import EditItems from 'components/EditItems/EditItems';
import { breakpoints, shadow, theme, color, gradient } from 'theme/GlobalStyle';
import { ReactComponent as CalendarLogo } from 'assets/icons/calendar.svg';
import { ReactComponent as ClockLogo } from 'assets/icons/clock.svg';

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

const StyledHeader = styled.h3`
    font-size: 1.6rem;
    padding: 0.5rem 0.5rem 0 0;
    width: 100%;
    display: flex;
    justify-content: space-between;

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
        const {
            id,
            image,
            name,
            startDate,
            endDate,
            duration,
            startsIn,
        } = this.props;
        const { redirect } = this.state;
        const stockImage = `https://source.unsplash.com/600x600/?city,${name}`;

        if (redirect) {
            return <Redirect to={`trip/${id}`} />;
        }

        return (
            <StyledWrapper onClick={this.handleCardClick}>
                <StyledImageWrapper>
                    <StyledImage src={image || stockImage} alt={name} />
                </StyledImageWrapper>
                <StyledInfoSection>
                    <StyledHeader>
                        {name}
                        <span>
                            <EditItems />
                        </span>
                    </StyledHeader>
                    <StyledData>
                        <StyledIcon>
                            <CalendarLogo />
                        </StyledIcon>
                        <span>
                            {startDate} - {endDate}
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
    id: PropTypes.number.isRequired,
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
};

TripCard.defaultProps = {
    image: null,
};

export default TripCard;
