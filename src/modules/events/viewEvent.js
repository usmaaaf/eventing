import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {events, userEvent} from '../../data/events';
import {MyMap} from '../events/googlemap';

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

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onClick={this.handleClose}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Event Details" onClick={this.handleOpen} />
        <Dialog
          title="Event Details"
          actions={actions}
          modal={true}
          contentStyle={customContentStyle}
          open={this.state.open}
        >
         <h1>{this.props.title}</h1>
         <p>{this.props.catogery}</p>
         <p>{this.props.description}</p>
         <p>{this.props.address}</p>
         <p>{this.props.start}</p>
         <p>{this.props.end}</p>
         
         <MyMap
          loadingElement={ <div style={ { height: `100%` } } /> }
          containerElement={ <div style={ { height: `400px` } } /> }
          mapElement={ <div style={ { height: `100%` } } /> }
          latLng={this.props.latlng} />
        </Dialog>
      </div>
    );
  }
}