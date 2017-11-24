import uuid from 'uuid';
import 'react-toastify/dist/ReactToastify.min.css';

import {users, currentUser} from '../data/users';
import {events, userEvent} from '../data/events';

export class Event {

    static addEvent = (title, catogery, description, start, end, address, latlng) => {
        console.log(title, catogery, description, start, end, address, latlng);
        const event = {
            userId: currentUser[0].id,
            id: uuid.v4(),
            title: title,
            catogery: catogery,
            description: description,
            startDate: start,
            endDate: end,
            address: address,
            latlng: latlng,
        }
        events.push(event);
        return event;
    };

    static currentEvent = () => {
        events.map((event) => {
            if(event.userId === currentUser[0].id){
                userEvent.push(event);
            }
        });
    };
}