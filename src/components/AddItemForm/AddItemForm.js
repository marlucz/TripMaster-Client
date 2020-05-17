import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Formik } from 'formik';

import withPageContext from 'hoc/withPageContext';

import PageHeader from 'components/PageHeader/PageHeader';
import {
    StyledWrapper,
    StyledForm,
    StyledInput,
    StyledButton,
    StyledLocationSearchInput,
    StyledRowInputsWrapper,
} from 'components/AddItemForm/AddItemForm.styles';

import { addTrip as addTripAction } from 'store/trips/trips.actions';

class AddItemForm extends Component {
    state = {
        location: '',
        latitude: '',
        longitude: '',
    };

    render() {
        const {
            pageContext: { pageType, toggleAddItemForm },
            addTrip,
        } = this.props;

        const { location, latitude, longitude } = this.state;

        const handleLocationSelect = (loc, lat, lng) => {
            this.setState({ location: loc, latitude: lat, longitude: lng });
        };

        return (
            <StyledWrapper>
                <PageHeader header={pageType} subHeader="Add new" />
                <Formik
                    initialValues={{
                        name: '',
                        location: '',
                        lat: '',
                        lng: '',
                        startDate: '',
                        endDate: '',
                    }}
                    onSubmit={values => {
                        let newValues = { ...values };
                        newValues = {
                            ...newValues,
                            location,
                            lat: latitude,
                            lng: longitude,
                        };
                        addTrip(newValues);
                        toggleAddItemForm();
                    }}
                >
                    {({ values, handleChange, handleBlur }) => (
                        <StyledForm>
                            <StyledInput
                                type="text"
                                name="name"
                                placeholder={`${pageType} title`}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                            />
                            <StyledLocationSearchInput
                                setLocation={handleLocationSelect}
                                onChange={() => values.location}
                                onBlur={handleBlur}
                                value={values.location}
                            />
                            <StyledRowInputsWrapper>
                                <StyledInput
                                    type="number"
                                    name="lat"
                                    placeholder="latitude"
                                    value={latitude}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    touched
                                    dirty
                                />
                                <StyledInput
                                    type="number"
                                    name="lng"
                                    placeholder="longitude"
                                    value={longitude}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    touched
                                />
                            </StyledRowInputsWrapper>
                            <StyledInput
                                type="date"
                                name="startDate"
                                placeholder="Start date"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.startDate}
                            />
                            <StyledInput
                                type="date"
                                name="endDate"
                                placeholder="End date"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.endDate}
                            />
                            <StyledButton type="submit">Add item</StyledButton>
                        </StyledForm>
                    )}
                </Formik>
            </StyledWrapper>
        );
    }
}

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
