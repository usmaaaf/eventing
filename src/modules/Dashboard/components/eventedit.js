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
import './eventedit.css'
import TextField from 'material-ui/TextField';

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
            latlng: this.props.latlng
        });
    };

    map(address, latlng) {
        this.setState({address: address, latlng: latlng});
    }

    setDate = (dateTime) => this.setState({
        start: moment(dateTime).format('YYYY-MM-DD hh:mm:ss a')
    });
    setEndDate = (dateTime) => this.setState({
        end: moment(dateTime).format('YYYY-MM-DD hh:mm:ss a')
    });

    infoEdit(e) {
        e.preventDefault();
        this
            .props
            .updateEvent(this.state);
        this.setState({open: false});
    }

    handleOnChange(event, newValue) {

        this.setState({
            [event.target.name]: newValue
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
                <RaisedButton className="edit-submit" type="submit"  label="Edit Event" onClick={this.handleOpen}/>
                <Dialog
                    title="Edit Event"
                    onRequestClose={() => this.handleClose()}
                    open={this.state.open}
                    autoScrollBodyContent={true}
                    onRequestClose={this.handleClose}>
                    <div className="edit-event">
                    <form  onSubmit={(e) => this.infoEdit(e)}>
                        <div className="input">
                            <p className="label">
                                Title:
                            </p>
                            <TextField
                                className="input-field "
                                type="text"
                                value={this.state.title}
                                name="title"
                                onChange={(event, newValue) => this.handleOnChange(event, newValue)}/>
                        </div >
                        <br/>
                        <div className="input">
                            <p className="label">
                                Catogery:
                            </p>
                            <TextField
                                value={this.state.catogery}
                                className="input-field "
                                type="text"
                                name="catogery"
                                onChange={(event, newValue) => this.handleOnChange(event, newValue)}/>
                        </div>
                        <br/>
                        <div className="input">
                            <p className="label">
                                Description:
                            </p>
                            <TextField
                                value={this.state.description}
                                className="input-field "
                                type="text"
                                multiLine={true}
                                name="description"
                                onChange={(event, newValue) => this.handleOnChange(event, newValue)}/>
                        </div>
                        <br/>
                        <div className="input">
                            <p className="label">
                                Start Date/Time:
                            </p>
                            <DateTimePicker
                                value={this.state.start}
                                onChange={this.setDate}
                                DatePicker={DatePickerDialog}
                                TimePicker={TimePickerDialog}/>
                        </div>
                        <div className="input">
                            <p className="label">
                                End Date/Time:
                            </p>
                            <DateTimePicker
                                value={this.state.end}
                                onChange={this.setEndDate}
                                DatePicker={DatePickerDialog}
                                TimePicker={TimePickerDialog}/>
                        </div>
                        
                        < Location event={this.state} addMap={(address, latLng) => this.map(address, latLng)}/>
                        <br/>
                        <RaisedButton type="submit" label="Update Event" primary={true}/>
                    </form>
                    </div>
                </Dialog>
            </div>
        );
    }
}