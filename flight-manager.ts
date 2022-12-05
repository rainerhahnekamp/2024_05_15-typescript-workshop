import { Flight } from "./flight";

export class FlightManager {
  private flights: Flight[] = [];

  add(flight: Flight) {
    this.flights.push(flight);
  }

  search(from: string, to: string): Flight[] {
    return this.flights.filter(
      (flight) => flight.to === to || flight.from === to
    );
  }

  get count() {
    return this.flights.length;
  }
}
