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
