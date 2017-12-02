import React, {Component} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Login, Register} from '../index'
import {Link} from 'react-router-dom';


import './log-sign.css';


export class Log extends Component {
    constructor(){
        super();
        this.state={
            tabIndex: 0
        }
    }

    changeTab(i){
        this.setState({tabIndex: i
        });
        
    }
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
                
                <Tabs value={this.state.tabIndex} inkBarStyle={styles.ink} tabItemContainerStyle={styles.tab} className="tabs">
                        <Tab value={0} label="Login">
                        
                            <div>
                            <Login changeTab={(i) => this.changeTab(i)} history={this.props.history} />
                            </div>
                        </Tab>
                        <Tab value={1} label="Register">
                            <div>
                            < Register changeTab={(i) => this.changeTab(i)} history={this.props.history}/>
                            </div>
                        </Tab>
                    </Tabs> 
                   
            <Link className="reset" to={"/reset"}><p>Forgot Password?</p></Link>
            </div>
            </div>
        );
    }
}