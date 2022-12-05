import { Flight } from "./flight";
import { FlightManager } from "./flight-manager";
import { IFlight } from "./iflight";

const flight = new Flight("Wien", "Berlin");
const flight2: IFlight = { from: "Wien", to: "London" };
const manager = new FlightManager();
manager.add(flight);
manager.add(flight2);
manager.add({ from: "berlin", to: "Salzburg" });
manager.print();

console.log(manager.search("Wien", ""));

function log(value: unknown) {
  if (typeof value === "string") {
    console.log(value.toLowerCase());
  } else if (value instanceof Date) {
    console.log(value.getTime());
  }
}
