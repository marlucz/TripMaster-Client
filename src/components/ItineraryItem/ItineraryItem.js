import React, { useState } from 'react';
import PropTypes from 'prop-types';

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

const ItineraryItem = ({
    id,
    name,
    date,
    hour,
    location,
    description,
    status,
}) => {
    const [isCollapsed, setCollapsed] = useState(true);
    const [isChevronRotated, rotateChevron] = useState(false);

    const handleChevronClick = () => {
        setCollapsed(!isCollapsed);
        rotateChevron(!isChevronRotated);
    };

    return (
        <StyledWrapper key={id}>
            <TimeContainer>
                <Paragraph>{date}</Paragraph>
                <Paragraph>{hour}</Paragraph>
            </TimeContainer>
            <StyledPinIcon status={status}>
                {status === 'done' && <PinDone />}
                {status === 'now' && <PinNow />}
                {status === 'next' && <PinNext />}
            </StyledPinIcon>
            <StyledDetails>
                <StyledHeader status={status}>{name}</StyledHeader>
                <StyledSpan>{location}</StyledSpan>
                <Chevron
                    onClick={handleChevronClick}
                    rotate={isChevronRotated ? 1 : undefined}
                />
                <StyledDescription collapsed={isCollapsed}>
                    {description}
                    <StyledEditItems />
                </StyledDescription>
            </StyledDetails>
        </StyledWrapper>
    );
};

ItineraryItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string])
        .isRequired,
    hour: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string])
        .isRequired,
    location: PropTypes.string.isRequired,
    description: PropTypes.string,
    status: PropTypes.string.isRequired,
};

ItineraryItem.defaultProps = {
    description: null,
};

export default ItineraryItem;
