import React, {Component} from 'react';
import DateTimePicker from 'material-ui-datetimepicker';
import DatePickerDialog from 'material-ui/DatePicker/DatePickerDialog'
import TimePickerDialog from 'material-ui/TimePicker/TimePickerDialog';
import {Location} from './placeautocomplete';
import TextField from 'material-ui/TextField';
import {RaisedButton} from 'material-ui';
import Snackbar from 'material-ui/Snackbar';
import Dialog from 'material-ui/Dialog';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentClear from 'material-ui/svg-icons/content/clear';
import ContentAdd from 'material-ui/svg-icons/content/add';

import './createEvent.css';
import {Auth} from '../../services/authentication';

export class Create extends Component {
  constructor() {
    super();
    this.state = {
      titleError: "",
      catogeryError: "",
      descriptionError: "",
      startError: "",
      endError: "",
      error: "",
      startTime: "",
      LocationError:  "",
      endTime: "",
      address: "",
      latlng: "",
      title: "",
      catogery: "",
      description: "",
      openDialog: false,
      open: false
    }
  }

  
  handleOpen = () => {
    this.setState({openDialog: true});
  };

  handleClose = () => {
    this.setState({openDialog: false});
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  setDate = (dateTime) => this.setState({startTime: dateTime});
  setEndDate = (dateTime) => this.setState({endTime: dateTime});

  FormSubmit(e) {
    e.preventDefault();
    if (this.state.title === "" ) {
      this.setState({titleError: "Title Missing", catogeryError: null, descriptionError: null, startError: null, endError: null});
    } else if(this.state.catogery === "") {
      this.setState({titleError: null, catogeryError: "Catogery Missing", descriptionError: null, startError: null, endError: null});
    }else if(this.state.description === "") {
      this.setState({titleError: null, catogeryError: null, descriptionError: "Description Missing", startError: null, endError: null});
    } else if(this.state.startTime === "") {
      this.setState({titleError: null, catogeryError: null, descriptionError: null, startError: "Please enter event start time", endError: null});
    } else if(this.state.endTime === "") {
      this.setState({titleError: null, catogeryError: null, descriptionError: null, startError: null, endError: "Please enter event end time"});
    }
    else if(this.state.address === "") {
      this.setState({titleError: null, catogeryError: null, descriptionError: null, startError: null, endError: null, LocationError: "Please enter event address"});
      this.handleClick();
    }
     else {
       Auth.notify("success", "Event Added")
      this
        .props
        .addEvent(this.state.title, this.state.catogery, this.state.description, this.state.startTime, this.state.endTime, this.state.address, this.state.latlng);
        this.handleClose();
    }
  }

  handleOnChange(event, newValue) {
    this.setState({
      [event.target.name]: newValue
    })
  }

  map(address, latlng) {
    this.setState({address: address, latlng: latlng});
  }

  render() {
    const styles = {
      underlineStyle: {
          borderColor: "#062f4f",
        },
        hint:{
          width: "100%",
          display: "flex",
          justifyContent : "center"
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
          },
          error:{
            textAlign: "center",
            fontFamily: "Raleway",
          }
    }
    const actions = [
      <RaisedButton
      overlayStyle={styles.back} 
      labelStyle={{color: "white"}}
      type="submit"
        label="Add Event"
        onClick={(e) => this.FormSubmit(e)}
      />
    ];

    return (
      <div>
       <FloatingActionButton className="add-button" onClick={this.handleOpen}>
                      <ContentAdd/>
        </FloatingActionButton>
       <Dialog
       titleStyle={styles.title}
       className="dialog-create"
          autoScrollBodyContent={true}
          title={<div className="dialog-head"><span>Create Event</span><ContentClear onClick={() => this.handleClose()} className="iconic"/></div>}
          actions={actions}
          onRequestClose={() => this.handleClose()}
          open={this.state.openDialog}
        >
        <div className="create-event">
        <form onSubmit={(e) => this.FormSubmit(e)}>

          <div className="input">
            <p className="label">
              Title:
            </p>
            <TextField
            errorStyle={styles.error}
             errorText={this.state.titleError}
            inputStyle={styles.input}
            hintStyle={styles.hint}
            underlineFocusStyle={styles.underlineStyle}
              className="input-field "
              type="text"
              hintText="Title"
              name="title"
              onChange={(event, newValue) => this.handleOnChange(event, newValue)}/>
          </div >
          <br/>
          <div className="input">
            <p className="label">
              Catogery:
            </p>
            <TextField
            errorStyle={styles.error}
            errorText={this.state.catogeryError}
            inputStyle={styles.input}
            hintStyle={styles.hint}
            underlineFocusStyle={styles.underlineStyle}
              className="input-field "
              type="text"
              hintText="Catogery e.g Programming"
              name="catogery"
              onChange={(event, newValue) => this.handleOnChange(event, newValue)}/>
          </div>
          <br/>
          <div className="input">
            <p className="label">
              Description:
            </p>
            <TextField
            errorStyle={styles.error}
            errorText={this.state.descriptionError}
            textareaStyle={styles.input}
            hintStyle={styles.hint}
            underlineFocusStyle={styles.underlineStyle}
              className="input-field "
              type="text"
              multiLine={true}
              hintText="Describe your event"
              name="description"
              onChange={(event, newValue) => this.handleOnChange(event, newValue)}/>
          </div>
          <br/>
          <div className="input">
            <p className="label">
              Start Date/Time:
            </p>
            <DateTimePicker
            errorStyle={styles.error}
            errorText={this.state.startError}
              onChange={this.setDate}
              DatePicker={DatePickerDialog}
              TimePicker={TimePickerDialog}/>
          </div>
          <div className="input">
            <p className="label">
              End Date/Time:
            </p>
            <DateTimePicker
            errorStyle={styles.error}
            errorText={this.state.endError}
             style={{color: "red"}}
              onChange={this.setEndDate}
              DatePicker={DatePickerDialog}
              TimePicker={TimePickerDialog}/>
          </div>
          <Location  addMap={(address, latLng) => this.map(address, latLng)}/>
          <Snackbar
          open={this.state.open}
          message={this.state.LocationError}
          autoHideDuration={2000}
          onRequestClose={this.handleRequestClose}
        />
        </form>
        </div>
        </Dialog>

      </div>
    );
  }
}