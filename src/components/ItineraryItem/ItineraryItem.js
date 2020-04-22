import React from 'react';
import styled, { css } from 'styled-components';

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

const StyledWrapper = styled.li`
    display: grid;
    grid-template-columns: 25% min-content 1fr;
    padding: 0.5rem 0;
    width: 100%;
    max-width: 37.5rem;
    background-color: ${color.white};
    border: 1px solid ${gradient.dark};
    border-radius: 1rem;
    box-shadow: ${shadow.light};

    @media ${breakpoints.md} {
        padding-bottom: 1.5rem;
        grid-template-columns: 18% min-content 1fr;
    }

    @media screen and (min-width: 1024px) and (orientation: landscape),
        (min-width: 1200px) {
        padding-bottom: 1rem;
        grid-template-columns: 22% min-content 1fr;
    }
`;

const StyledTime = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;

    @media screen and (min-width: 1024px) and (orientation: landscape),
        (min-width: 1200px) {
        align-items: flex-start;
    }
`;

const StyledParagraph = styled.p`
    font-size: 1.2rem;
    word-wrap: normal;
    margin: 3px 0;

    @media ${breakpoints.md} {
        font-size: 1.6rem;
    }

    &:first-child {
        font-weight: bold;
    }
`;

const StyledItineraryDetails = styled.div`
    position: relative;
`;

const StyledPinIcon = styled.div`
    justify-self: center;
    position: relative;
    padding: 0 5px;
    height: 100%;
    padding-top: 2.5rem;
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
        top: calc(4.5rem);
        left: calc(50% - 1px);
        height: 100%;
        width: 2px;
        background-color: ${({ status }) => pinColor[status]};
    }

    svg {
        width: 2rem;
        height: 2rem;
        z-index: 1;
        background-color: ${color.white};

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
`;

const StyledDescription = styled.div`
    max-height: 100%;
    opacity: 1;
    transition: all 0.35s 0.2s linear;
    overflow: hidden;
`;

const StyledChevron = styled(Chevron)`
    position: absolute;
    top: 0;
    right: 2.5rem;
    width: 2rem;
    height: 2rem;

    &:hover {
        cursor: pointer;
    }
`;

const StyledSpan = styled.span`
    color: ${color.grayDark};
    line-height: 1.6;

    @media ${breakpoints.md} {
        font-size: 1.6rem;
    }
`;

const ItineraryItem = ({ date, hour, name, location, description, status }) => (
    <StyledWrapper>
        <StyledTime>
            <StyledParagraph>{date}</StyledParagraph>
            <StyledParagraph>{hour}</StyledParagraph>
        </StyledTime>
        <StyledPinIcon status={status}>
            {status === 'done' && <PinDone />}
            {status === 'now' && <PinNow />}
            {status === 'next' && <PinNext />}
        </StyledPinIcon>
        <StyledItineraryDetails>
            <StyledHeader status={status}>{name}</StyledHeader>
            <StyledSpan>{location}</StyledSpan>
            <StyledChevron />
            <StyledDescription>{description}</StyledDescription>
        </StyledItineraryDetails>
    </StyledWrapper>
);

export default ItineraryItem;
