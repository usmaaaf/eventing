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
            passerror: "",
            nameError: "",
            emailError: "",
            confirmError: "",
            email: "",
            pass: "",
            confirmpass: ""
        }
    }

    handleOnChange(event, newValue) {
        this.setState({
            [event.target.name]: newValue
        });
        if(event.target.name === "pass"){
            this.caution();
        }
    }

    register(event) {
        event.preventDefault();
        const confirmPass = Auth.passwordCheck(this.state.pass, this.state.confirmpass);
        const emailCheck = Auth.emailCheck(this.state.email);
        if (this.state.name === "") {
            this.setState({nameError: "Please Enter your name.", passerror: null, emailError: null, confirmError: null});
        } else if (this.state.email === "") {
            this.setState({nameError: null, passerror: null, emailError: "Please Enter your Email Address", confirmError: null});
        } else if (emailCheck) {
            this.setState({nameError: null, passerror: null, emailError:  "Invalid Email Address", confirmError: null});
        } else if (this.state.pass === "") {
            this.setState({nameError: null, passerror: "Please Enter your name.", emailError: null, confirmError: null});
        } else if (this.state.confirmpass === "") {
            this.setState({nameError: null,confirmError: "Please Confirm password", passerror: null, emailError: null});
        } else if (confirmPass) {
            this.setState({nameError: null,confirmError:  "Password does not match! Enter correct password", passerror:  "Password does not match! Enter correct password", emailError: null});
        }
        else {
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
            if (this.state.pass.length <= 4) {
                this.setState({passerror: "Your password must be 6 characters long."});
            } else {
                this.setState({passerror: ""});
            }
    }

    changeTab() {
        this
            .props
            .changeTab(0);
    }

    render() {
        const styles = {
            label: {
                fontFamily: "Raleway",
                color: "white"
            },
            back: {
                backgroundColor: "#062f4f"
            },
            underlineStyle: {
                borderColor: "#062f4f"
            }
        }

        return (
            <div className="Register">

                <form className="form-group" onSubmit={(e) => this.register(e)}>
                    <div className="input-fields top-field">

                        <FontIcon className="material-icons">person</FontIcon>

                        <TextField
                            underlineFocusStyle={styles.underlineStyle}
                            errorText={this.state.nameError}
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
                            underlineFocusStyle={styles.underlineStyle}
                            errorText={this.state.emailError}
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
                            underlineFocusStyle={styles.underlineStyle}
                            className="form-control regInput"
                            type="password"
                            placeholder="Password"
                            errorText={this.state.passerror}
                            name="pass"
                            onChange={(event, newValue) => this.handleOnChange(event, newValue)}/>
                    </div>
                    <br/>
                    <div className="input-fields">
                        <label className="col-form-label">
                            <FontIcon className="material-icons">lock</FontIcon>
                        </label>
                        <TextField
                            underlineFocusStyle={styles.underlineStyle}
                            errorText={this.state.confirmError}
                            type="password"
                            placeholder="Confirm Password"
                            name="confirmpass"
                            onChange={(event, newValue) => this.handleOnChange(event, newValue)}/>
                    </div>
                    <br/>
                    <RaisedButton
                        type="submit"
                        overlayStyle={styles.back}
                        labelStyle={styles.label}
                        label="Register"/>
                    <a className="change-tab" onClick={() => this.changeTab()}>
                        <p>Already have an account?</p>
                    </a>
                </form>

            </div>
        );
    }
}