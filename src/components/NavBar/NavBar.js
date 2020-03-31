import React from 'react';
import styled from 'styled-components';

import { color } from 'theme/GlobalStyle';
import { navTop } from './NavItemsHelper';

const StyledWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 4rem;

  &::after {
    content: '';
    position: absolute;
    left: 2.5%;
    top: 100%;
    height: 1px;
    width: 95%;
    background-color: ${color.black};
  }
`;

const StyledList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 95%;
  max-width: 90rem;
  margin: auto;
`;

const StyledListItem = styled.li`
  display: flex;
  justify-content: center;
  flex-basis: 25%;
`;
const StyledIcon = styled.button`
  display: block;
  width: 3rem;
  height: 3rem;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 50% 50%;
  border: none;
`;

const StyledText = styled.span``;

const NavBar = () => (
  <StyledWrapper>
    <StyledList />
    {navTop.map(item => (
      <StyledListItem>
        <StyledIcon to={item.slug} icon={item.icon} activeclass="active" />
        <StyledText>{item.title}</StyledText>
      </StyledListItem>
    ))}
  </StyledWrapper>
);

export default NavBar;
