import React from 'react';
import PropTypes from 'prop-types';

import GlobalSpinner from 'components/GlobalSpinner/GlobalSpinner';

const ItemsFetchingTemplate = ({ children, isLoading }) => (
    <>{isLoading ? <GlobalSpinner /> : <>{children}</>}</>
);

ItemsFetchingTemplate.propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.node])
        .isRequired,
    isLoading: PropTypes.bool,
};

ItemsFetchingTemplate.defaultProps = {
    isLoading: false,
};

export default ItemsFetchingTemplate;
