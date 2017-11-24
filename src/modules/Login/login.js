import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';


import {currentUser} from '../../data/users.js';
import {Auth} from '../../services/authentication';
import './login.css';

export class Login extends Component {

    userMatch(e) {
        e.preventDefault();
        const isLoggedIn = Auth.login(this.refs.email.value, this.refs.pass.value);
        const emailCheck = Auth.emailCheck(this.refs.email.value);
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
        return (
            <div className="Login">
                <h2>Login
                </h2>
                <form onSubmit={(e) => this.userMatch(e)}>
                    <label className="col-form-label">
                    <FontIcon className="material-icons">email</FontIcon>
                    </label>
                    <input
                        className="form-control loginInput"
                        type="text"
                        placeholder="Email"
                        ref="email"/>
                    <br/>
                    <label className="col-form-label">
                    <FontIcon className="material-icons">lock</FontIcon>
                    </label>
                    <input
                        className="form-control loginInput"
                        type="password"
                        placeholder="Password"
                        ref="pass"/>
                    <br/>
                    <RaisedButton type="submit" value="login">Login</RaisedButton>

                </form>
               
            </div>
        );
    }
}