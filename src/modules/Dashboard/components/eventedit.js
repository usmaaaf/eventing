import React, {Component} from 'react';
import DateTimePicker from 'material-ui-datetimepicker';
import DatePickerDialog from 'material-ui/DatePicker/DatePickerDialog'
import TimePickerDialog from 'material-ui/TimePicker/TimePickerDialog';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import {currentUser} from '../../../data/users'
import {Auth} from '../../../services/authentication';
import {Event} from '../../../services/eventing';
import moment from 'moment';
import {Location} from '../../Home/components/places';

/**
 * Dialogs can be nested. This example opens a Date Picker from within a Dialog.
 */
export class EventEdit extends Component {
    constructor() {
        super();
        this.state = {
            open: false,    
            id: '',
            title: '',
            catogery: '',
            description: '',
            start: '',
            end: '',
            address: '',
            latlng: ''

        }
    }

    componentDidMount() {
        this.setState({ 
        id: this.props.id,
        title: this.props.title,
        catogery: this.props.catogery,
        description: this.props.description,
        start: this.props.start,
        end: this.props.end,
        address: this.props.address,
        latlng: this.props.latlng});
    };

    map(address, latlng){
        this.setState({
          address: address,
          latlng: latlng
        });
      }

    setDate = (dateTime) => this.setState({ start: moment(dateTime).format('YYYY-MM-DD hh:mm:ss a') });
    setEndDate = (dateTime) => this.setState({  end: moment(dateTime).format('YYYY-MM-DD hh:mm:ss a') });
 
    infoEdit(e) {
        e.preventDefault();
        Auth.notify("success", "Event Updated");
        Event.updateEvent(this.state);
        console.log(this.state);
        this.setState({open: false});
    }
    handleChange(event) {
        
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {

        return (
            <div>
                <RaisedButton label="Edit Event" onClick={this.handleOpen}/>
                <Dialog
                    title="Edit Event"
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}>
                    <form onSubmit={(e) => this.infoEdit(e)}>
                        <label className="col-form-label">
                            Title:
                        </label>
                        <input
                            className="form-control"
                            onChange={(e) => this.handleChange(e)}
                            name="title"
                            type="name"
                            value={this.state.title}/>

                        <label className="col-form-label">
                            Catogery:
                        </label>
                        <input
                            className="form-control regInput"
                            name="catogery"
                            onChange={(e) => this.handleChange(e)}
                            type="text"
                            value={this.state.catogery}
                            />
                        <br/>
                        
                        <label className="col-form-label">
                            Description:
                        </label>
                        <input
                            className="form-control regInput"
                            name="description"
                            type="text"
                            onChange={(e) => this.handleChange(e)}
                            value={this.state.description}
                            />
                        <br/>
                        {/* <label className="col-form-label">
                            Address:
                        </label>
                        <input
                            className="form-control regInput"
                            name="address"
                            type="text"
                            onChange={(e) => this.handleChange(e)}
                            value={this.state.address}
                            />
                        <br/> */}
                        <label className="col-form-label">
                           Start Date:
                        </label>
                        <DateTimePicker
                        value={this.state.start}
                        onChange={this.setDate}
                        DatePicker={DatePickerDialog}
                        TimePicker={TimePickerDialog}/>
                    <br/>
                        
                        <label className="col-form-label">
                            End Date:
                        </label>
                        <DateTimePicker
                        value={this.state.end}
                        onChange={this.setEndDate}
                        DatePicker={DatePickerDialog}
                        TimePicker={TimePickerDialog}/>
                    <br/>
                    < Location event={this.state} addMap={(address, latLng) => this.map(address, latLng)} />
                        <br/>
                        <RaisedButton type="submit" label="Update Event" primary={true}/>
                    </form>
                </Dialog>
            </div>
        );
    }
}