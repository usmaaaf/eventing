import React, {Component} from 'react';
import DateTimePicker from 'material-ui-datetimepicker';
import DatePickerDialog from 'material-ui/DatePicker/DatePickerDialog'
import TimePickerDialog from 'material-ui/TimePicker/TimePickerDialog';
import {Location} from './placeautocomplete';
import {Event} from '../../services/eventing'

import './createEvent.css'

export class Create extends Component {
  constructor(){
    super();
    this.state= {
      startTime: "",
      endTime : "",
      address: "",
      latlng: ""

    }
  }

  setDate = (dateTime) => this.setState({ startTime: dateTime });
  setEndDate = (dateTime) => this.setState({  endTime: dateTime });

  FormSubmit(e){
    e.preventDefault();
    Event.addEvent(this.refs.title.value,
      this.refs.catogery.value,
      this.refs.description.value,
      this.state.startTime,
      this.state.endTime,
      this.state.address,
      this.state.latlng
    );
    Event.currentEvent();
  }

  map(address, latlng){
    this.setState({
      address: address,
      latlng: latlng
    });
  }

  render() {  
    return (
      <div>
        <form onSubmit={(e) => this.FormSubmit(e)}>
          <label className="col-form-label">
            Title:
          </label>
          <input
            className="form-control regInput"
            type="text"
            placeholder="Title"
            ref="title"/>
          <br/>
          <label className="col-form-label">
            Catogery:
          </label>
          <input className="form-control regInput" type="text" ref="catogery"/>
          <br/>
          <label className="col-form-label">
            Description:
          </label>
          <input
            className="form-control regInput"
            type="text"
            placeholder="Describe your event"
            ref="description"/>
            <br/>
            <label className="col-form-label">
            Start Date/Time
          </label>
             <DateTimePicker
            onChange={this.setDate}
            DatePicker={DatePickerDialog}
            TimePicker={TimePickerDialog}/>
            <label className="col-form-label">
            End Date/Time
          </label>
          <DateTimePicker
            onChange={this.setEndDate}
            DatePicker={DatePickerDialog}
            TimePicker={TimePickerDialog}/>
          <br/>
          <br/>
          <hr/>
          <Location addMap={(address, latLng) => this.map(address, latLng)} />
          <input type="submit" value="submit"/>
        </form>
      
      </div>
    );
  }
}