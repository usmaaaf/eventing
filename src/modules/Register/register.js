import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import {currentUser} from '../../data/users.js';


import './register.css'
import {Auth} from '../../services/authentication';

export class Register extends Component {
    constructor(){
        super();
        this.state = {
            pass: false
        }
    }

    register(event) {
        event.preventDefault();
        const confirmPass = Auth.passwordCheck(this.refs.pass.value, this.refs.confirmpass.value);
        const emailCheck = Auth.emailCheck(this.refs.email.value);
        const passwordlen = Auth.passwordlength(this.refs.pass.value);
        const confirmlen = Auth.passwordlength(this.refs.confirmpass.value);
        if(this.refs.name.value === ""){
            Auth.notify("error", "Please Enter your Name");
        }
        else if(this.refs.email.value === ""){
            Auth.notify("error", "Please Enter your Email Address");
        } else if(this.refs.pass.value === ""){
            Auth.notify("error", "Please Enter password");
        }else if(this.refs.confirmpass.value === ""){
            Auth.notify("error", "Please Confirm password");
        } else if (emailCheck) {
            Auth.notify("error", "Invalid Email Address");
        } else if (passwordlen) {
            Auth.notify("error", "Your password must be 6 characters long");
        } else if(confirmlen){
            Auth.notify("error", "Your password must be 6 characters long");
        } else if (confirmPass) {
            Auth.notify("error", "Password does not match! Enter correct password");
        } else {
            Auth.notify("success", "Registration confirmed");
           const current = Auth.addUser(this.refs.name.value, this.refs.email.value, this.refs.pass.value);
            currentUser.push(current);
            localStorage.setItem("userState", JSON.stringify({isLoggedIn: true}))
            this
                .props
                .history
                .push("/dashboard");
        }
    }

    caution() {
        if(this.refs.pass.value.length > 5){
            this.setState({pass: false});
        } else {
            this.setState({pass: true});
        }
    }

    render() {
        return (
            <div className="Register">
                <h2>Register </h2>
                <form className="form-group" onSubmit={(e) => this.register(e)}>
                <label className="col-form-label">
                    <FontIcon className="material-icons">person</FontIcon>
                    </label>
                    <input
                        className="form-control regInput"
                        type="text"
                        placeholder="Name"
                        ref="name"/>
                    <br/>
                    <label className="col-form-label">
                    <FontIcon className="material-icons">email</FontIcon>
                    </label>
                    <input
                        className="form-control regInput"
                        type="text"
                        placeholder="Email"
                        ref="email"/>
                    <br/>
                    <label className="col-form-label">
                    <FontIcon className="material-icons">lock</FontIcon>
                    </label>
                    <input
                        onChange={() => this.caution()}
                        className="form-control regInput"
                        type="password"
                        placeholder="Password"
                        ref="pass"/> 
                        {this.state.pass ? 
                            <small id="passwordHelpBlock" class="form-text text-muted">
                                    Your password must be 6 characters long.
                            </small>
                        : null}
                    <br/>
                    <label className="col-form-label">
                    <FontIcon className="material-icons">lock</FontIcon>
                    </label>
                    <input
                        className="form-control regInput"
                        type="password"
                        placeholder="Confirm Password"
                        ref="confirmpass"/>
                    <br/>
                    <RaisedButton type="submit" label="Register" primary={true}/>
                </form>

            </div>
        );
    }
}