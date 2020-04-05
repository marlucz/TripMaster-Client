import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import GlobalStyle from 'theme/GlobalStyle';
import GradientContainer from 'components/GradientContainer/GradientContainer';
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

const MainTemplate = ({ children }) => (
  <LayoutWrapper>
    <GradientContainer />
    <GlobalStyle />
    <NavBar />
    <Main>{children}</Main>
  </LayoutWrapper>
);

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
