import React, {Component} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Login, Register} from '../index'
import {GridList, GridTile} from 'material-ui/GridList';
import {Link} from 'react-router-dom';
import {Event} from '../../services/eventing'
import {CurrentEvents} from '../Home/components/events'

import './home.css'


export class Home extends Component {
  
    render() {
        return (
            <div className="Home"> 
            <h1>Upcoming Events</h1> 
            <h4>Upcoming Events In Pakistan: Including concerts, exhibitions, festivals, sports, arts, workshops and more.</h4>
                < CurrentEvents/>
            </div>
        );
    }
}