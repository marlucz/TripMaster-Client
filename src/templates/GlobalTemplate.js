import React from 'react';
import PropTypes from 'prop-types';

import PageProvider from 'context/pageContext';

import GlobalStyle from 'theme/GlobalStyle';
import GradientContainer from 'components/GradientContainer/GradientContainer';

const MainTemplate = ({ children }) => (
    <PageProvider>
        <GradientContainer />
        <GlobalStyle />
        <div>{children}</div>
    </PageProvider>
);

MainTemplate.propTypes = {
    children: PropTypes.element.isRequired,
};

export default MainTemplate;
