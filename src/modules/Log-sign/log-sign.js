import React, {Component} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Login, Register} from '../index'
import {Link} from 'react-router-dom';

import './log-sign.css';


export class Log extends Component {
  
    render() {
        return (
            <div className="Log">
               
            <div>
                <p>Eventing</p>
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
            </div>
            </div>
        );
    }
}