import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import moment from 'moment'
import {EventEdit} from './eventedit';
import {userEvent} from '../../../data/events'
import Avatar from '../avatar.png'
import './userevent.css';
import FontIcon from 'material-ui/FontIcon';
import {Toolbar} from 'material-ui/Toolbar';

import IconButton from "material-ui/IconButton";
import RaisedButton from 'material-ui/RaisedButton';
import ContentAdd from "material-ui/svg-icons/content/add";
import {Event} from '../../../services/eventing';
import {currentUser} from '../../../data/users';

export class Userevent extends Component {

    deleteEvent(event) {
        this
            .props
            .deleteEvent(event);
    }

    updateEvent(event) {
        this
            .props
            .updateEvent(event);
    }

    render() {
        const style = {
            title: {
                fontSize: "1.4em",
                color: "#e8e8e8"
            },
            subtitle: {
                fontSize: "1.0em",
                color: "#e8e8e8"
            }

        }
        return (

            <div className="event-card margin-event">
                {this
                    .props
                    .userevents
                    .filter((event) => currentUser[0].id === event.userId)
                    .map((event, index) => {
                        // const eventdelete = event;
                        return (
                            <Card className="card margin-card" key={index}>

                                <CardHeader
                                    subtitleStyle={style.subtitle}
                                    titleStyle={style.title}
                                    className="header-bar"
                                    className="card-header"
                                    title={event.title}
                                    subtitle={event.catogery}/>

                                <CardText className="event-address">
                                    <FontIcon className="material-icons">place</FontIcon>
                                    <p>
                                        {event.address}</p>
                                </CardText>

                                <CardActions className="action-button">
                                    <RaisedButton
                                        label="Delete Event"
                                        onClick={() => this.deleteEvent(event)}/>
                                         <EventEdit
                                    updateEvent={(event) => this.updateEvent(event)}
                                    id={event.id}
                                    title={event.title}
                                    catogery={event.catogery}
                                    description={event.description}
                                    start={moment(event.startDate).format('YYYY-MM-DD hh:mm:ss a')}
                                    end={moment(event.endDate).format('YYYY-MM-DD hh:mm:ss a')}
                                    address={event.address}
                                    latlng={event.latlng}/>
                                </CardActions>

                                <Toolbar className="card-footer">
                                    <FontIcon className="material-icons">date_range</FontIcon>
                                    <p>{moment(event.startDate).format('YYYY-MM-DD hh:mm:ss a')}</p>
                                </Toolbar>
                            </Card>
                        )
                    })}

            </div>
        );
    }
}
