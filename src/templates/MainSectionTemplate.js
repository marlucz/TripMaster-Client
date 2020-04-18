import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { breakpoints } from 'theme/GlobalStyle';

const MainSection = styled.div`
  width: 100%;
  height: calc(100vh - 4.1rem);
  padding: 1.5rem 1rem;
  margin: 0 auto;
  overflow-y: scroll;

  @media ${breakpoints.md} {
    height: calc(100vh - 12rem);
    width: 90%;
    max-width: 140rem;
    padding: 2rem;
  }
`;

const MainSectionTemplate = ({ children }) => (
  <MainSection>{children}</MainSection>
);

MainSectionTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

export default MainSectionTemplate;
