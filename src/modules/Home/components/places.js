import React, {Component} from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import {geocodeByAddress, getLatLng} from 'react-places-autocomplete';


export class Location extends Component {
    constructor() {
        super();
        this.state = {
            address: "",
            latLng: ""
        }
        this.onChange = (address) => this.setState({address})
    }
componentDidMount(){
    this.setState({
        address: this.props.event.address
    })}

    stateSet(latLng) {
        this.setState({latLng: latLng});
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)

    geocodeByAddress(this.state.address)
            .then(results => getLatLng(results[0]))
            .then(latLng => this.props.addMap(this.state.address, latLng))
            .catch(error => console.error('Error', error))
        
    }

    
    render() {
        console.log(this.state);
        const inputProps = {
            value: this.state.address,
            onChange: this.onChange,
            type: 'search',
            autoFocus: true
        }

        const AutocompleteItem = ({formattedSuggestion}) => (
            <div>
                <strong>{formattedSuggestion.mainText}</strong>{' '}
                <small>{formattedSuggestion.secondaryText}</small>
            </div>
        )

        return (
            <div>
                <form>
                    <PlacesAutocomplete 
                        inputProps={inputProps}
                        autocompleteItem={AutocompleteItem}/>
                    <button type="submit" onClick={this.handleFormSubmit}>Submit</button>
                </form>
            </div>

        );
    }
}
