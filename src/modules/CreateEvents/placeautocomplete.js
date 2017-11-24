import React, {Component} from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import {geocodeByAddress, getLatLng} from 'react-places-autocomplete';

export class Location extends Component {
    constructor() {
        super();
        this.state = {
            address: '',
            latLng: []
        }
        this.onChange = (address) => this.setState({address})
    }

    stateSet(latLng) {
        this.setState({latLng: latLng});
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)

        geocodeByAddress(this.state.address)
            .then(results => getLatLng(results[0]))
            .then(latLng => this.stateSet(latLng))
            .catch(error => console.error('Error', error))
    }

    render() {
        const inputProps = {
            value: this.state.address,
            onChange: this.onChange,
            type: 'search',
            placeholder: 'Enter the Location of your event',
            autoFocus: true
        }

        //   const options = {     location: new google.maps.LatLng(24.8614622,
        // 67.00993879999999),     radius: 5000,     types: ['address']   }

        const AutocompleteItem = ({formattedSuggestion}) => (
            <div>
                <strong>{formattedSuggestion.mainText}</strong>{' '}
                <small>{formattedSuggestion.secondaryText}</small>
            </div>
        )

        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <PlacesAutocomplete
                        inputProps={inputProps}
                        autocompleteItem={AutocompleteItem}/>
                    <button type="submit">Submit</button>
                </form>
            </div>

        );
    }
}
