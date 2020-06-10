import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';

import withPageContext from 'hoc/withPageContext';

import {
    StyledForm,
    StyledInput,
    StyledButton,
} from 'components/AddItemForm/AddItemForm.styles';

import InputTag from 'components/InputTag/InputTag';

import { addExpenseItem as addExpenseItemAction } from 'store/expenses/expenses.actions';

const ExpenseForm = ({
    pageContext: { pageType, toggleAddItemForm },
    addExpenseItem,
}) => {
    const ExpenseFormSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Too short name')
            .max(30, 'Name too long')
            .required('Expense name is required'),
        value: Yup.number()
            .min(0)
            .required('Please provide expense value'),
        currency: Yup.string().required('Please provide currency'),
    });

    return (
        <Formik
            initialValues={{
                name: '',
                value: '',
                tags: [],
                currency: '',
            }}
            validationSchema={ExpenseFormSchema}
            onSubmit={values => {
                addExpenseItem(values);
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
                    <StyledInput
                        type="number"
                        name="value"
                        placeholder={`${pageType} value`}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.value}
                    />
                    <InputTag placeholder={`${pageType} tags`} />
                    {errors.name && touched.name ? (
                        <div>{errors.name}</div>
                    ) : null}
                    <StyledInput
                        type="text"
                        name="currency"
                        placeholder={`${pageType} currency`}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.currency}
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

ExpenseForm.propTypes = {
    pageContext: PropTypes.shape({
        pageType: PropTypes.oneOf(['trips', 'itinerary', 'expenses', 'todo']),
        isAddItemFormVisible: PropTypes.bool,
        toggleAddItemForm: PropTypes.func,
    }).isRequired,
};

// hidden until proper actions are made

const mapDispatchToProps = dispatch => ({
    addExpenseItem: expenseItem => dispatch(addExpenseItemAction(expenseItem)),
});

export default connect(null, mapDispatchToProps)(withPageContext(ExpenseForm));
