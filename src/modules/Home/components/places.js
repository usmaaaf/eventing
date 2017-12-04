import React, {Component} from 'react';
import {geocodeByAddress, getLatLng} from 'react-places-autocomplete';
import Autocomplete from 'react-google-autocomplete';


export class Location extends Component {
    constructor(){
        super();
        this.state={
            address: ""
        }
    }

    componentDidMount(){
        this.setState({
            address: this.props.event.address
        })
    }
    handleFormSubmit = (place) => {
        geocodeByAddress(place.formatted_address)
            .then(results => getLatLng(results[0]))
            .then(latLng => this.props.addMap(place.formatted_address, latLng))
            .catch(error => console.error('Error', error))
    }

    handleOnChange(event){
        this.setState({
            address: event.target.value
        }) 
    }

    render() {

        return (
            <div className="locate">
                <Autocomplete
                value={this.state.address}
                onChange={(event) => this.handleOnChange(event)}
                    style={{
                    width: '90%'
                }}
                    onPlaceSelected={(place) => {
                    console.log(place);
                    this.handleFormSubmit(place);
                }}
                types={['geocode']}
                componentRestrictions={{country: "pk"}}
                    />
            </div>

        );
    }
}

