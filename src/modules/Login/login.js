import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import TextField from 'material-ui/TextField';

import {currentUser} from '../../data/users.js';
import {Auth} from '../../services/authentication';
import {Event} from '../../services/eventing';
import './login.css';

export class Login extends Component {

    constructor(){
        super();
        this.state = {
                email: "",
                pass : ""
        }
    }
    
    handleOnChange(event, newValue){
        this.setState({
            [event.target.name]: newValue
        })
        
    }
    userMatch(e) {
        e.preventDefault();
        const isLoggedIn = Auth.login(this.state.email, this.state.pass);
        const emailCheck = Auth.emailCheck(this.state.email);
        if (emailCheck) {
            Auth.notify("error", "Invalid Email Address");
        } else if (!isLoggedIn) {
            Auth.notify("error", 'Wrong email or Password');
        } else {
            Auth.notify("success", "Login Successful!");
            this
                .props
                .history
                .push("/dashboard");
            currentUser.push(isLoggedIn[0]);
            localStorage.setItem("userState", JSON.stringify({isLoggedIn: true}))
        }
    }

    render() {
        const styles = {
            fontFamily: "Raleway"
          }
        return (
            <div className="Login">

                <form onSubmit={(e) => this.userMatch(e)}>
                    <div className="input-fields top-field">
                        <FontIcon className="material-icons">email</FontIcon>

                        <TextField
                        id="email"
                        name="email"
                            className="form-control loginInput"
                            type="text"
                            placeholder="Email"
                            onChange={(event, newValue) => this.handleOnChange(event, newValue)}/>
                    </div>
                    <br/>
                    <div className="input-fields">
                        <FontIcon className="material-icons">lock</FontIcon>

                        <TextField
                        name="pass"
                        onChange={(event, newValue) => this.handleOnChange(event, newValue)}
                        id="pass"
                        type="password"
                        placeholder="Password"
                        />
                    </div>
                    <br/>
                    <RaisedButton labelStyle={styles} type="submit" value="login">Login</RaisedButton>

                </form>

            </div>
        );
    }
}