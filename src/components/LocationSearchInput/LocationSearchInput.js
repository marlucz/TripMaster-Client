import React from 'react';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';

import {
    StyledWrapper,
    StyledInput,
} from 'components/LocationSearchInput/LocationSearchInput.styles';

class LocationSearchInput extends React.Component {
    state = {
        address: '',
    };

    handleChange = address => {
        this.setState({ address });
    };

    handleSelect = address => {
        this.setState({ address });
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(({ lat, lng }) => {
                // eslint-disable-next-line
                this.props.setLocation(address, lat, lng);
            })
            .catch(error => console.error('Error', error));
    };

    render() {
        const { address } = this.state;

        return (
            <PlacesAutocomplete
                value={address}
                onChange={this.handleChange}
                onSelect={this.handleSelect}
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
    }
}

export default LocationSearchInput;
