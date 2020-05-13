import styled from 'styled-components';
import { Form } from 'formik';

import HeroBackground from 'assets/photos/hero.jpg';
import { color, gradient, shadow } from 'theme/GlobalStyle';

export const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    background: url(${HeroBackground}) no-repeat center;
    background-size: cover;
    height: 100vh;
    text-align: center;
    z-index: 9999;
`;

export const StyledHeader = styled.h1`
    top: 5rem;
    font-size: 3.6rem;
    font-family: 'Mr Dafoe', cursive;
    color: ${color.white};
    margin: 4rem;
`;

export const StyledForm = styled(Form)`
    align-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 80%;
    width: 80%;
    max-width: 50rem;
    padding-bottom: 5rem;
`;

export const StyledTopForm = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const StyledInput = styled.input`
    display: block;
    font-family: inherit;
    font-size: 1.6rem;
    width: 100%;
    margin-top: 1rem;
    padding: 1.2rem 2rem;
    background-color: rgba(${color.grayLight}, 0.8);
    border: 1px solid ${gradient.dark};
    box-shadow: ${shadow.light};
    color: ${color.grayDark};

    &::placeholder {
        text-transform: capitalize;
    }
`;

export const StyledLink = styled.a`
    color: ${color.white};
    font-size: 1.2rem;
    text-decoration: none;
    align-self: flex-start;
    margin-top: 0.5rem;
`;

export const StyledBottomForm = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-top: auto;
`;
