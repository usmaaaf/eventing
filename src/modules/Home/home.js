import React, {Component} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Login, Register} from '../index'
import {GridList, GridTile} from 'material-ui/GridList';
import {Link} from 'react-router-dom';

import './home.css'


export class Home extends Component {
  
    render() {
        return (
            <div className="Home">
            <h2>EVENTING</h2>   
            <GridList cols={12}>
                <GridTile cols={9}>
                
                </GridTile>
                
                <GridTile rows={5} cols={3}>
                <Tabs>
                        <Tab label="Login">
                            <div>
                            <Login history={this.props.history} />
                            </div>
                        </Tab>
                        <Tab label="Register">
                            <div>
                            < Register history={this.props.history}/>
                            </div>
                        </Tab>
                    </Tabs> 
                    <Link to={"/reset"}><p>Forgot Password?</p></Link>
                    </GridTile>
            </GridList> 
            
            </div>
        );
    }
}