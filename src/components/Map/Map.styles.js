import styled from 'styled-components';
import { breakpoints, color } from 'theme/GlobalStyle';

export const StyledMapWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

export const StyledPopup = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50px;
    left: 30px;
    width: 300px;
    padding: 0.2em;
    background: white;
    display: none;
`;

export const StyledPinWrapper = styled.div`
    position: relative;
    &:hover ${StyledPopup} {
        display: flex;
    }

    svg {
        width: 2rem;
        height: 2rem;
        @media ${breakpoints.md} {
            width: 2.5rem;
            height: 2.5rem;
        }
    }
`;

export const StyledNavigation = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    margin: 1em;
`;

export const StyledInfo = styled.div`
    padding-left: 0.4em;
`;

export const StyledTitle = styled.h2`
    font-size: 1.2rem;
`;

export const StyledDesc = styled.p`
    font-size: 0.9em;
    color: grey;
`;

export const StyledAddress = styled.span`
    color: ${color.grayDark};
    line-height: 1.2;

    @media ${breakpoints.md} {
        font-size: 1.2rem;
    }
`;
