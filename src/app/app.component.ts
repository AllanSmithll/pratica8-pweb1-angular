import { Component } from '@angular/core';
import { Event } from '../shared/models/Event';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title: string = 'Gerenciador de Eventos';
  event: Event;
  events: Array<Event>;

  constructor() {
    this.event = new Event();
    this.events = new Array<Event>();
  }

  inserirEvent(): void {
    this.events.push(this.event);
    this.event = new Event();
  }
}
