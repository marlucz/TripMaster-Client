import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';

import withPageContext from 'hoc/withPageContext';

import {
    StyledForm,
    StyledInput,
    StyledButton,
} from 'components/AddItemForm/AddItemForm.styles';

// import { addTrip as addTripAction } from 'store/trips/trips.actions';

const TodoForm = ({ pageContext: { pageType, toggleAddItemForm } }) => {
    const TodoFormSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Too short name')
            .max(30, 'Name too long')
            .required('Todo name is required'),
    });

    return (
        <Formik
            initialValues={{
                name: '',
            }}
            validationSchema={TodoFormSchema}
            onSubmit={values => {
                console.log(values);
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
                    <StyledButton type="submit">Add item</StyledButton>
                </StyledForm>
            )}
        </Formik>
    );
};

TodoForm.propTypes = {
    pageContext: PropTypes.shape({
        pageType: PropTypes.oneOf(['trips', 'itinerary', 'expenses', 'todo']),
        isAddItemFormVisible: PropTypes.bool,
        toggleAddItemForm: PropTypes.func,
    }).isRequired,
};

// hidden until proper actions are made

// const mapDispatchToProps = dispatch => ({
//     // addTrip: tripContent => dispatch(addTripAction(tripContent)),
// });

// export default connect(null, mapDispatchToProps)(withPageContext(TodoForm));

export default withPageContext(TodoForm);
