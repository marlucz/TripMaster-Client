import React from 'react';
import axios from 'axios';
import { Formik } from 'formik';
import { NavLink } from 'react-router-dom';

import Button from 'components/Button/Button';

import {
    StyledWrapper,
    StyledHeader,
    StyledForm,
    StyledTopForm,
    StyledBottomForm,
    StyledInput,
    StyledLink,
} from 'pages/Auth/Auth.styles';

const Login = () => (
    <StyledWrapper>
        <StyledHeader>TripMaster</StyledHeader>
        <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={({ email, password }) =>
                axios
                    .post('http://localhost:4000/api/user/forgot', {
                        email,
                        password,
                    })
                    .then(() => console.log('Login successful'))
                    .catch(err => console.log(err))
            }
        >
            {({ handleChange, handleBlur, values }) => (
                <StyledForm>
                    <StyledTopForm>
                        <StyledInput
                            type="email"
                            name="email"
                            placeholder="Email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.title}
                        />
                    </StyledTopForm>
                    <StyledBottomForm>
                        <Button secondary type="submit">
                            Reset your password
                        </Button>
                        <StyledLink as={NavLink} to="/auth/login">
                            Back to Login page
                        </StyledLink>
                    </StyledBottomForm>
                </StyledForm>
            )}
        </Formik>
    </StyledWrapper>
);

export default Login;
