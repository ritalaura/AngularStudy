import { Component, Directive } from "@angular/core";

@Component({
    selector: 'events-list',
    templateUrl: './events-list.component.html'

})
export class EventsListComponent{
    event = {
        id: 1,
        name: 'Angular Connect',
        date: '9/26/2026',
        time:'10:00am',
        price: 599.99 ,
        imageUrl: '/assets/images/angularconnect-shield.png',
        location: {
            adress: '1057 DT',
            city: 'London',
            country: 'England'
        }

    }
}