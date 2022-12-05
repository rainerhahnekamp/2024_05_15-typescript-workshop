import { Flight } from "./flight";
import { FlightManager } from "./flight-manager";

const flight = new Flight("Wien", "Berlin");
const manager = new FlightManager();
manager.add(flight);

console.log(manager.search("Wien", ""));
