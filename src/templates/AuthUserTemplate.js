import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import NavBar from 'components/NavBar/NavBar';

import { breakpoints } from 'theme/GlobalStyle';

const LayoutWrapper = styled.div`
  position: relative;
`;

const Main = styled.main`
  width: 100%;
  margin: 0 auto;
  margin-top: 4.1rem;
  padding: 0;

  @media ${breakpoints.md} {
    margin-top: 6rem;
  }
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
