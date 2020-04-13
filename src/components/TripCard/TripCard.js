import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { breakpoints, shadow, theme, color } from 'theme/GlobalStyle';
import { ReactComponent as CalendarLogo } from 'assets/icons/calendar.svg';
import { ReactComponent as ClockLogo } from 'assets/icons/clock.svg';

const StyledWrapper = styled.div`
  width: 100%;
  max-width: 40rem;
  position: relative;
  display: flex;
  align-items: center;

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
  height: 11vh;
  box-shadow: ${shadow.light};
  background-color: ${color.white};

  @media ${breakpoints.md} {
    width: 100%;
    height: auto;
    padding: 1rem 1.5rem;
  }
`;

const StyledHeader = styled.h3`
  font-size: 1.6rem;
  padding-bottom: 0.5rem;

  @media ${breakpoints.md} {
    font-size: 2.2rem;
    padding-bottom: 1rem;
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

const TripCard = ({ image, name, startDate, endDate, duration, startsIn }) => {
  const stockImage = `https://source.unsplash.com/600x600/?city,${name}`;

  return (
    <StyledWrapper>
      <StyledImageWrapper>
        <StyledImage src={image || stockImage} alt={name} />
      </StyledImageWrapper>
      <StyledInfoSection>
        <StyledHeader>{name}</StyledHeader>
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
            } trip, starts in ${startsIn} ${startsIn > 1 ? 'days' : 'day'}`}
          </span>
        </StyledData>
      </StyledInfoSection>
    </StyledWrapper>
  );
};

TripCard.protoTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  startDate: PropTypes.instanceOf(Date).isRequired,
  endDate: PropTypes.instanceOf(Date).isRequired,
  duration: PropTypes.number.isRequired,
  startsIn: PropTypes.number.isRequired,
};

TripCard.defaultProps = {
  image: null,
};

export default TripCard;
