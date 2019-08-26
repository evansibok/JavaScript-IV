/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/


// TASK 1

//   - Build a Person Constructor that takes name and age.
//   - Give persons the ability to greet by returning a string stating name and age.
//   - Give persons the ability to eat edibles.
//   - When eating an edible, it should be pushed into a "stomach" property which is an array.
//   - Give persons the ability to poop.
//   - When pooping, the stomach should empty.

// PREVIOUS CODE

// function Person(name, age) {
//     this.name = name;
//     this.age = Number(age);
//     this.eat = true;
//     this.stomach = [];
// }

// Person.prototype.greet = function () {
//     console.log(`Hello ${this.name}, you are ${this.age} today!`);
// }

// Person.prototype.eatEdibles = function (food) {
//     if (this.eat) {
//         this.stomach.push(food);
//         return `${this.name} your ${this.stomach} is edible`;
//     }
//     return `${this.name}, that isn't edible`;
// }

// Person.prototype.poop = function () {
//     if (this.stomach.length >= 1) {
//         this.stomach = [];
//         return `${this.name} you need to use the restroom`;
//     }
//     return `${this.name} you are good to go`;
// }

// var adam = new Person('Adam', '23');

class Person {
    constructor(data) {
        this.name = data.name;
        this.age = Number(data.age);
        this.eat = true;
        this.stomach = [];
    }
    greet() {
        return `Hello ${this.name}, you are ${this.age} today!`;
    }
    eatEdibles(food) {
        if (this.eat === true) {
            this.stomach.push(food);
            return `${this.name} you are eating ${this.stomach}!`;
        }
    }
    poop() {
        if (this.stomach.length >= 1) {
            this.stomach = [];
            return `${this.name} you need to use the restroom`;
        }
        return `${this.name} you are good to go`;
    }
}

const adam = new Person({ name: "Adam", age: 23 });

// TASK 2

//   - Build a Car constructor that takes model name and make.
//   - Give cars the ability to drive a distance.
//   - By driving a car, the distance driven should be added to an "odometer" property.
//   - Give cars the ability to crash.
//   - A crashed car can't be driven any more. Attempts return a string "I crashed at x miles!", x being the miles in the odometer.
//   - Give cars the ability to be repaired.
//   - A repaired car can be driven again.

// function Car(model, make) {
//     this.make = make;
//     this.model = model;
//     this.odometer = 0;
//     this.crashed = false;
// }

// Car.prototype.drive = function (distance) {
//     if (this.crashed) {
//         return `I crashed at ${this.odometer} miles!`;
//     }
//     this.odometer += distance;
//     return `I am driving at ${this.odometer} miles`;
// }

// Car.prototype.crash = function () {
//     this.crashed = true;
//     return `I crashed at ${this.odometer} miles`;
// }

// Car.prototype.repair = function () {
//     this.crashed = false;
//     return `Your ${this.model} ${this.make} has been repaired`;
// }

class Car {
    constructor(data) {
        this.make = data.make;
        this.model = data.model;
        this.odometer = 0;
        this.crashed = false;
    }
    drive(distance) {
        if (this.crashed) {
            return `I crashed at ${this.odometer} miles`;
        }
        this.odometer += distance;
        return `I am driving at ${this.odometer} miles`;
    }
    crash() {
        this.crashed = true;
        return `I crashed at ${this.odometer} miles`;
    }
    repair() {
        this.crashed = false;
        return `Your ${this.model} ${this.make} has been repaired`;
    }
}


var toyota = new Car(
    {
        model: 'Camry',
        make: 'E530'
    }
);



// TASK 3

//   - Build a Baby constructor that subclasses the Person built earlier.
//   - Babies of course inherit the ability to greet, which can be strange.
//   - Babies should have the ability to play, which persons don't.
//   - By playing, a string is returned with some text of your choosing.

// function Baby(data) {
//     Person.call(this, data.name, data.age);
// }

// Baby.prototype.play = function () {
//     return `I am ${this.name} and I am playing!`;
// }

// const toni = new Baby(
//     {
//         name: "Baby Toni",
//         age: "12 months"
//     });

// toni.play()

class Baby {
    constructor(data) {
        this.name = data.name;
        this.age = data.age;
    }
    play() {
        return `I am ${this.name} and I am playing!`;
    }
}

const toni = new Baby({ name: "Baby Toni", age: "12 months" });

toni.play()


// TASK 4

// Use your imagination and come up with constructors that allow to build objects
// With amazing and original capabilities.Build 3 small ones, or a very
// complicated one with lots of state.Surprise us!

// function Electronics(maker, model) {
//     this.maker = maker,
//         this.model = model
// }

// function Phone(maker, model) {
//     Electronics.call(this, maker, model);
// }

// Phone.prototype.ring = function () {
//     return `${this.maker} ${this.model} is ringing!`;
// }

// function Pager(maker, model) {
//     Phone.call(this, maker, model);
// }

// Pager.prototype = Object.create(Phone.prototype);

// var samsung = new Phone("Samsung", "S9");
// var ericsson = new Pager("Ericsson", "T100");

// samsung.ring();
// ericsson.ring();

class Electronics {
    constructor(data) {
        this.maker = data.maker;
        this.model = data.model;
    }
}

class Phone extends Electronics {
    constructor(data) {
        super(data);
    }
    ring() {
        return `${this.maker} ${this.model} is ringing!`;
    }
}

class Pager extends Phone {
    constructor(data) {
        super(data);
    }
}

var samsung = new Phone({ maker: "Samsung", model: "S9" });
var ericsson = new Pager({ maker: "Ericsson", model: "T100" });

samsung.ring();
ericsson.ring();