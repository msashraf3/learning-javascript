let first = 69;
let second = 59;

console.log(first, second);

//now if we want to change the value with each other variable then
//this will resulting the first one and second variable with the same value
first = second;
second = first;
console.log(first, second);

//if we want to change the situation then we have to use the temp variable to store the data then execute
//approach 1
const temp = first;
first = second;
second = temp;
console.log(first, second);

//we can use destruction to do the same.
//approach 2
[ first, second ] = [ second, first ];
console.log(first, second);