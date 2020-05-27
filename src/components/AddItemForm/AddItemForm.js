import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';

import withPageContext from 'hoc/withPageContext';

import PageHeader from 'components/PageHeader/PageHeader';
import {
    StyledWrapper,
    StyledForm,
    StyledInput,
    StyledDateInput,
    StyledButton,
    StyledLocationSearchInput,
} from 'components/AddItemForm/AddItemForm.styles';

import { addTrip as addTripAction } from 'store/trips/trips.actions';

const AddItemForm = ({
    pageContext: { pageType, toggleAddItemForm },
    addTrip,
}) => {
    const [location, setLocation] = useState({});

    const handleLocationSelect = locObj => {
        setLocation(locObj);
    };
    const AddTripSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Too short name')
            .max(30, 'Name too long')
            .required('Trip name is required'),
        startDate: Yup.date()
            .min(new Date(Date.now()))
            .required('Please provide start date'),
        endDate: Yup.date().min(Yup.ref('startDate')),
    });

    return (
        <StyledWrapper>
            <PageHeader header={pageType} subHeader="Add new" />
            <Formik
                initialValues={{
                    name: '',
                    startDate: '',
                    endDate: '',
                }}
                validationSchema={AddTripSchema}
                onSubmit={values => {
                    let newValues = { ...values };
                    newValues = {
                        ...newValues,
                        ...location,
                    };
                    addTrip(newValues);
                    toggleAddItemForm();
                }}
            >
                {({ values, handleChange, handleBlur, errors, touched }) => (
                    <StyledForm>
                        <StyledInput
                            type="text"
                            name="name"
                            placeholder={`${pageType} title`}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                        />
                        {errors.name && touched.name ? (
                            <div>{errors.name}</div>
                        ) : null}
                        <StyledLocationSearchInput
                            name="location"
                            setLocation={handleLocationSelect}
                            onChange={() => values.location}
                            onBlur={handleBlur}
                            value={values.location}
                        />
                        {errors.location && touched.location ? (
                            <div>{errors.location}</div>
                        ) : null}

                        <StyledDateInput
                            type="date"
                            name="startDate"
                            placeholder="Start date"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.startDate}
                        />
                        {errors.startDate && touched.startDate ? (
                            <div>{errors.startDate}</div>
                        ) : null}
                        <StyledDateInput
                            type="date"
                            name="endDate"
                            placeholder="End date"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.endDate}
                        />
                        {errors.endDate && touched.endDate ? (
                            <div>{errors.endDate}</div>
                        ) : null}
                        <StyledButton type="submit">Add item</StyledButton>
                    </StyledForm>
                )}
            </Formik>
        </StyledWrapper>
    );
};

AddItemForm.propTypes = {
    pageContext: PropTypes.shape({
        pageType: PropTypes.oneOf(['trips', 'itinerary', 'expenses', 'todo']),
        isAddItemFormVisible: PropTypes.bool,
        toggleAddItemForm: PropTypes.func,
    }).isRequired,
};

const mapDispatchToProps = dispatch => ({
    addTrip: tripContent => dispatch(addTripAction(tripContent)),
});

export default connect(null, mapDispatchToProps)(withPageContext(AddItemForm));
