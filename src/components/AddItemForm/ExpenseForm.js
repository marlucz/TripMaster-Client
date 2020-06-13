import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import withPageContext from 'hoc/withPageContext';

import {
    StyledForm,
    StyledInput,
    StyledButton,
    StyledSelect,
} from 'components/AddItemForm/AddItemForm.styles';

import InputTag from 'components/InputTag/InputTag';

import { addExpenseItem as addExpenseItemAction } from 'store/expenses/expenses.actions';

const ExpenseForm = ({
    pageContext: { pageType, toggleAddItemForm },
    addExpenseItem,
}) => {
    const [tags, setTags] = useState([]);
    const [currency, setCurrency] = useState('EUR');
    const [currencies, setCurrencies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const url =
                'https://api.nbp.pl/api/exchangerates/tables/A?format=json';
            const { data } = await axios.get(url);
            setCurrencies(data[0].rates);
        };

        fetchData();
    }, []);

    const handleSetTags = tagsArr => {
        setTags(tagsArr);
    };

    const ExpenseFormSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Too short name')
            .max(30, 'Name too long')
            .required('Expense name is required'),
        value: Yup.number()
            .min(0)
            .required('Please provide expense value'),
    });

    return (
        <Formik
            initialValues={{
                name: '',
                value: '',
            }}
            validationSchema={ExpenseFormSchema}
            onSubmit={values => {
                let newValues = { ...values };
                newValues = {
                    ...newValues,
                    currency,
                    tags,
                };
                addExpenseItem(newValues);
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
                    {errors.value && touched.value ? (
                        <div>{errors.name}</div>
                    ) : null}
                    <StyledSelect
                        type="select"
                        name="currency"
                        placeholder={`${pageType} currency`}
                        onChange={e => setCurrency(e.target.value)}
                        onBlur={handleBlur}
                        value={currency}
                    >
                        {currencies.map(c => (
                            <option key={c.code} value={c.code}>
                                {c.code} - {c.currency}
                            </option>
                        ))}
                    </StyledSelect>
                    <InputTag
                        placeholder={`${pageType} tags - 3 max`}
                        getTags={handleSetTags}
                    />

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
