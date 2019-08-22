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
        console.log(`Hello my name is ${this.name}, I am from ${this.location}!`)
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

