import uuid from 'uuid';
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';

import {users, currentUser} from '../data/users';
import {events, userEvent} from '../data/events';

export class Event {
    static addEvent = () => {
        const user = {
            id: uuid.v4(),
            name: name,
            email: email,
            password: password
        }
        users.push(user);
        return user;
    };
}