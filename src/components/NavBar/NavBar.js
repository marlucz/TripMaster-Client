import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { color, theme, breakpoints } from 'theme/GlobalStyle';
import { navTop, navInTrip } from './NavItemsHelper';

const StyledWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 4rem;
  padding: 5px;

  &::after {
    content: '';
    position: absolute;
    left: 2.5%;
    top: 100%;
    height: 1px;
    width: 95%;
    background-color: ${color.black};
  }

  ${({ bottom }) =>
    bottom &&
    css`
      top: 100%;
      transform: translateY(-100%);

      &::after {
        top: 0;
      }
    `}
`;

const StyledList = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 95%;
  max-width: 90rem;
  margin: auto;
`;

const StyledListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-basis: 25%;
`;
const StyledIcon = styled.button`
  display: block;
  width: 3rem;
  height: 3rem;
  background-image: url(${({ icon }) => icon});
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 80%;
  border: none;
  cursor: pointer;

  &.active + span {
    color: ${theme.primary};
  }
`;

const StyledText = styled.span`
  display: none;

  @media ${breakpoints.md} {
    display: block;
  }
`;

const NavBar = ({ isInTrip }) =>
  !isInTrip ? (
    <StyledWrapper>
      <StyledList>
        {navTop.map(item => (
          <StyledListItem>
            <StyledIcon
              as={NavLink}
              to={item.slug}
              icon={item.icon}
              activeclass="active"
            />
            <StyledText>{item.title}</StyledText>
          </StyledListItem>
        ))}
      </StyledList>
    </StyledWrapper>
  ) : (
    <StyledWrapper bottom>
      <StyledList>
        {navInTrip.map(item => (
          <StyledListItem>
            <StyledIcon
              as={NavLink}
              to={item.slug}
              icon={item.icon}
              activeclass="active"
            />
            <StyledText>{item.title}</StyledText>
          </StyledListItem>
        ))}
      </StyledList>
    </StyledWrapper>
  );

NavBar.propTypes = {
  isInTrip: PropTypes.bool,
};

NavBar.defaultProps = {
  isInTrip: false,
};

export default NavBar;
