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
    constructor(data){
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
            return `${this.name} your ${this.stomach} is edible`;
        }
        return `${this.name}, that isn't edible`;
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
    constructor(data){
        this.maker = data.maker;
        this.model = data.model;
    }
}

class Phone extends Electronics {
    constructor(data){
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

var samsung = new Phone({maker: "Samsung", model: "S9"});
var ericsson = new Pager({maker: "Ericsson", model: "T100"});

samsung.ring();
ericsson.ring();