import { Person } from "./person.ts";

export class Pilot extends Person {
  constructor(id, vorname, nachname, aircraft) {
    super(id, vorname, nachname);
    this.aircraft = aircraft;
  }

  canFly(aircraft) {
    return this.aircraft === aircraft;
  }

  toString() {
    return "Pilot: " + super.toString();
  }
}
