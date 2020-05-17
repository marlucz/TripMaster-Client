import styled from 'styled-components';

import { color } from 'theme/GlobalStyle';

export const StyledSpinnerOverlay = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledSpinnerContainer = styled.div`
    display: inline-block;
    width: 50px;
    height: 50px;
    border: 3px solid ${color.grayLight};
    border-radius: 50%;
    border-top-color: ${color.grayDark};
    animation: spin 1s ease-in-out infinite;
    -webkit-animation: spin 1s ease-in-out infinite;
    @keyframes spin {
        to {
            -webkit-transform: rotate(360deg);
        }
    }
    @-webkit-keyframes spin {
        to {
            -webkit-transform: rotate(360deg);
        }
    }
`;
