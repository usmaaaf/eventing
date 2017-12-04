import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import TextField from 'material-ui/TextField';

import {currentUser} from '../../data/users.js';
import {Auth} from '../../services/authentication';
import './login.css';

export class Login extends Component {

    constructor(){
        super();
        this.state = {
                email: "",
                pass : "",
                passerror: "",
                emailerror: "",
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
            this.setState({ passerror: null, emailError: "Invalid Email Address"});
        } else if (!isLoggedIn) {
            Auth.notify("error", 'Wrong email or Password');
        } else {
            currentUser.push(isLoggedIn[0]);
            Auth.notify("success", "Login Successful!");
            this
                .props
                .history
                .push("/dashboard");
            localStorage.setItem("userState", JSON.stringify({isLoggedIn: true}))
        }
    }

    changeTab(){
        this.props.changeTab(1);
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
            <div className="Login">

                <form onSubmit={(e) => this.userMatch(e)}>
                    <div className="input-fields top-field">
                        <FontIcon className="material-icons">email</FontIcon>

                        <TextField
                         underlineFocusStyle={styles.underlineStyle}
                        id="email"
                        name="email"
                        errorText={this.state.emailError}
                            className="form-control loginInput"
                            type="text"
                            placeholder="Email"
                            onChange={(event, newValue) => this.handleOnChange(event, newValue)}/>
                    </div>
                    <br/>
                    <div className="input-fields">
                        <FontIcon className="material-icons">lock</FontIcon>

                        <TextField
                         underlineFocusStyle={styles.underlineStyle}
                        name="pass"
                        onChange={(event, newValue) => this.handleOnChange(event, newValue)}
                        id="pass"
                        type="password"
                        placeholder="Password"
                        />
                    </div>
                    <br/>
                    <RaisedButton overlayStyle={styles.back} labelStyle={styles.label} type="submit" label="Login"/>
                    <a className="change-tab" onClick={() => this.changeTab()}><p>Don't have an account?</p></a>
                </form>

            </div>
        );
    }
}