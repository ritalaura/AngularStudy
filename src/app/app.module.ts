import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, ActivatedRouteSnapshot} from '@angular/router';
import { AuthService } from 'src/user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { TOASTR_TOKEN, Toastr } from './common/toastr.service' 
import { CollapsibleWellComponent } from './common/collapsible-well.component' 
import { DurationPipe } from './events/shared';

import { appRoutes } from './routes';
import { Error404Component} from 'src/errors/404.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event.thumbnail.component';
import { CreateSessionComponent, EventDetailsComponent } from './events/event-details';
import { CreateEventComponent } from './events/create-event.component';
import { EventService } from './events/shared';
import { EventListResolver } from './events/shared/events-list-resolver.service';
import { SessionListComponent } from './events/event-details';


declare let toastr: Toastr;


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavBarComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent, 
    CollapsibleWellComponent,
    DurationPipe,

  ] ,
  providers: [
    EventService,
    { provide: TOASTR_TOKEN, useValue: toastr},
      EventRouteActivator,
      EventListResolver,
      AuthService,

      {
        provide: 'canDeactivateCreateEvent',
        useValue: checkDirtyState
      }
    ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent) {
 if (component.isDirty)
 return window.confirm('You have not saved this event, do you really want to cancel?')
return true
}