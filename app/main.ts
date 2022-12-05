import { Flight } from "../flight";
import { FlightManager } from "../flight-manager";
import { IFlight } from "../iflight";

const flight = new Flight("Wien", "Berlin");
const manager = new FlightManager();
manager.add(flight);

const flightSupplier: () => IFlight = () => ({
  from: "Wien",
  to: "Berlin",
  delayed: true,
});

console.log(manager.search("Wien", ""));

type Direction = "left" | "right" | "up";

function go(direction: Direction) {
  switch (direction) {
    case "left":
      return -1;
    case "right":
      return 1;
    case "up":
      return 0;
    default:
      const exhaustCheck: never = direction;
  }
}

function requestNumber(callback: (n: number) => void) {
  window.setTimeout(() => callback(1), 1000);
}

function requestNumberWithPromise(): Promise<number> {
  return new Promise<number>((resolve) => {
    console.log("starte promise");
    window.setTimeout(() => resolve(2), 2000);
  });
}

console.log(new Date());
requestNumber((n) => {
  console.log(new Date());
  console.log(n);
});

const promise = requestNumberWithPromise();
const updatedPromise = promise.then((n) => {
  console.log(n);
  return n + 1;
});
updatedPromise.then(console.log);

async function print(promise: Promise<number>) {
  const number = await promise;
  console.log(number);
}

console.log("finish");
