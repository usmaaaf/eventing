import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import {Toolbar} from 'material-ui/Toolbar';

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
    open: this.props.state,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleModalClose = (buttonClicked) => {
    this.setState({open: false});
  };

  componentWillReceiveProps(){
    this.setState({open: this.props.state})
  }

  render() {
    const actions = [
      <FlatButton
        label="Done"
        primary={true}
        onClick={this.handleClose}
      />,
    ];
    const style ={
      title:{
          fontSize: "1.4em",
          color: "#e8e8e8"
      },
      subtitle:{
          fontSize: "1.0em",
          color: "#e8e8e8"
      }

  }
  

    return (
      <div >
        <Card onClick={() => this.handleOpen()} className="card" key={this.props.id} >

            <CardHeader subtitleStyle={style.subtitle} titleStyle={style.title} className="card-header" title={this.props.title} subtitle={this.props.catogery}/>
            <CardText className="event-address">
                <FontIcon className="material-icons">place</FontIcon>
                <p>{this.props.address}</p>
            </CardText>
            
            <Toolbar className="card-footer">
                <FontIcon className="material-icons">date_range</FontIcon>
                    <p>{moment(this.props.start).format('YYYY-MM-DD hh:mm:ss a')}</p>
            </Toolbar>
            
        </Card>
        <Dialog 
        className="dialog"
        autoScrollBodyContent={true}
        onRequestClose={() => this.props.handleClose()}
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