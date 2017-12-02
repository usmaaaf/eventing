import React, {Component} from 'react';
import {CurrentEvents} from '../Home/components/events'

import './home.css'
import { currentUser } from '../../data/users';


export class Home extends Component {
  
    render() {
        console.log(currentUser);
        return (
            <div className="Home"> 
            <h1>Upcoming Events</h1> 
            <h4>Upcoming Events In Pakistan: Including concerts, exhibitions, festivals, sports, arts, workshops and more.</h4>
                < CurrentEvents/>
            </div>
        );
    }
}