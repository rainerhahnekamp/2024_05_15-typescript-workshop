import { Flight } from "./flight";
import { IFlight } from "./iflight";

export class FlightManager {
  private flights: IFlight[] = [];

  add(flight: IFlight) {
    this.flights.push(flight);
  }

  search(from: string, to: string): IFlight[] {
    return this.flights.filter(
      (flight) => flight.to === to || flight.from === to
    );
  }

  get count() {
    return this.flights.length;
  }

  print() {
    this.flights.forEach((flight) => {
      if (flight.log) {
        flight.log();
      }
    });
  }
}
