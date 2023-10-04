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
  editingMode = false;
  eventToEdit: Event | null = null;
  events: Array<Event>;

  constructor() {
    this.event = new Event();
    this.events = new Array<Event>();
  }

  addEvent(): void {
    this.event.id = this.generateEventId();
    this.events.push(this.event);
    this.event = new Event();
  }

  editEvent(eventToEdit: Event): void {
    this.editingMode = true;
    this.eventToEdit = eventToEdit;
    this.event.name = eventToEdit.name;
    this.event.date = eventToEdit.date;
    this.event.location = eventToEdit.location;
    this.event.description = eventToEdit.description;
  }

  saveEdit(): void {
    if (this.eventToEdit) {
      const index = this.events.findIndex((event) => event.id === this.eventToEdit?.id);
      if (index !== -1) {
        this.events[index] = { ...this.event };
        this.editingMode = false;
        this.eventToEdit = null;
        this.event = new Event();
      }
    }
  }  

  deleteEvent(eventToDelete: Event): void {
    const index = this.events.findIndex((event) => event.id === eventToDelete.id);
    if (index !== -1) {
      this.events.splice(index, 1);
    }
  }

  private generateEventId(): number {
    return this.events.length + 1;
  }
}
