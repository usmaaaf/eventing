import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import moment from 'moment'
import {events} from '../../../data/events'
import { View } from '../../events/viewEvent';
import './events.css';
import FontIcon from 'material-ui/FontIcon';
import {Toolbar} from 'material-ui/Toolbar';

export class CurrentEvents extends Component {
    constructor(){
        super();
        this.state={
            isDialogOpen: false
        }
    }
    cardClick(){
        this.setState({
            isDialogOpen: !this.state.isDialogOpen
        })
        console.log('asdasddasd')
    }
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
                            <View
                            id={event.id}
                            state={this.state.isDialogOpen}
                            handleClose={() => this.cardClick()}
                            title={event.title}
                            catogery={event.catogery}
                            description={event.description}
                            start={moment(event.startDate).format('YYYY-MM-DD hh:mm:ss a')}
                            end={moment(event.endDate).format('YYYY-MM-DD hh:mm:ss a')}
                            address={event.address}
                            latlng={event.latlng}/>
                            
                        )
                    })}
            </div>
        );
    }
}