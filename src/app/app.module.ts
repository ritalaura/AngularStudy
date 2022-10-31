import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, ActivatedRouteSnapshot} from '@angular/router';
import { AuthService } from 'src/user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { HttpClientModule } from '@angular/common/http';

import { TOASTR_TOKEN,
        Toastr,
         CollapsibleWellComponent,
        SimpleModalComponent, 
        JQ_TOKEN,
        ModalTriggerDirective
      } from './common/index'  
import { LocationValidator } from './events';
import { VoterService } from './events/event-details';
import { DurationPipe } from './events/shared';
import { UpvoteComponent } from './events/event-details';
import { appRoutes } from './routes';
import { Error404Component} from 'src/errors/404.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event.thumbnail.component';
import { CreateSessionComponent, EventDetailsComponent } from './events/event-details';
import { CreateEventComponent } from './events/create-event.component';
import { EventService } from './events/shared';
import { EventListResolver } from './events/events-list-resolver.service';
import { SessionListComponent } from './events/event-details';
import { EventResolver } from './events/event-resolver.service';


let toastr: Toastr = window ['toastr'];
let jQuery = window ['$'];



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
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
    ModalTriggerDirective,
    SimpleModalComponent, 
    UpvoteComponent,
    LocationValidator,


  ] ,
  providers: [
    EventService,
    { provide: TOASTR_TOKEN, useValue: toastr},
    { provide: JQ_TOKEN, useValue: jQuery},
      EventResolver,
      EventListResolver,
      AuthService,
      VoterService,

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