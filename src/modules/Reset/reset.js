import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import {Auth} from '../../services/authentication';

import './reset.css'


export class Reset extends Component {

    renderLogin(e){
        e.preventDefault();
        const emailCheck = Auth.emailCheck(this.refs.email.value) ;
        if (emailCheck){
            Auth.notify("error", "Invalid Email Address");
        } else {
            Auth.notify("success", "Reset successful! Check your email address");
            this.props.history.push("/");
        }
    }

  
    render() {
        const styles = {
            label:{
                fontFamily: "Raleway",
                color: "white"
            },
            back: {
            backgroundColor: "#062f4f"},
            underlineStyle: {
                borderColor: "#062f4f",
              }
          }

        return (
            <div className="Reset">
            <h2>Reset</h2>   
            <form onSubmit={(e) => this.renderLogin(e)}> 
                <input className="form-control resetInput" type="text" ref="email" placeholder="Enter your email address"/>
                <br/>
                <br/>
                <RaisedButton overlayStyle={styles.back} labelStyle={styles.label} label="Reset" primary={true} type="submit" />
            </form>   
            </div>
        );
    }
}