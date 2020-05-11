import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Formik } from 'formik';

import withPageContext from 'hoc/withPageContext';

import Button from 'components/Button/Button';
import PageHeader from 'components/PageHeader/PageHeader';
import LocationSearchInput from 'components/LocationSearchInput/LocationSearchInput';

import { addTrip as addTripAction } from 'store/trips/trips.actions';

import { color, gradient, shadow } from 'theme/GlobalStyle';

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding-top: 2rem;
`;

const StyledForm = styled.form`
    align-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    max-width: 50rem;
`;

const StyledInput = styled.input`
    display: block;
    font-family: inherit;
    font-size: 1.6rem;
    width: 100%;
    margin-top: 1rem;
    padding: 1.2rem 2rem;
    background-color: rgba(${color.grayLight}, 0.8);
    border: 1px solid ${gradient.dark};
    box-shadow: ${shadow.light};
    border: none;
    color: ${color.grayDark};

    &::placeholder {
        text-transform: capitalize;
    }
`;

const StyledButton = styled(Button)`
    margin: 1rem auto;
    margin-top: auto;
    z-index: 10;
    flex-shrink: 0;

    &:hover {
        transform: none;
        cursor: pointer;
    }
`;

const StyledLocationSearchInput = styled(LocationSearchInput)`
    width: 100%;
`;

const StyledRowInputsWrapper = styled.div`
    display: flex;
    width: 100%;
`;

class AddItemForm extends Component {
    state = {
        lat: null,
        lng: null,
    };

    render() {
        const {
            pageContext: { pageType, toggleAddItemForm },
            addTrip,
        } = this.props;

        const { lat, lng } = this.state;

        const handleFormSubmit = () => {
            // eslint-disable-next-line
            console.log(addTrip);
            toggleAddItemForm();
        };

        const handleLocationSelect = (latInput, lngInput) => {
            this.setState({ lat: latInput, lng: lngInput });
        };

        return (
            <StyledWrapper>
                <PageHeader header={pageType} subHeader="Add new" />
                <Formik
                    initialValue={{
                        name: '',
                        location: '',
                        lat: null,
                        lng: null,
                        startDate: null,
                        endDate: null,
                    }}
                    onSubmit={values => {
                        console.log(values);
                    }}
                >
                    <StyledForm onSubmit={handleFormSubmit}>
                        <StyledInput
                            type="text"
                            name="name"
                            placeholder={`${pageType} title`}
                        />
                        <StyledLocationSearchInput
                            setLatLng={handleLocationSelect}
                        />
                        <StyledRowInputsWrapper>
                            <StyledInput
                                type="number"
                                name="lat"
                                placeholder="latitude"
                                value={lat || 'Latitude'}
                                readOnly
                            />
                            <StyledInput
                                type="number"
                                name="lng"
                                placeholder="longitude"
                                value={lng || 'Longitude'}
                                readOnly
                            />
                        </StyledRowInputsWrapper>
                        <StyledInput
                            type="date"
                            name="startDate"
                            placeholder="Start date"
                        />
                        <StyledInput
                            type="date"
                            name="endDate"
                            placeholder="End date"
                        />
                        <StyledButton type="submit">Add item</StyledButton>
                    </StyledForm>
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
