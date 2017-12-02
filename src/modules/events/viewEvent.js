import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {MyMap} from '../events/googlemap';
import FontIcon from 'material-ui/FontIcon';
import moment from 'moment'

import './viewevent.css'

const customContentStyle = {
  height: '100%',
  maxHeight: 'none',
};


export class View extends Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleModalClose = (buttonClicked) => {
    console.log("Apple");
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Done"
        primary={true}
        onClick={this.handleClose}
      />,
    ];

    const style = {
      // height: "32px",
      
    };
    return (
      <div className="view-button">
        <RaisedButton style={style} label="Event Details" onClick={this.handleOpen} />
        <Dialog 
        className="dialog"
        autoScrollBodyContent={true}
        onRequestClose={() => this.handleClose()}
          actions={actions}
          contentStyle={customContentStyle}
          open={this.state.open}
        >
        <div className="view-head"><FontIcon className="material-icons">bookmark</FontIcon><span className="view-title">Event Summary</span></div>
        
         <div><h1 className="title">{this.props.title}</h1> </div>
         <div className="date">
         <div>
          <h4 className="date-label"> Event Starts at: </h4>
          <div className="start">
              <p><FontIcon className="material-icons">date_range</FontIcon><span className="event-text">{moment(this.props.start).format('YYYY-MM-DD')}</span></p> 
              <p><FontIcon className="material-icons">access_time</FontIcon><span className="event-text">{moment(this.props.start).format('hh:mm:ss a')}</span></p> 
          </div>
          </div>
            <div>
              <h4 className="date-label"> Event Ends at: </h4>
              <div className="end">
                  <p><FontIcon className="material-icons">date_range</FontIcon><span className="event-text">{moment(this.props.end).format('YYYY-MM-DD')}</span></p>
                  <p><FontIcon className="material-icons">access_time</FontIcon><span className="event-text">{moment(this.props.end).format('hh:mm:ss a')}</span></p> 
              </div>
            </div>
         </div>
         <div className="">
         <p className="description-label">What will happen at the event?</p>
         <p className="description">{this.props.description}</p>
         </div>
        
         
         <MyMap
          loadingElement={ <div style={ { height: `100%` } } /> }
          containerElement={ <div style={ { height: `250px` } } /> }
          mapElement={ <div style={ { height: `100%` } } /> }
          latLng={this.props.latlng} />
        </Dialog>
      </div>
    );
  }
}