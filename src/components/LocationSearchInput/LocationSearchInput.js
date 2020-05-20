import React, { useState } from 'react';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';

import {
    StyledWrapper,
    StyledInput,
} from 'components/LocationSearchInput/LocationSearchInput.styles';

const LocationSearchInput = ({ setLocation }) => {
    const [address, setAddress] = useState('');
    const [error, setError] = useState(null);

    const handleChange = inputAddress => {
        setError(null);
        setAddress(inputAddress);
    };

    const onError = (status, clearSuggestions) => {
        setError(`${status}: Please try again`);
        clearSuggestions();
    };

    const handleSelect = inputAddress => {
        setAddress(inputAddress);
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(({ lat, lng }) => {
                // eslint-disable-next-line
                setLocation(address, lat, lng);
            })
            .catch(err => {
                setError(`${err}: Please try again`);
            });
    };

    return (
        <PlacesAutocomplete
            value={address}
            onChange={handleChange}
            onSelect={handleSelect}
            onError={onError}
            debounce={500}
        >
            {({
                getInputProps,
                suggestions,
                getSuggestionItemProps,
                loading,
            }) => (
                <StyledWrapper>
                    <StyledInput
                        {...getInputProps({
                            placeholder: 'Location',
                            className: 'location-search-input',
                        })}
                    />
                    <div className="autocomplete-dropdown-container">
                        {error && <div>{error}</div>}
                        {loading && <div>Loading...</div>}
                        {suggestions.map(suggestion => {
                            const className = suggestion.active
                                ? 'suggestion-item--active'
                                : 'suggestion-item';
                            // inline style for demonstration purpose
                            const style = suggestion.active
                                ? {
                                      backgroundColor: '#fafafa',
                                      cursor: 'pointer',
                                  }
                                : {
                                      backgroundColor: '#ffffff',
                                      cursor: 'pointer',
                                  };
                            return (
                                <div
                                    {...getSuggestionItemProps(suggestion, {
                                        className,
                                        style,
                                    })}
                                >
                                    <span>{suggestion.description}</span>
                                </div>
                            );
                        })}
                    </div>
                </StyledWrapper>
            )}
        </PlacesAutocomplete>
    );
};

export default LocationSearchInput;
