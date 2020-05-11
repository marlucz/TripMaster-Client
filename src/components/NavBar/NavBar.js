import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';

import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import withPageContext from 'hoc/withPageContext';

import add from 'assets/icons/add.svg';
import { color, theme, breakpoints } from 'theme/GlobalStyle';
import { navTop, navInTrip } from './NavItemsHelper';

const StyledWrapper = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 4rem;
    padding: 5px;

    &::after {
        content: '';
        position: absolute;
        left: 0;
        top: 100%;
        height: 1px;
        width: 100%;
        background-color: ${color.black};

        @media ${breakpoints.md} {
            left: 2.5%;
            width: 95%;
        }
    }

    ${({ bottom }) =>
        bottom &&
        css`
            top: 100%;
            transform: translateY(-100%);

            &::after {
                top: 0;
            }
        `}
`;

const StyledList = styled.ul`
    display: flex;
    justify-content: space-around;
    width: 95%;
    max-width: 90rem;
    margin: auto;
`;

const StyledListItem = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-basis: 25%;
    cursor: pointer;
`;
const StyledIcon = styled.button`
    display: block;
    width: 3rem;
    height: 3rem;
    background-image: url(${({ icon }) => icon});
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 80%;
    border: none;

    &.active + span {
        color: ${theme.primary};
    }
`;

const StyledText = styled.span`
    display: none;

    @media ${breakpoints.md} {
        display: block;
    }
`;

const NavBar = ({
    isInTrip,
    pageContext: { isAddItemFormVisible, toggleAddItemForm },
}) => {
    const handleAddTripClick = () => {
        toggleAddItemForm('trips');
        return <Redirect to="/trips" />;
    };

    const handleChangeRoute = () =>
        isAddItemFormVisible ? toggleAddItemForm() : '';

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
                            to={item.route}
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
};

NavBar.defaultProps = {
    isInTrip: false,
};

export default withPageContext(NavBar);
