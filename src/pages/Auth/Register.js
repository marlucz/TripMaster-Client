import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Formik, Form } from 'formik';
import { NavLink } from 'react-router-dom';

import Button from 'components/Button/Button';

import HeroBackground from 'assets/photos/hero.jpg';
import { color, gradient, shadow } from 'theme/GlobalStyle';

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    background: url(${HeroBackground}) no-repeat center;
    background-size: cover;
    height: 100vh;
    text-align: center;
    z-index: 9999;
`;

const StyledHeader = styled.h1`
    top: 5rem;
    font-size: 3.6rem;
    font-family: 'Mr Dafoe', cursive;
    color: ${color.white};
    margin: 4rem;
`;

const StyledForm = styled(Form)`
    align-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 80%;
    width: 80%;
    max-width: 50rem;
    padding-bottom: 5rem;
`;

const StyledTopForm = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const StyledInput = styled.input`
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

const StyledLink = styled.a`
    color: ${color.white};
    font-size: 1.2rem;
    text-decoration: none;
    align-self: flex-start;
    margin-top: 0.5rem;
`;

const StyledBottomForm = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-top: auto;
`;

const Register = () => (
    <StyledWrapper>
        <StyledHeader>TripMaster</StyledHeader>
        <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={({ email, password }) =>
                axios
                    .post('http://localhost:3000/api/user/register', {
                        email,
                        password,
                    })
                    .then(() => console.log('Register successful'))
                    .catch(err => console.log(err))
            }
        >
            {({ handleChange, handleBlur, values }) => (
                <StyledForm>
                    <StyledTopForm>
                        <StyledInput
                            type="text"
                            name="name"
                            placeholder="Username"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.title}
                        />
                        <StyledInput
                            type="email"
                            name="email"
                            placeholder="Email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.title}
                        />
                        <StyledInput
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.title}
                        />
                        <StyledInput
                            type="password"
                            name="passwordConfirm"
                            placeholder="Confirm your password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.title}
                        />
                    </StyledTopForm>
                    <StyledBottomForm>
                        <Button secondary type="submit">
                            Sign In
                        </Button>
                        <StyledLink as={NavLink} to="/login">
                            Already have an account?
                        </StyledLink>
                    </StyledBottomForm>
                </StyledForm>
            )}
        </Formik>
    </StyledWrapper>
);

export default Register;
