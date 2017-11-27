import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import moment from 'moment'
import {userEvent, events} from '../../../data/events'
import Avatar from '../../Dashboard/avatar.png'
import { View } from '../../events/viewEvent';


export class CurrentEvents extends Component {
    render() {
        return (
            <div>
                {events
                    .map((event, index) => {
                        return (
                            <Card key={event.id}>

                                <CardHeader title={event.title} subtitle={event.catogery} avatar={Avatar}/>
                                <CardText>
                                    {event.address}
                                </CardText>
                                <CardText>
                                    {event.description}
                                </CardText>
                                <CardText>
                                    <p>{moment(event.startDate).format('YYYY-MM-DD hh:mm:ss a')}</p>
                                    <p>{moment(event.endDate).format('YYYY-MM-DD hh:mm:ss a')}</p>
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
                            </Card>
                        )
                    })}
            </div>
        );
    }
}