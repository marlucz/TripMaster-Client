import React from 'react';
import PropTypes from 'prop-types';
import withPageContext from 'hoc/withPageContext';

import { LayoutWrapper, Main } from 'templates/AuthUserTemplate.styles';
import NavBar from 'components/NavBar/NavBar';
import AddItemForm from 'components/AddItemForm/AddItemForm';

const AuthUserTemplate = ({
    children,
    withTrip,
    pageContext: { isAddItemFormVisible },
}) => (
    <LayoutWrapper>
        <NavBar />
        <Main withTrip={withTrip}>
            {isAddItemFormVisible ? <AddItemForm /> : children}
        </Main>
        {withTrip && <NavBar isInTrip />}
    </LayoutWrapper>
);

AuthUserTemplate.propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.node])
        .isRequired,
    withTrip: PropTypes.bool,
};

AuthUserTemplate.defaultProps = {
    withTrip: false,
};

export default withPageContext(AuthUserTemplate);
