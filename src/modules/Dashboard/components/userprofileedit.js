import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import {currentUser} from '../../../data/users'
import {Auth} from '../../../services/authentication';
import TextField from 'material-ui/TextField';
import ContentClear from 'material-ui/svg-icons/content/clear';

export class UserEdit extends Component {
    constructor(){
        super();
        this.state = {
            open: false,
            name: ''
        }
    }

    componentDidMount() {
        console.log(currentUser[0].name);
        this.setState({name: currentUser[0].name});
    };

    infoEdit(e) {
        e.preventDefault();
        Auth.notify("success", "Name changed successfully");
        Auth.updateUser(this.state.name);
        this.setState({open: false});
    }
    handleChange(event) {
        this.setState({
            name: event.target.value
        });
    }


  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

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
          },
          input:{
            textAlign: "center",
            fontFamily: "Raleway",
            color: "#062f4f",
            fontWeight: "Bold",
            fontSize: "1.2em"
          },
          title:{
              backgroundColor: "#1D2731",
              color: "white"
          }
    }

    const actions=[
        <RaisedButton overlayStyle={styles.back} labelStyle={styles.label} type="submit" label="Update Profile" onClick={(e) => this.infoEdit(e)} />
    ]
    

    return (
        
        
      <div className="edit-user">
        <RaisedButton overlayStyle={styles.back} labelStyle={styles.label} label="Edit Profile" onClick={this.handleOpen} />
        <Dialog
        titleStyle={styles.title}
        actions={actions}
        title={<div className="dialog-head"><span>Edit Profile</span><ContentClear onClick={() => this.handleClose()} className="iconic"/></div>}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
         <form onSubmit={(e) => this.infoEdit(e)}>
         <div className="edit-form" >
                        <label className="input-edit">
                            Name:
                        </label>
                        <TextField
                         inputStyle={styles.input}
                         underlineFocusStyle={styles.underlineStyle}
                            className="input-edit"
                            onChange={(e) => this.handleChange(e)}
                            refs="name"
                            type="name"
                            value={this.state.name}/>

                        <label className="input-edit">
                            Email:
                        </label>
                        <TextField
                        inputStyle={styles.input}
                        underlineFocusStyle={styles.underlineStyle}
                            className="input-edit regInput"
                            name="email"
                            type="email"
                            value={currentUser[0].email} disabled/>
                        <br/>
                        </div>
                        
                    </form>
        </Dialog>
      </div>
    );
  }
}