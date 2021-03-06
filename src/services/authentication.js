import uuid from 'uuid';
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';

import {users, currentUser} from '../data/users';

export class Auth {

    // login Page
    static login = (email, password) => {
        const log = users.filter((user) => user.email === email && user.password === password);
        if (log.length > 0) {
            return log;
        } else {
            return false;
        }
    };

    //Register
    static passwordCheck = (password, confirmpass) => {
        if (password !== confirmpass) {
            return true;
        } else {
            return false;
        }
    };


    static emailCheck = (email) => {
        var re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!re.test(email)) {
            return true;
        } else {
            return false;
        }
    }

    static addUser = (name, email, password) => {

        const user = {
            id: uuid.v4(),
            name: name,
            email: email,
            password: password
        }
        users.push(user);
        return user;
    }

    //Dashboard
    static updateUser = (name) => {
        users.map((user) => {
            if (user.id === currentUser[0].id) {
                user.name = name;
            }
            return user;
        })
    }

    //Logout
    static logout = () => {
        localStorage.clear();
        console.log(currentUser);
        currentUser.pop();
        console.log(currentUser);
    }
    

    //toastr
    static notify = (condition, value) => {
        if (condition === "success") {
            toast.success(value, {position: toast.POSITION.TOP_CENTER});
        } else if (condition === "error") {
            toast.error(value, {position: toast.POSITION.TOP_CENTER});
        } else if (condition === "warn") {
            toast.warn(value, {position: toast.POSITION.TOP_CENTER});
        }
    };


}