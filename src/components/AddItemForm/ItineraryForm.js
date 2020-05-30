import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';

import withPageContext from 'hoc/withPageContext';

import {
    StyledForm,
    StyledInput,
    StyledTextArea,
    StyledDateInput,
    StyledButton,
    StyledLocationSearchInput,
} from 'components/AddItemForm/AddItemForm.styles';

import { addItineraryItem as addItineraryItemAction } from 'store/itinerary/itinerary.actions';

const ItineraryForm = ({
    pageContext: { pageType, toggleAddItemForm },
    addItineraryItem,
}) => {
    const [location, setLocation] = useState({});

    const handleLocationSelect = locObj => {
        setLocation(locObj);
    };
    const AddItinerarySchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Too short name')
            .max(30, 'Name too long')
            .required('Itinerary name is required'),
        description: Yup.string()
            .min(2, 'Too short description')
            .max(300, 'Description too long'),
        startDate: Yup.date()
            .min(new Date(Date.now()))
            .required('Please provide start date and hour'),
    });

    return (
        <Formik
            initialValues={{
                name: '',
                description: '',
                startDate: '',
            }}
            validationSchema={AddItinerarySchema}
            onSubmit={values => {
                let newValues = { ...values };
                newValues = {
                    ...newValues,
                    ...location,
                };
                addItineraryItem(newValues);
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
                    <StyledTextArea
                        as="textarea"
                        name="description"
                        placeholder={`${pageType} description`}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.description}
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
                        type="datetime-local"
                        name="startDate"
                        placeholder="Start date"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.startDate}
                    />
                    {errors.startDate && touched.startDate ? (
                        <div>{errors.startDate}</div>
                    ) : null}
                    <StyledButton type="submit">Add item</StyledButton>
                </StyledForm>
            )}
        </Formik>
    );
};

ItineraryForm.propTypes = {
    pageContext: PropTypes.shape({
        pageType: PropTypes.oneOf(['trips', 'itinerary', 'expenses', 'todo']),
        isAddItemFormVisible: PropTypes.bool,
        toggleAddItemForm: PropTypes.func,
    }).isRequired,
};

const mapDispatchToProps = dispatch => ({
    addItineraryItem: tripContent =>
        dispatch(addItineraryItemAction(tripContent)),
});

export default connect(
    null,
    mapDispatchToProps,
)(withPageContext(ItineraryForm));
