// arguments object - no longer bound with arrow functions
// if you need arguments, stick with ES5

const add = (a, b) => {
    // console.log(arguments);     //ERROR: arguments is not defined for arrow functions
    return a + b;
};
console.log(add(55,1, 1001));


// this keyword - no longer bound with arrow functions

const user = {
    name: 'Thomas',
    cities: ['Houston', 'Pearland', 'Katy'],
    printPlacesLived: function() {
     console.log(this.name);
     console.log(this.cities);
     // const that = this;
     this.cities.forEach((city) => {
         console.log(this.name + ' has lived in ' + city);  // the 'this' keyword is not available withour arrow functions, so we must use a workaround, 'that'
     });
    }
};

user.printPlacesLived();


// Arrow functions allow 'this' to take on the properties of the parent, so it is useful inside the above 'forEach', however...
// you should not use arrow functions to create the method 'printPlacesLived' because the 'this' keyword will return undefined.

// ES6 Method Definition Syntax:

const newUser = {
    name: 'Thomas',
    cities: ['Houston', 'Pearland', 'Katy'],
    printPlacesLived() {
     console.log(this.name);
     console.log(this.cities);
     this.cities.forEach((city) => {
         console.log(this.name + ' has lived in ' + city);  // the 'this' keyword is not available withour arrow functions, so we must use a workaround, 'that'
     });
    }
};

newUser.printPlacesLived();

// As you can see, the new ES6 way to define methods of an object doesn't use the 'function' keyword

// Map allows you to actually transform the items, where the 'forEach' only allows you to display the items

const mapUser = {
    name: 'Thomas',
    cities: ['Houston', 'Pearland', 'Katy'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};

console.log(mapUser.printPlacesLived());

// Challenge area

const multiplier = {
  // numbers - array of numbers
  numbers: [2, 5],
  // multiplyBy - single number
  multiplyBy: 5,
  // multiply - return a new array where the numbers have been multiplied
  multiply() {
      return this.numbers.map((num) => num * this.multiplyBy);
  }
};

  // expect an array back of the numbers multiplied by eachother
console.log(multiplier.multiply());