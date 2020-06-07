import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import withPageContext from 'hoc/withPageContext';

import { selectActiveTrip } from 'store/trips/trips.selectors';

import {
    StyledWrapper,
    StyledList,
    StyledListItem,
    StyledIcon,
    StyledText,
} from 'components/NavBar/NavBar.styles';
import add from 'assets/icons/add.svg';
import { navTop, navInTrip } from './NavItemsHelper';

const NavBar = ({
    isInTrip,
    pageContext: { isAddItemFormVisible, toggleAddItemForm, setCurrentToTrips },
    activeTrip,
}) => {
    const handleChangeRoute = () =>
        isAddItemFormVisible ? toggleAddItemForm() : '';

    const handleAddTripClick = () => {
        setCurrentToTrips();
        return isAddItemFormVisible ? '' : toggleAddItemForm();
    };

    return !isInTrip ? (
        <StyledWrapper>
            <StyledList>
                {navTop.map(item => (
                    <StyledListItem
                        key={item.title}
                        onClick={handleChangeRoute}
                    >
                        <StyledIcon
                            as={NavLink}
                            to={item.route}
                            exact
                            icon={item.icon}
                            activeclass="active"
                        />
                        <StyledText>{item.title}</StyledText>
                    </StyledListItem>
                ))}
                <StyledListItem key="Add Trip" onClick={handleAddTripClick}>
                    <StyledIcon icon={add} />
                    <StyledText>Add Trip</StyledText>
                </StyledListItem>
            </StyledList>
        </StyledWrapper>
    ) : (
        <StyledWrapper bottom>
            <StyledList>
                {navInTrip.map(item => (
                    <StyledListItem
                        key={item.title}
                        onClick={handleChangeRoute}
                    >
                        <StyledIcon
                            as={NavLink}
                            to={item.route.replace(':slug', activeTrip.slug)}
                            exact
                            icon={item.icon}
                            activeclass="active"
                        />
                        <StyledText>{item.title}</StyledText>
                    </StyledListItem>
                ))}
            </StyledList>
        </StyledWrapper>
    );
};

NavBar.propTypes = {
    isInTrip: PropTypes.bool,
    pageContext: PropTypes.shape({
        pageType: PropTypes.oneOf(['trips', 'itinerary', 'expenses', 'todo']),
        isAddItemFormVisible: PropTypes.bool,
        toggleAddItemForm: PropTypes.func,
    }).isRequired,
    // activeTripSlug: PropTypes.string,
};

NavBar.defaultProps = {
    isInTrip: false,
    // activeTripSlug: null,
};

const mapStateToProps = createStructuredSelector({
    activeTrip: selectActiveTrip,
});

export default withPageContext(connect(mapStateToProps)(NavBar));
