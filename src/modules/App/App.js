import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import FontIcon from 'material-ui/FontIcon';
import {ToastContainer} from 'react-toastify';

import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';

import {Auth} from '../../services/authentication';
import './App.css';

export class App extends Component {

  logout() {
    Auth.logout();
    Auth.notify("success", "Logout Succesful");
    this
      .props
      .history
      .push("/");
  }

  render() {

    return (

      <div className="App">
        <Toolbar className="toolbar">
          <ToolbarGroup>
            <div className="eventing">
              Eventing
            </div>
          </ToolbarGroup>
          <ToolbarGroup>

            {localStorage.userState
              ? JSON
                .parse(localStorage.getItem("userState"))
                .isLoggedIn
                ? <div className="dash-button">
                    <ToolbarTitle
                      text="Logout"
                      className="button-logout"
                      onClick={() => this.logout()}/>
                  </div>
                : <div>
                    <Link to={"/"} className="button-seperate">
                      <ToolbarTitle text="Home"/>
                    </Link>
                    <Link to={"/reset"} className="button-seperate">
                      <ToolbarTitle text="All Events"/>
                    </Link>
                    <Link to={"/reset"} className="button-seperate">
                      <ToolbarTitle text="About"/>
                    </Link>

                    <Link to={"/reset"} className="button-seperate">
                      <ToolbarTitle text="Create Event"/>
                    </Link>
                  </div>
              : <div>
                <Link to={"/"} className="button-seperate">
                  <ToolbarTitle text="Home"/>
                </Link>
                <Link to={"/reset"} className="button-seperate">
                  <ToolbarTitle text="All Events"/>
                </Link>
                <Link to={"/reset"} className="button-seperate">
                  <ToolbarTitle text="About"/>
                </Link>
                <Link to={"/reset"} className="button-seperate">
                  <ToolbarTitle text="Add Event"/>
                </Link>

              </div>
}
          </ToolbarGroup>
          <ToolbarGroup>
            <div>
              <Link to={"/login"}>
                <FontIcon className="material-icons">input</FontIcon>
                <span>Login/Signup</span>
              </Link>
            </div>
          </ToolbarGroup>
        </Toolbar>
        < ToastContainer autoClose={2000}/>
      </div>

    );
  }
}
