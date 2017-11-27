import React, {Component} from 'react';
import {Create} from '../CreateEvents/createEvent';
import {UserEdit} from './components/userprofileedit';
import {currentUser} from '../../data/users';
import {GridList, GridTile} from 'material-ui/GridList';
import {Event} from '../../services/eventing'
import Avatar from './avatar.png';
import './dashboard.css';
import {Userevent} from './components/userevent';
import { userEvent } from '../../data/events';
export class Dashboard extends Component {

    render() {
        return (
            <div>
                <GridList  cols={12}>
                    <GridTile rows={3} cols={3}>
                        <div className="Dashboard">
                            <h2>Dashboard</h2>
                            <div className="image-div">
                                <img id="avatar-img" src={Avatar} alt="avatar" circle responsive/>
                            </div>
                            <p>{currentUser[0].name}</p>
                            <UserEdit/>
                        </div>
                    </GridTile>
                    <GridTile rows={10} cols={9}>
                        <Create/>
                        <p>YOUR EVENTS</p>
                        <Userevent userevents={userEvent[0]} />
                    </GridTile>
                </GridList>
            </div>
        );
    }
}