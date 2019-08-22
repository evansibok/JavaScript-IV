// #### Person

// * First we need a Person class. This will be our `base-class`
// * Person receives `name` `age` `location` all as props
// * Person receives `speak` as a method.
// * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props

// CODE here for your Lambda Classes

class Person {
    constructor(data){
        this.name = data.name;
        this.age = data.age;
        this.location = data.location;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}!`);
    }
}

// #### Instructor

// * Now that we have a Person as our base class, we'll build our Instructor class.
// * Instructor uses the same attributes that have been set up by Person
// * Instructor has the following unique props:
// * `specialty` what the Instructor is good at i.e. 'redux'
// * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
// * `catchPhrase` i.e. `Don't forget the homies`
// * Instructor has the following methods:
// * `demo` receives a`subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
// * `grade` receives a`student` object and a`subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'

class Instructor extends Person {
    constructor(data){
        super(data);
        this.specialty = data.specialty;
        this.favLanguage = data.favLanguage;
        this.catchPhrase = data.catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}.`);
    }
    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}!`);
    }
}



// #### Student

// * Now we need some students!
// * Student uses the same attributes that have been set up by Person
// * Student has the following unique props:
// * `previousBackground` i.e.what the Student used to do before Lambda School
// * `className` i.e.CS132
// * `favSubjects`.i.e.an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// * Student has the following methods:
// * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
// * `PRAssignment` a method that receives a subject as an argument and logs out that the`student.name has submitted a PR for {subject}`
// * `sprintChallenge` similar to PRAssignment but logs out`student.name has begun sprint challenge on {subject}`

class Student extends Person {
    constructor(data){
        super(data);
        this.previousBackground = data.previousBackground;
        this.className = data.className;
        this.favSubjects = data.favSubjects; //*
    }
    listsSubjects() {
        console.log(this.favSubjects); //*
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}!`); // *
    }
    sprintChallenge() {
        console.log(`${this.name} has begun sprint challenge on ${subject}!`);
    }
}



// #### Project Manager

// * Now that we have instructors and students, we'd be nowhere without our PM's
// * ProjectManagers are extensions of Instructors
// * ProjectManagers have the following unique props:
// * `gradClassName`: i.e.CS1
// * `favInstructor`: i.e.Sean
// * ProjectManagers have the following Methods:
// * `standUp` a method that takes in a slack channel and logs`{name} announces to {channel}, @channel standy times!​​​​​
// * `debugsCode` a method that takes in a student object and a subject and logs out `{ name } debugs { student.name } 's code on {subject}`

class ProjectManager extends Instructor {
    constructor(data){
        super(data);
        this.gradClassName = data.gradClassName;
        this.favInstructor = data.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @${channel} standby times!`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student}'s code on ${subject}!`)
    }
}

let gabe = new Instructor({
    name: "Gabe",
    specialty: "Frontend Web Development",
    favLanguage: "JavaScript",
    catchPhrase: `Yo! What's up`,
});

let evans = new Student({
    name: "Evans",
    previousBackground: "UX Design",
    className: "WEBEU3",
    favSubjects: ["CSS", "JavaScript"]
});

let toby = new ProjectManager({
    name: "Toby",
    gradClassName: "WEBEU3",
    favInstructor: "Gabe",
})