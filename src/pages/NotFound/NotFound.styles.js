import styled from 'styled-components';

import NotFoundBackground from 'assets/photos/404.webp';
import { color } from 'theme/GlobalStyle';

import Button from 'components/Button/Button';

export const StyledWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    background: url(${NotFoundBackground}) no-repeat center;
    background-size: cover;
    padding-bottom: 10vh;
    z-index: 10;
`;

export const Status = styled.h2`
    padding-top: 8vh;
    width: 80%;
    max-width: 50rem;
    font-size: 5rem;
    margin-bottom: 1rem;
    color: ${color.white};
`;

export const Message = styled.p`
    color: ${color.white};
    margin-top: auto;
    margin-bottom: 1rem;
    padding: 1.5rem 2rem;
    font-size: 2rem;
`;

export const StyledButton = styled(Button)`
    text-decoration: none;
`;
