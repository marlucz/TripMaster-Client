import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
    StyledWrapper,
    StyledDetails,
    StyledPinIcon,
    StyledHeader,
    StyledDescription,
    StyledSpan,
    StyledEditItems,
} from 'components/ItineraryItem/ItineraryItem.styles';

import { ReactComponent as PinDone } from 'assets/icons/pin-done.svg';
import { ReactComponent as PinNow } from 'assets/icons/pin-now.svg';
import { ReactComponent as PinNext } from 'assets/icons/pin-next.svg';
import TimeContainer from 'components/TimeContainer/TimeContainer';
import Paragraph from 'components/Paragraph/Paragraph';
import Chevron from 'components/Chevron/Chevron';

import { removeItineraryItem as removeItineraryItemAction } from 'store/itinerary/itinerary.actions';

const ItineraryItem = ({
    id,
    name,
    startDate,
    location,
    description,
    status,
    slug,
    removeItineraryItem,
}) => {
    const [isCollapsed, setCollapsed] = useState(true);
    const [isChevronRotated, rotateChevron] = useState(false);

    const startDay = new Date(startDate).toLocaleDateString();
    const startTime = new Date(startDate).toLocaleTimeString();

    const handleChevronClick = () => {
        setCollapsed(!isCollapsed);
        rotateChevron(!isChevronRotated);
    };

    return (
        <StyledWrapper key={id}>
            <TimeContainer>
                <Paragraph>{startDay}</Paragraph>
                <Paragraph>{startTime}</Paragraph>
            </TimeContainer>
            <StyledPinIcon status={status}>
                {status === 'done' && <PinDone />}
                {status === 'now' && <PinNow />}
                {status === 'next' && <PinNext />}
            </StyledPinIcon>
            <StyledDetails>
                <StyledHeader status={status}>{name}</StyledHeader>
                <StyledSpan>{location.address}</StyledSpan>
                <Chevron
                    onClick={handleChevronClick}
                    rotate={isChevronRotated ? 1 : undefined}
                />
                <StyledDescription collapsed={isCollapsed}>
                    {description}
                    <StyledEditItems
                        handleClickRemove={() => removeItineraryItem(slug, id)}
                    />
                </StyledDescription>
            </StyledDetails>
        </StyledWrapper>
    );
};

ItineraryItem.propTypes = {
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    name: PropTypes.string.isRequired,
    startDate: PropTypes.oneOfType([
        PropTypes.instanceOf(Date),
        PropTypes.string,
    ]).isRequired,
    location: PropTypes.shape({
        address: PropTypes.string,
        lat: PropTypes.number,
        lng: PropTypes.number,
    }).isRequired,
    description: PropTypes.string,
    status: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
};

ItineraryItem.defaultProps = {
    description: null,
};

const mapDispatchToProps = dispatch => ({
    removeItineraryItem: (slug, id) =>
        dispatch(removeItineraryItemAction(slug, id)),
});

export default connect(null, mapDispatchToProps)(ItineraryItem);
