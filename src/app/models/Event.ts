export class Event {
  id: number;
  name: string;
  date: Date;
  location: string;

  constructor(id: number, name: string, date: Date, location: string) {
    this.id = id;
    this.name = name;
    this.date = date;
    this.location = location;
  }
}
