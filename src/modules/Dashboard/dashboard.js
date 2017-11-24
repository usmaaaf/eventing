import React, {Component} from 'react';
import {Create} from '../CreateEvents/createEvent';
import {UserEdit} from './userprofileedit';
import {currentUser} from '../../data/users';
import {GridList, GridTile} from 'material-ui/GridList';

import Avatar from './avatar.png';
import './dashboard.css';

export class Dashboard extends Component {

    render() {
        return (
            <div>
                <GridList cellHeight={"auto"} cols={12}>
                    <GridTile cols={3}>
                        <div className="Dashboard">
                            <h2>Dashboard</h2>
                            <div className="image-div">
                                <img id="avatar-img" src={Avatar} alt="avatar" circle responsive/>
                            </div>
                            <p>{currentUser[0].name}</p>
                            <UserEdit/>
                        </div>
                    </GridTile>
                    <GridTile cols={9}>
                        <Create/>
                    </GridTile>
                </GridList>
            </div>
        );
    }
}