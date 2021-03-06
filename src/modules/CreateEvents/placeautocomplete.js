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
            <div className="locate">
                <Autocomplete
               
                    style={{
                    width: '90%',
                    zIndex: "22"
                }}
                    onPlaceSelected={(place) => {
                    
                    this.handleFormSubmit(place);
                }}
                types={['geocode']}
                componentRestrictions={{country: "pk"}}
                    />
            </div>

        );
    }
}
