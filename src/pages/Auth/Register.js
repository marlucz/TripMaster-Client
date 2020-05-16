import React from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import { NavLink, Redirect } from 'react-router-dom';

import { register as registerAction } from 'store/user/user.actions';

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

const Register = ({ currentUser, register }) => (
    <StyledWrapper>
        <StyledHeader>TripMaster</StyledHeader>
        <Formik
            initialValues={{
                name: '',
                email: '',
                password: '',
                passwordConfirm: '',
            }}
            onSubmit={({ name, email, password, passwordConfirm }) =>
                register(name, email, password, passwordConfirm)
            }
        >
            {({ handleChange, handleBlur, values }) => {
                if (currentUser) {
                    return <Redirect to="/trips" />;
                }

                return (
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
                                Sign Up
                            </Button>
                            <StyledLink as={NavLink} to="/login">
                                Already have an account?
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
    register: (name, email, password, passwordConfirm) =>
        dispatch(registerAction(name, email, password, passwordConfirm)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
