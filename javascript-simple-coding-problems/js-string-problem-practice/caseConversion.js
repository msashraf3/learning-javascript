//this is to lower case any letter we want
const conversion = 'HELLO';
const lowerCase = conversion.toLowerCase();

console.log(lowerCase);

//this is to uppercase any letter we want
const conversion2 = 'world';
const upperCase = conversion2.toUpperCase();

console.log(upperCase);

//sometimes we need to compare the user input to our own rule then we need this and many different cases also

const userName = 'blackPink';
const userInput = 'blackPinK';

if (userName === userInput) {
    console.log('valid user');
} else {
    console.log('invalid user');
}

//but now we use the lowercase to all then compare
if (userName.toLowerCase() === userInput.toLowerCase()) {
    console.log('valid user');
} else {
    console.log('invalid user');
}