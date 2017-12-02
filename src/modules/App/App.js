import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import FontIcon from 'material-ui/FontIcon';
import {ToastContainer} from 'react-toastify';
import RaisedButton from 'material-ui/RaisedButton';

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
    const styles = {
      fontFamily: "Open Sans"
    }
    return (

      <div className="App">
        <div>
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
                      <Link to={"/"} className="button-seperate">
                        <ToolbarTitle className='nav-title' text="Home"/>
                      </Link>
                      <Link to={"/dashboard"} className="button-seperate">
                        <ToolbarTitle className='nav-title' text="Dashboard"/>
                      </Link>
                    </div>
                  : <div>
                      <Link to={"/"} className="button-seperate">
                        <ToolbarTitle className='nav-title' text="Home"/>
                      </Link>

                    </div>
                : <div>
                  <Link to={"/"} className="button-seperate">
                    <ToolbarTitle className='nav-title' text="Home"/>
                  </Link>
                </div>
}
            </ToolbarGroup>
            <ToolbarGroup>
              <div >
                {localStorage.userState
                  ? JSON
                    .parse(localStorage.getItem("userState"))
                    .isLoggedIn
                    ? 
                        <RaisedButton  onClick={() => this.logout()} label="Logout" labelStyle={styles} className="login-button">
                          <FontIcon className="material-icons">input</FontIcon>
                        </RaisedButton>
                      
                    : <Link to={"/login"}>
                        <RaisedButton label="Create Event" labelStyle={styles} className="login-button">
                        </RaisedButton>
                      </Link>
                  : <Link to={"/login"}>
                    <RaisedButton label="Create Event" labelStyle={styles} className="login-button">
                    </RaisedButton>
                  </Link>}
              </div>
            </ToolbarGroup>
          </Toolbar>
        </div>

        <div>
         
          < ToastContainer autoClose={1800}/>
        </div>
      </div>

    );
  }
}
