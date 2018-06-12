// define a class that is like a blueprint, which can be re-used. Each time we have different features, however.
// Assume your website sales cars. We'd need a car blueprint that we can re-use for each car:

// Car
// make
// model
// vin
// getDescription

// With classes we uppercase the first letter

class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        // return 'Hi, ' + this.name + '!'; <- ES5, vs ES6 template strings:
        return `Hi, I am a ${this.name}!`;  // use backtick with ${} for vals.
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
    
}    

class Student  extends Person {
    constructor(name, age, major = 'Undeclared') {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    hasLocation() {
        return !!this.homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if (this.hasLocation()) {
            greeting += ` I'm visiting from ${this.homeLocation}.`;
        }
        return greeting;
    }
}

// Traveler -> Person
// Add support for homeLocation
// Override getGreeting
// Hi. I am Thomas Carmody. I'm visiting from Houston.

const me = new Person('Thomas Carmody', 27);
console.log(me.getGreeting());
console.log(me.getDescription());

const other = new Person();
console.log(other.getGreeting());
console.log(other.getDescription());

const stu = new Student('Johnny Walker', 25, 'History');
console.log(stu);
console.log(stu.hasMajor());
console.log(stu.getDescription());

const odysseus = new Traveler('Odysseus', 52, 'Ithaca');
console.log(odysseus);
console.log(odysseus.getGreeting());