import React, {Component} from 'react';
import DateTimePicker from 'material-ui-datetimepicker';
import DatePickerDialog from 'material-ui/DatePicker/DatePickerDialog'
import TimePickerDialog from 'material-ui/TimePicker/TimePickerDialog';

import './createEvent.css'

export class Create extends Component {
  constructor(){
    super();
    this.state= {
      dateTime: null
    }
  }
  setDate = (dateTime) => this.setState({ dateTime });

  render() {
    return (
      <div>
        <form>
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
            onChange={this.setDate}
            DatePicker={DatePickerDialog}
            TimePicker={TimePickerDialog}/>
          <br/>
          <br/>
          <hr/>
          <label className="col-form-label">
            Location:
          </label>
          <input
            className="form-control regInput"
            type="text"
            placeholder="Location"
            ref="location"/>
          <br/>
        </form>
      </div>
    );
  }
}