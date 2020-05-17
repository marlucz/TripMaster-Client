import React from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import { NavLink, Redirect } from 'react-router-dom';

import { authenticate as authenticateAction } from 'store/user/user.actions';

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

const Login = ({ currentUser, authenticate }) => (
    <StyledWrapper>
        <StyledHeader>TripMaster</StyledHeader>
        <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={({ email, password }) => {
                authenticate(email, password);
            }}
        >
            {({ handleChange, handleBlur, values }) => {
                if (currentUser) {
                    return <Redirect to="/trips" />;
                }
                return (
                    <StyledForm>
                        <StyledTopForm>
                            <StyledInput
                                type="email"
                                name="email"
                                placeholder="Login"
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
                            <StyledLink as={NavLink} to="/auth/forgot">
                                Forgot you password?
                            </StyledLink>
                        </StyledTopForm>
                        <StyledBottomForm>
                            <Button secondary type="submit">
                                Sign In
                            </Button>
                            <StyledLink as={NavLink} to="/auth/register">
                                Don&apos;t have an account?
                            </StyledLink>
                        </StyledBottomForm>
                    </StyledForm>
                );
            }}
        </Formik>
    </StyledWrapper>
);

const mapStateToProps = ({ user: { currentUser = null } }) => ({ currentUser });

const mapDispatchToProps = dispatch => ({
    authenticate: (email, password) =>
        dispatch(authenticateAction(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
