import React, {Component} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Login, Register} from '../index'
import {Link} from 'react-router-dom';


import './log-sign.css';


export class Log extends Component {

  
    render() {
        const styles = {
            ink :{
                backgroundColor: "#813772",
                height: "3px"
            },
            tab:{
                backgroundColor: "#062f4f"
            }
        }

        return (
            <div className="Log">
               
            <div>
                
                <Tabs inkBarStyle={styles.ink} tabItemContainerStyle={styles.tab} className="tabs">
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
                   
            <Link className="reset" to={"/reset"}><p>Forgot Password?</p></Link>
            </div>
            </div>
        );
    }
}