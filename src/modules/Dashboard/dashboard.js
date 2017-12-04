import React, {Component} from 'react';
import {Create} from '../CreateEvents/createEvent';
import {UserEdit} from './components/userprofileedit';
import {currentUser} from '../../data/users';
import {GridList, GridTile} from 'material-ui/GridList';
import {Event} from '../../services/eventing'
import Avatar from './avatar.png';
import './dashboard.css';
import {Userevent} from './components/userevent';
import {userEvent, events} from '../../data/events';
import {Auth} from '../../services/authentication';
import Subheader from 'material-ui/Subheader';


export class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            events: events,
            userEvent: userEvent,
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
    
    render() {
        return (
            <div className="Dashboard">
                <GridList cellHeight="auto" cols={12}>
                    <GridTile  cols={3}>
                        <div className="dashboard">
                            <h2 className="dash-text">Dashboard</h2>
                            <div className="image-div">
                                <img id="avatar-img" src={Avatar} alt="avatar" circle="true" responsive="true"/>
                            </div>
                            <p className="dash-text">{currentUser[0].name}</p>
                            <UserEdit/>
                            <Subheader className="subheader-text"> Create Event </Subheader>
                            <Create
                            
                                addEvent={(title, catogery, description, startTime, endTime, address, latlng) => this.addEvent(title, catogery, description, startTime, endTime, address, latlng)}/> 
                                
                        </div>
                    </GridTile>
                    <GridTile cols={9}>
                            
                           
                            <p className="title-your-events">YOUR EVENTS</p>
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