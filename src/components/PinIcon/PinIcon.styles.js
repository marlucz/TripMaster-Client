import styled, { css } from 'styled-components';

import { breakpoints, pinColor, color } from 'theme/GlobalStyle';

export const StyledPinIcon = styled.div`
    ${({ inList }) =>
        inList &&
        css`
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
        `}

    svg {
        width: 2rem;
        height: 2rem;
        z-index: 1;
        background-color: ${({ inList }) =>
            inList ? color.white : 'transparent'};

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
