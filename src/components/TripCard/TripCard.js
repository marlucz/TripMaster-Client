import React from 'react';
import styled from 'styled-components';

import { breakpoints, shadow, theme } from 'theme/GlobalStyle';
import { ReactComponent as CalendarLogo } from 'assets/icons/calendar.svg';
import { ReactComponent as ClockLogo } from 'assets/icons/clock.svg';

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  @media ${breakpoints.md} {
    flex-direction: column;
    margin-bottom: 2rem;
  }
`;

const StyledImageWrapper = styled.div`
  width: 25%;
  height: 100%;

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
  height: 90%;
  box-shadow: ${shadow.light};

  @media ${breakpoints.md} {
    width: 100%;
    height: auto;
    padding: 0 1.5rem;
  }
`;

const StyledHeader = styled.h3`
  font-size: 1.6rem;

  @media ${breakpoints.md} {
    font-size: 2.2rem;
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

export default TripCard;
