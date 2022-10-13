import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, ActivatedRouteSnapshot} from '@angular/router';

// import {
//   EventsListComponent,
//   EventThumbnailComponent,
//   EventService,
//   EventDetailsComponent,
//   CreateEventComponent,
//   EventListResolver

// } from './events/index'

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import {ToastrService } from './common/toastr.service' 
import { appRoutes } from './routes';
import { Error404Component} from 'src/errors/404.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event.thumbnail.component';
import { EventDetailsComponent } from './events/event-details';
import { CreateEventComponent } from './events/create-event.component';
import { EventService } from './events/shared';
import { EventListResolver } from './events/shared/events-list-resolver.service';




@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavBarComponent,
    CreateEventComponent,
    Error404Component
  ] ,
  providers: [
    EventService,
     ToastrService,
      EventRouteActivator,
      EventListResolver,
      // {
      //    provide: 'canDeactivateCreateEvent',
      //    useValue: checkDirtyState
      //   }
    ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent) {
 if (component.isDirty)
 return window.confirm('You have not saved this event, do you really want to cancel?')
return true
}