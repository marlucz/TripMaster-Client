import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import withPageContext from 'hoc/withPageContext';

import {
    StyledWrapper,
    StyledMapContainer,
    StyledMap,
    StyledItineraryList,
    StyledButton,
    StyledInlinEButton,
} from 'pages/Trip/Itinerary/Itinerary.styles';
import AuthUserTemplate from 'templates/AuthUserTemplate';
import ItineraryItem from 'components/ItineraryItem/ItineraryItem';
import PageHeader from 'components/PageHeader/PageHeader';

const Itinerary = ({
    itinerary,
    pageContext: { pageType, toggleAddItemForm },
}) => (
    <AuthUserTemplate withTrip>
        <PageHeader header="My Trip" subHeader={pageType} />
        {itinerary.length ? (
            <StyledWrapper>
                <StyledMapContainer>
                    <StyledMap />
                </StyledMapContainer>
                <StyledItineraryList>
                    {itinerary.map(
                        ({
                            _id,
                            date,
                            hour,
                            name,
                            location,
                            description,
                            status,
                        }) => (
                            <ItineraryItem
                                key={_id}
                                id={_id}
                                date={date}
                                hour={hour}
                                name={name}
                                location={location}
                                description={description}
                                status={status}
                            />
                        ),
                    )}
                    <StyledButton secondary onClick={toggleAddItemForm}>
                        Add Next Stop
                    </StyledButton>
                </StyledItineraryList>
            </StyledWrapper>
        ) : (
            <h2>
                You don&apos;t have any trips, do you want to
                <StyledInlinEButton onClick={toggleAddItemForm}>
                    {' '}
                    ADD TRIP STOP?
                </StyledInlinEButton>
            </h2>
        )}
    </AuthUserTemplate>
);

Itinerary.propTypes = {
    itinerary: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            slug: PropTypes.string,
            date: PropTypes.oneOfType([
                PropTypes.instanceOf(Date),
                PropTypes.string,
            ]).isRequired,
            hour: PropTypes.oneOfType([
                PropTypes.instanceOf(Date),
                PropTypes.string,
            ]).isRequired,
            location: PropTypes.string.isRequired,
            description: PropTypes.string,
            status: PropTypes.string.isRequired,
        }),
    ).isRequired,
    pageContext: PropTypes.shape({
        pageType: PropTypes.oneOf(['trips', 'itinerary', 'expenses', 'todo']),
        isAddItemFormVisible: PropTypes.bool,
        toggleAddItemForm: PropTypes.func,
    }).isRequired,
};

const mapStateToProps = ({ itinerary }) => itinerary;

export default connect(mapStateToProps)(withPageContext(Itinerary));
