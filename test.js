// function Person(id, vorname, nachname) {
//   this.id = id;
//   this.vorname = vorname;
//   this.nachname = nachname;
//
//   this.toString = function () {
//     return `${this.nachname}, ${this.vorname}`;
//   };
// }

class PersonManager {
  constructor(name) {
    this.name = name;
    this.people = [];
  }

  add(person) {
    this.people.push(person);
  }

  count() {
    return this.people.length;
  }

  getById(id) {
    for (var person of this.people) {
      if (person.id === id) {
        return person;
      }
    }

    return null;
  }

  print() {
    var printer = (person) => {
      console.log(`${this.name}: ${person.toString()}`);
    };
    this.people.forEach(printer);
  }
}

var rudolf = new Person(1, "Rudolf", "Weber", function () {
  return vorname;
});
var anna = new Person(2, "Anna", "Schmidt", function () {
  return nachname;
});
var manager = new PersonManager("Personalabteilung");
manager.add(rudolf);
manager.add(anna);
manager.print();

// rudolf.a = null;
rudolf.birthday = new Date();
var franz = { vorname: "Franz" };
console.log(rudolf.birthday instanceof Date);

function PersonFn(id) {
  this.id = id;
}

var sandra = new PersonFn(1, "Sandra", "Huber");
console.log(sandra);
console.log(sandra.id);

// var name = "OS-123";

const flight = {
  id: 2,
  name: "OS-121",
  pilot: {
    id: "1",
    name: "Rudolf",
    toString: function () {
      return this.name;
    },
  },
};

var fn = flight.pilot.toString;
fn.call(flight.pilot);
fn.apply(flight.pilot, []);

var boundFn = fn.bind(flight.pilot);
boundFn();

function log(fn) {
  console.log(fn());
}

function bind(fn, context) {
  console.log(fn.call(context));
  return function () {
    return fn.call(context);
  };
}

// log(flight.pilot.toString.bind(flight.pilot));
log(bind(flight.pilot.toString, flight.pilot));

// Neue Variante

// falsy/truthy

function printTruthy(value) {
  if (value) {
    console.log("passt");
  } else {
    console.log("passt nicht");
  }
}

printTruthy(0);
printTruthy("");

console.log(Object.entries(rudolf));

for (var key in rudolf) {
  console.log(key);
}

let a = 1;
function add(number) {
  console.log(number + a);
}

a = 2;
add(2);

function foo() {
  try {
    throw "geht nicht";
  } catch (e) {
    console.log(e);
    throw "geht immer noch nicht";
  } finally {
    console.log("finally");
  }
}
// foo();
