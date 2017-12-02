import uuid from 'uuid';
import 'react-toastify/dist/ReactToastify.min.css';


import {currentUser} from '../data/users';
import {events} from '../data/events';


export class Event {
    static deleteEvent = (event)=>{
        console.log(event);
        const eventNew = events.findIndex((events) => (events.id === event.id));
        console.log(eventNew);
        events.splice(eventNew, 1);
        return events;
    };
    
    static updateEvent = (updatedevent) => {
        console.log("Event Update Started", updatedevent, updatedevent.id);
            events.map((event) => {
                if (event.id === updatedevent.id) {
                    console.log("YES");
                    event.title = updatedevent.title
                    event.catogery= updatedevent.catogery
                    event.description= updatedevent.description
                    event.startDate= updatedevent.start
                    event.endDate= updatedevent.end
                    event.address= updatedevent.address
                    event.latlng = updatedevent.latlng
                }
                return event;
            })
            return events;
        };
    

    static addEvent = (title, catogery, description, start, end, address, latlng) => {
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
        return events;
    };

    // static currentEvent = () => {
    //     // userEvent.pop();
    //     console.log("Ï am events", events);
    //     const current = events.map((event) =>{ 
    //         if(event.userId === currentUser[0].id){
    //             userEvent.push(event);
    //         }
    //     })
    //     return userEvent;
    //     };
}