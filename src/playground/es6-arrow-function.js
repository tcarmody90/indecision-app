// ES5 Function
const square = function(x) {
    return x * x;
};

console.log(square(3));

// ES6 Arrow Function
// const squareArrow = (x) => {
//     return x * x;
// };

const squareArrow = (x) => x * x;

console.log(squareArrow(9));

// NOTE: ES6 Arrow Functions are ALWAYS anonymous.

console.log("CHALLENGE TIME");

// get first name

const getFirstName = (fullname) => {
    return fullname.split(' ')[0];
}

const getLastName = (fullname) => fullname.split(' ')[1];

console.log(getFirstName('Todd Jones'));
console.log(getLastName('Mike Smith'));