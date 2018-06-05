var nameVar = 'Thomas';
var nameVar = 'Mike';
nameVar = 'William'
console.log('nameVar', nameVar);

let nameLet = 'Agnieszka';
// let nameLet = 'Julie';  //ERROR: Cannot re-define "nameLet"
nameLet = 'July';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
// const nameConst = 'Todd';    //ERROR: Cannot re-define "nameConst"
// nameConst = 'Joe';           //ERROR: Cannot re-assign "nameConst"
console.log('nameConst', nameConst);

// SCOPE
function getPetName() {
    const petName = 'Hal';
    return petName;
}

const petName = getPetName();
console.log(petName);

// Block scoping - Cannot access 'let' or 'const' outside of brackets they are defined in (functions, if statements)
// var statements are not accessible outside of functions they are defined in, but they are from if statements

var fullName = 'Thomas Carmody';

if (fullName) {
    var firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);