import React from 'react';
import PropTypes from 'prop-types';

import GlobalStyle from 'theme/GlobalStyle';
import GradientContainer from 'components/GradientContainer/GradientContainer';

const MainTemplate = ({ children }) => (
  <>
    <GradientContainer />
    <GlobalStyle />
    <div>{children}</div>
  </>
);

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
