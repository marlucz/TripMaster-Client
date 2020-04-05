import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import NotFoundBackground from 'assets/photos/404.jpg';
import { color } from 'theme/GlobalStyle';

import Button from 'components/Button/Button';

const StyledWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background: url(${NotFoundBackground}) no-repeat center;
  background-size: cover;
  padding-bottom: 10vh;
`;

const Status = styled.h2`
  padding-top: 8vh;
  width: 80%;
  max-width: 50rem;
  font-size: 5rem;
  margin-bottom: 1rem;
  color: ${color.white};
`;

const Message = styled.p`
  color: ${color.white};
  margin-top: auto;
  margin-bottom: 1rem;
  padding: 1.5rem 2rem;
  font-size: 2rem;
`;

const StyledButton = styled(Button)`
  text-decoration: none;
`;

const NotFound = () => (
  <StyledWrapper>
    <Status>404</Status>
    <Message>The page that you are looking for cannot be found</Message>
    <StyledButton as={NavLink} to="/">
      Back to Homepage
    </StyledButton>
  </StyledWrapper>
);

export default NotFound;
