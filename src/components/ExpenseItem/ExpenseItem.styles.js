import styled from 'styled-components';

import { color, gradient, shadow, breakpoints } from 'theme/GlobalStyle';

import TimeContainer from 'components/TimeContainer/TimeContainer';

export const StyledWrapper = styled.li`
    display: grid;
    grid-template-columns: 25% 1fr min-content;
    padding: 0.5rem 0;
    width: 100%;
    background-color: ${color.white};
    border: 1px solid ${gradient.dark};
    box-shadow: ${shadow.light};

    @media ${breakpoints.md} {
        padding: 0.5rem;
    }

    @media ${breakpoints.ld} {
        grid-template-columns: 15% 1fr min-content;
    }
`;

export const StyledDetails = styled.div`
    padding-left: 1rem;
    color: ${color.secondary};

    @media ${breakpoints.md} {
        padding-left: 2rem;

        p,
        span {
            font-size: 2rem;
        }
    }

    @media ${breakpoints.ld} {
        display: grid;
        grid-template-columns: 1fr 1fr 15%;
        align-items: center;
        direction: rtl;
    }
`;

export const StyledTimeContainer = styled(TimeContainer)`
    justify-content: center;
`;

export const StyledHeader = styled.h3`
    font-size: 1.6rem;

    @media ${breakpoints.md} {
        margin-bottom: 0.3rem;
    }

    @media ${breakpoints.ld} {
        margin: 0;
        margin-right: 3rem;
    }
`;

export const StyledTags = styled.ul`
    display: flex;
    list-style: none;
    font-size: 1.2rem;

    @media (min-width: 360px) {
        font-size: 1.4rem;
    }

    @media ${breakpoints.md} {
        font-size: 1.8rem;
        justify-self: flex-end;
    }

    li {
        display: block;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${color.grayLight};
        padding: 0 1rem;
        margin-right: 0.5rem;
        background: ${color.grayDark};
        border-radius: 1rem;
    }
`;

export const StyledValue = styled.p`
    span {
        display: inline-block;
    }

    @media ${breakpoints.ld} {
        margin-right: 2rem;
    }
`;
