import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import {currentUser} from '../../data/users.js';
import TextField from 'material-ui/TextField';

import './register.css'
import {Auth} from '../../services/authentication';

export class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            error: "",
            email: "",
            pass : "",
            confirmpass: ""
        }
    }

    handleOnChange(event, newValue){
         this.setState({
             [event.target.name]: newValue
         })
         if(event.target.name === "pass"){
             this.caution();
         }
         
     }

    register(event) {
        event.preventDefault();
        const confirmPass = Auth.passwordCheck(this.state.pass, this.state.confirmpass);
        const emailCheck = Auth.emailCheck(this.state.email);
        const passwordlen = Auth.passwordlength(this.state.pass);
        const confirmlen = Auth.passwordlength(this.state.confirmpass);
        if (this.state.name === "") {
            Auth.notify("error", "Please Enter your Name");
        } else if (this.state.email === "") {
            Auth.notify("error", "Please Enter your Email Address");
        } else if (this.state.pass === "") {
            Auth.notify("error", "Please Enter password");
        } else if (this.state.confirmpass === "") {
            Auth.notify("error", "Please Confirm password");
        } else if (emailCheck) {
            Auth.notify("error", "Invalid Email Address");
        } else if (passwordlen) {
            Auth.notify("error", "Your password must be 6 characters long");
        } else if (confirmlen) {
            Auth.notify("error", "Your password must be 6 characters long");
        } else if (confirmPass) {
            Auth.notify("error", "Password does not match! Enter correct password");
        } else {
            Auth.notify("success", "Registration confirmed");
            const current = Auth.addUser(this.state.name, this.state.email, this.state.pass);
            currentUser.push(current);
            localStorage.setItem("userState", JSON.stringify({isLoggedIn: true}))
            this
                .props
                .history
                .push("/dashboard");
        }
    }

    caution() {
        if (this.state.pass.length > 4) {
            this.setState({error: ""});
        } 
        else {
            this.setState({error: "Your password must be 6 characters long."});
        }
    }

    render() {
        const styles = {
            label:{
                fontFamily: "Raleway",
                color: "white"
            },
            back: {
            backgroundColor: "#062f4f"}
          }

        return (
            <div className="Register">

                <form className="form-group" onSubmit={(e) => this.register(e)}>
                    <div className="input-fields top-field">
                        
                            <FontIcon className="material-icons">person</FontIcon>
                       
                        <TextField
                            className="form-control regInput"
                            type="text"
                            placeholder="Name"
                            name="name"
                            onChange={(event, newValue) => this.handleOnChange(event, newValue)}/>
                    </div>
                    <br/>
                    <div className="input-fields">
                        <label className="col-form-label">
                            <FontIcon className="material-icons">email</FontIcon>
                        </label>
                        <TextField
                            className="form-control regInput"
                            type="text"
                            placeholder="Email"
                            name="email"
                            onChange={(event, newValue) => this.handleOnChange(event, newValue)}/>
                    </div>
                    <br/>
                    <div className="input-fields">
                        <label className="col-form-label">
                            <FontIcon className="material-icons">lock</FontIcon>
                        </label>
                        <TextField
                           
                            className="form-control regInput"
                            type="password"
                            placeholder="Password"
                            
                                errorText={this.state.error}
                            name="pass"
                            onChange={(event, newValue) => this.handleOnChange(event, newValue)}/> 
                    </div>
                    <br/>
                    <div className="input-fields">
                        <label className="col-form-label">
                            <FontIcon className="material-icons">lock</FontIcon>
                        </label>
                        <TextField
                            className="form-control regInput"
                            type="password"
                            placeholder="Confirm Password"
                            name="confirmpass"
                            onChange={(event, newValue) => this.handleOnChange(event, newValue)}/>
                    </div>
                    <br/>
                    <RaisedButton type="submit" overlayStyle={styles.back} labelStyle={styles.label} label="Register" />
                </form>

            </div>
        );
    }
}