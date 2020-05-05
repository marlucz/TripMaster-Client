import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import {
    breakpoints,
    color,
    gradient,
    shadow,
    pinColor,
} from 'theme/GlobalStyle';
import { ReactComponent as PinDone } from 'assets/icons/pin-done.svg';
import { ReactComponent as PinNow } from 'assets/icons/pin-now.svg';
import { ReactComponent as PinNext } from 'assets/icons/pin-next.svg';
import { ReactComponent as Chevron } from 'assets/icons/chevron.svg';
import TimeContainer from 'components/TimeContainer/TimeContainer';
import Paragraph from 'components/Paragraph/Paragraph';
import EditItems from 'components/EditItems/EditItems';

const StyledWrapper = styled.div`
    display: grid;
    grid-template-columns: 25% min-content 1fr;
    padding: 0.5rem 0;
    width: 100%;
    background-color: ${color.white};
    border: 1px solid ${gradient.dark};
    box-shadow: ${shadow.light};

    @media ${breakpoints.md} {
        padding-bottom: 1.5rem;
        grid-template-columns: 18% min-content 1fr;
    }

    @media screen and (min-width: 1024px) and (orientation: landscape),
        (min-width: 1200px) {
        padding-bottom: 1rem;
        padding-left: 1rem;
        grid-template-columns: 25% min-content 1fr;
    }
`;

const StyledDetails = styled.div`
    position: relative;

    @media ${breakpoints.md} {
        padding-top: 0.3rem;
    }
`;

const StyledPinIcon = styled.div`
    justify-self: center;
    position: relative;
    padding: 0;
    padding-top: 1rem;
    margin: 0 1rem;
    height: 100%;
    display: flex;

    @media ${breakpoints.md} {
        margin: 0 2rem;
    }

    @media screen and (min-width: 1024px) and (orientation: landscape),
        (min-width: 1200px) {
        margin: 0 5px;
    }

    &:before {
        content: '';
        position: absolute;
        width: 2px;
        top: 3rem;
        left: calc(50% - 1px);
        height: 100%;
        background-color: ${({ status }) => pinColor[status]};

        @media ${breakpoints.md} {
            width: 1px;
            top: 3.2rem;
            left: calc(50% - 1px);
        }
    }

    svg {
        width: 2rem;
        height: 2rem;
        z-index: 1;
        background-color: ${color.white};

        @media ${breakpoints.md} {
            width: 2.5rem;
            height: 2.5rem;
        }

        path {
            ${({ status }) =>
                status &&
                css`
                    fill: ${pinColor[status]};
                `}
        }
    }
`;

const StyledHeader = styled.h3`
    font-size: 1.6rem;
    color: ${({ status }) => pinColor[status]};

    @media ${breakpoints.md} {
        margin-bottom: 0.3rem;
    }
`;

const StyledDescription = styled.div`
    max-height: 0;
    opacity: 0;
    transition: all 0.35s 0.2s linear;
    overflow: hidden;

    ${({ collapsed }) =>
        !collapsed &&
        css`
            max-height: 100%;
            opacity: 1;
            transition: all 0.35s 0.2s linear;
        `}
`;

const StyledChevron = styled(Chevron)`
    position: absolute;
    top: 0;
    right: 2.5rem;
    width: 2rem;
    height: 2rem;

    @media ${breakpoints.md} {
        padding-top: 0.5rem;
    }

    &:hover {
        cursor: pointer;
    }

    ${({ rotate }) => (rotate ? `transform: rotate(180deg)` : ``)}
`;

const StyledSpan = styled.span`
    color: ${color.grayDark};
    line-height: 1.6;

    @media ${breakpoints.md} {
        font-size: 1.6rem;
    }
`;

const StyledEditItems = styled(EditItems)`
    flex-direction: row;
    justify-content: flex-end;
`;

const ItineraryItem = ({ date, hour, name, location, description, status }) => {
    const [isCollapsed, setCollapsed] = useState(true);
    const [isChevronRotated, changeChevronRotation] = useState(false);

    const handleChevronClick = () => {
        setCollapsed(!isCollapsed);
        changeChevronRotation(!isChevronRotated);
    };

    return (
        <StyledWrapper>
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
                <StyledChevron
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
    date: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string])
        .isRequired,
    hour: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string])
        .isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    description: PropTypes.string,
    status: PropTypes.string.isRequired,
};

ItineraryItem.defaultProps = {
    description: null,
};

export default ItineraryItem;
