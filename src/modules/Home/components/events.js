import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import moment from 'moment'
import {userEvent, events} from '../../../data/events'
import Avatar from '../../Dashboard/avatar.png'
import { View } from '../../events/viewEvent';
import './events.css';
import FontIcon from 'material-ui/FontIcon';
import {Toolbar} from 'material-ui/Toolbar';

export class CurrentEvents extends Component {
    render() {
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
            <div className="event-card">
                {events
                    .map((event, index) => {
                        return (
                            <Card className="card" key={event.id}>

                                <CardHeader subtitleStyle={style.subtitle} titleStyle={style.title} className="card-header" title={event.title} subtitle={event.catogery}/>
                                <CardText className="event-address">
                                    <FontIcon className="material-icons">place</FontIcon>
                                    <p> {event.address}</p>
                                </CardText>
                               
                                <CardActions>
                                    <View
                                    
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