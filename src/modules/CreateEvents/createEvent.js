import React, {Component} from 'react';
import DateTimePicker from 'material-ui-datetimepicker';
import DatePickerDialog from 'material-ui/DatePicker/DatePickerDialog'
import TimePickerDialog from 'material-ui/TimePicker/TimePickerDialog';
import {Location} from './placeautocomplete';
import TextField from 'material-ui/TextField';
import {RaisedButton} from 'material-ui';

import './createEvent.css';
import {Auth} from '../../services/authentication';

export class Create extends Component {
  constructor() {
    super();
    this.state = {
      error: "",
      startTime: "",
      endTime: "",
      address: "",
      latlng: "",
      title: "",
      catogery: "",
      description: ""
    }
  }

  setDate = (dateTime) => this.setState({startTime: dateTime});
  setEndDate = (dateTime) => this.setState({endTime: dateTime});

  FormSubmit(e) {
    e.preventDefault();
    if (this.state.title === "" ) {
      Auth.notify("error", "Title Missing");
    } else if(this.state.catogery === "") {
      Auth.notify("error", "Catogery Missing");
    }else if(this.state.description === "") {
      Auth.notify("error", "Description Missing");
    } else if(this.state.startTime === "") {
      Auth.notify("error", "Please enter event start time");
    } else if(this.state.endTime === "") {
      Auth.notify("error", "Please enter event end time");
    }
    else if(this.state.address === "") {
      Auth.notify("error", "Please enter event location");
    }
     else {
      this
        .props
        .addEvent(this.state.title, this.state.catogery, this.state.description, this.state.startTime, this.state.endTime, this.state.address, this.state.latlng);
      this
        .props
        .closeform();
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
        input:{
          textAlign: "center"
        }
    }
    return (
      <div className="create-event">

        <form onSubmit={(e) => this.FormSubmit(e)}>

          <div className="input">
            <p className="label">
              Title:
            </p>
            <TextField
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
            inputStyle={styles.input}
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
            
              onChange={this.setDate}
              DatePicker={DatePickerDialog}
              TimePicker={TimePickerDialog}/>
          </div>
          <div className="input">
            <p className="label">
              End Date/Time:
            </p>
            <DateTimePicker
            
             style={{color: "red"}}
              onChange={this.setEndDate}
              DatePicker={DatePickerDialog}
              TimePicker={TimePickerDialog}/>
          </div>
          <Location addMap={(address, latLng) => this.map(address, latLng)}/>
          <RaisedButton className="event-submit" type="submit" label="ADD EVENT"/>
        </form>

      </div>
    );
  }
}