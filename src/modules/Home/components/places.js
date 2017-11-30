import React, {Component} from 'react';
import {geocodeByAddress, getLatLng} from 'react-places-autocomplete';
import Autocomplete from 'react-google-autocomplete';

export class Location extends Component {

    handleFormSubmit = (place) => {
        geocodeByAddress(place.formatted_address)
            .then(results => getLatLng(results[0]))
            .then(latLng => this.props.addMap(place.formatted_address, latLng))
            .catch(error => console.error('Error', error))
    }

    render() {

        return (
            <div>
                <Autocomplete
                    style={{
                    width: '90%'
                }}
                    onPlaceSelected={(place) => {
                    console.log(place);
                    this.handleFormSubmit(place);
                }}
                    // bounds={{}}
                    />
            </div>

        );
    }
}

