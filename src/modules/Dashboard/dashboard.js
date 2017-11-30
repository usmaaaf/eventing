import React, {Component} from 'react';
import {Create} from '../CreateEvents/createEvent';
import {UserEdit} from './components/userprofileedit';
import {currentUser} from '../../data/users';
import {GridList, GridTile} from 'material-ui/GridList';
import {Event} from '../../services/eventing'
import Avatar from './avatar.png';
import './dashboard.css';
import Paper from 'material-ui/Paper';
import {Userevent} from './components/userevent';
import {userEvent, events} from '../../data/events';
import {Auth} from '../../services/authentication';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentClear from 'material-ui/svg-icons/content/clear';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Subheader from 'material-ui/Subheader';


export class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            events: events,
            userEvent: userEvent,
            create: false
        }
    }

    deleteEvent(event) {
        const eventing = Event.deleteEvent(event);
        this.setState({events: eventing});
    }
    updateEvent(event) {
        Auth.notify("success", "Event Updated");
        const eventing = Event.updateEvent(event);
        this.setState({events: eventing});
    }
    addEvent(title, catogery, description, startTime, endTime, address, latlng) {
        const eventing = Event.addEvent(title, catogery, description, startTime, endTime, address, latlng);
        this.setState({events: eventing});
    }

    createevent(){
        this.setState({
            create:true
        })
    }
    closecreate(){
        this.setState({
            create:false
        })
    }

    closeform(){
        this.setState({
            create:false
        })
    }
    render() {
        return (
            <div className="Dashboard">
                <GridList cellHeight="auto" cols={12}>
                    <GridTile  cols={3}>
                        <div className="dashboard">
                            <h2 className="dash-text">Dashboard</h2>
                            <div className="image-div">
                                <img id="avatar-img" src={Avatar} alt="avatar" circle responsive/>
                            </div>
                            <p className="dash-text">{currentUser[0].name}</p>
                            <UserEdit/>
                            <Subheader className="subheader-text"> Create Event </Subheader>
                            <FloatingActionButton className="add-button" onClick={() => this.createevent()}>
                                <ContentAdd/>
                            </FloatingActionButton>
                        </div>
                    </GridTile>
                    <GridTile cols={9}>
                        { this.state.create ?
                        <div>
                            <Paper className='paper' zDepth={2}>
                            <FloatingActionButton className="add-button" onClick={() => this.closecreate()}>
                            <ContentClear/>
                            </FloatingActionButton>
                            
                            <Create
                            closeform={()=> this.closeform()}
                                addEvent={(title, catogery, description, startTime, endTime, address, latlng) => this.addEvent(title, catogery, description, startTime, endTime, address, latlng)}/> </Paper> </div>: null}
                            <p>YOUR EVENTS</p>
                        <Userevent
                            deleteEvent={(event) => this.deleteEvent(event)}
                            updateEvent={(event) => this.updateEvent(event)}
                            userevents={this.state.events}
                            />
                    </GridTile>
                </GridList>
            </div>
        );
    }
}