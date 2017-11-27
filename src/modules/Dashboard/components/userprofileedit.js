import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import {currentUser} from '../../../data/users'
import {Auth} from '../../../services/authentication';

/**
 * Dialogs can be nested. This example opens a Date Picker from within a Dialog.
 */
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
   

    return (
      <div>
        <RaisedButton label="Edit Profile" onClick={this.handleOpen} />
        <Dialog
          title="Edit Profile"
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
         <form onSubmit={(e) => this.infoEdit(e)}>
                        <label className="col-form-label">
                            Name:
                        </label>
                        <input
                            className="form-control"
                            onChange={(e) => this.handleChange(e)}
                            refs="name"
                            type="name"
                            value={this.state.name}/>

                        <label className="col-form-label">
                            Email:
                        </label>
                        <input
                            className="form-control regInput"
                            name="email"
                            type="email"
                            value={currentUser[0].email} disabled/>
                        <br/>
                        <RaisedButton type="submit" label="Update Profile" primary={true}/>
                    </form>
        </Dialog>
      </div>
    );
  }
}