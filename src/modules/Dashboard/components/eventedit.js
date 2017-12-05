import React, {Component} from 'react';
import DateTimePicker from 'material-ui-datetimepicker';
import DatePickerDialog from 'material-ui/DatePicker/DatePickerDialog'
import TimePickerDialog from 'material-ui/TimePicker/TimePickerDialog';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import moment from 'moment';
import {Location} from '../../Home/components/places';
import './eventedit.css'
import TextField from 'material-ui/TextField';
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import ContentClear from 'material-ui/svg-icons/content/clear';

import IconButton from "material-ui/IconButton";
import MapsAddLocation from 'material-ui/svg-icons/maps/add-location';

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
        console.log("latlng agaya");
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
        const style = {
            icon:{
                color: "#e8e8e8"
            },
            tooltip: {
                width: "120px"
            },
            title:{
                backgroundColor: "#1D2731",
                color: "white"
            },
            back: {
                backgroundColor: "#062f4f"},
            input:{
                    textAlign: "center",
                    fontFamily: "Raleway",
                    color: "#062f4f",
                    fontWeight: "Bold",
                    fontSize: "1.2em"
                }
                

        }
        const actions = [
            <RaisedButton
            overlayStyle={style.back}  label="Update Event"
            type="submit"
              
              primary={true}
              onClick={(e) => this.infoEdit(e)}
            />]

        return (
            <div>
                <IconButton
                iconStyle={style.icon}
                    onClick={this.handleOpen}
                    tooltipStyles={style.tooltip}
                    tooltip="Edit Event"
                    tooltipPosition="bottom-right">
                    <EditorModeEdit/>
                </IconButton>
                <Dialog
                className="dialog-create"
                actions={actions}
                titleStyle={style.title}
                title={<div className="dialog-head"><span>Edit Event</span><ContentClear onClick={() => this.handleClose()} className="iconic"/></div>}
                    onRequestClose={() => this.handleClose()}
                    open={this.state.open}
                    autoScrollBodyContent={true}>
                    <div className="edit-event">
                        <form>
                            <div className="input">
                                <p className="label">
                                    Title:
                                </p>
                                <TextField
                                
                                    className="input-field "
                                    inputStyle={style.input}
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
                                    inputStyle={style.input}
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
                                    className="input-field"
                                    type="text"
                                    multiLine={true}
                                    textareaStyle={style.input}
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
                            <div className="location-Tab">
                                <MapsAddLocation className="location-icon"/>
                            <Location event={this.state} addMap={(address, latLng) => this.map(address, latLng)}/>
                            </div>
                            <br/>
                        </form>
                    </div>
                </Dialog>
            </div>
        );
    }
}