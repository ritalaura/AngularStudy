import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `
    <h2>Olá nenenzão</h2>
    <img src="/assets/images/basic-shield.png">
    <events-list></events-list>
  `
})
export class EventsAppComponent {
  title = 'ng-fundamentals';
}
