import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import moment from 'moment'
import {EventEdit} from './eventedit';
import {userEvent} from '../../../data/events'
import Avatar from '../avatar.png'


import IconButton from "material-ui/IconButton";
import ContentAdd from "material-ui/svg-icons/content/add";

export class Userevent extends Component {
    constructor(){
        super();
        this.state={
            event : []
        }        
    }
componentDidMount(){
    this.setState({
        event: this.props.userevents
    });
    console.log(this.state);
}

// componentWillReceiveProps(props){
//     console.log("Hii");
//     this.setState({
//         event: props.userevents
//     })
// }
    
    render() {
        console.log(this.state.event);
        return (
            <div>
                {this.state.event.map((event, index) => {
                    return (<Card key={index}>
                        
                    <CardHeader
                      title={<div><span>{event.title}</span> <span>X</span></div>}
                      subtitle={event.catogery}
                    /> 
                    
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
                    </CardActions>
                    <EventEdit id={event.id} title={event.title} catogery={event.catogery} description={event.description}
               start={moment(event.startDate).format('YYYY-MM-DD hh:mm:ss a')} 
               end={moment(event.endDate).format('YYYY-MM-DD hh:mm:ss a')}
                address={event.address} latlng={event.latlng} />
                  </Card>)})}
              
            </div>
        );
    }
}




