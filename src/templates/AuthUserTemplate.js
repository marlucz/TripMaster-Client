import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import NavBar from 'components/NavBar/NavBar';

const LayoutWrapper = styled.div`
  position: relative;
`;

const Main = styled.main`
  width: 80%;
  max-width: 110rem;
  margin: 0 auto;
  margin-top: 6rem;
  padding: 2rem 0.5em;
`;

const AuthUserTemplate = ({ children }) => (
  <LayoutWrapper>
    <NavBar />
    <Main>{children}</Main>
  </LayoutWrapper>
);

AuthUserTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

export default AuthUserTemplate;
