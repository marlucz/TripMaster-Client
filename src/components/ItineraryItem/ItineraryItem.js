import React, { useState } from 'react';
import { connect } from 'react-redux';

import {
    StyledWrapper,
    StyledDetails,
    StyledHeader,
    StyledDescription,
    StyledSpan,
    StyledEditItems,
} from 'components/ItineraryItem/ItineraryItem.styles';

import TimeContainer from 'components/TimeContainer/TimeContainer';
import Paragraph from 'components/Paragraph/Paragraph';
import Chevron from 'components/Chevron/Chevron';
import PinIcon from 'components/PinIcon/PinIcon';

import { removeItineraryItem as removeItineraryItemAction } from 'store/itinerary/itinerary.actions';

import { ItineraryItemPropTypes } from 'utils/propTypes';

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
            <PinIcon status={status} inList />
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

ItineraryItem.propTypes = ItineraryItemPropTypes.isRequired;

ItineraryItem.defaultProps = {
    description: null,
};

const mapDispatchToProps = dispatch => ({
    removeItineraryItem: (slug, id) =>
        dispatch(removeItineraryItemAction(slug, id)),
});

export default connect(null, mapDispatchToProps)(ItineraryItem);
