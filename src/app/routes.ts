import { Routes } from "@angular/router";
import {
     EventsListComponent, 
     EventDetailsComponent,
     CreateEventComponent,
     EventListResolver,
     CreateSessionComponent,
     EventResolver
} from './events/index'
import { Error404Component } from "src/errors/404.component";
import { EventRouteActivator } from "./events/event-details/event-route-activator.service";


export const appRoutes: Routes = [
    { path: 'events/new', component:CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
    { path: '404', component: Error404Component},
    { path: 'events/session/new', component:CreateSessionComponent},
    { path: 'events', component: EventsListComponent, resolve:  {events:EventListResolver} },
    { path: 'events/:id', component:EventDetailsComponent, resolve: {event: EventResolver}},
    { path: '', redirectTo: '/events', pathMatch: 'full'},
    {   path: 'user',
        loadChildren: () => import ('../user/user.module')
        .then(m => m.UserModule)
    }
]