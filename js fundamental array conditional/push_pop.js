var number=[69, 59, 49, 39];
console.log(number);
// adding number
number.push(29);
console.log(number);

// removing one number
number.pop();
console.log(number);

// which one is removed
var which=number.pop();
console.log(number);
console.log(which+' '+'has been removed');
// adding and removing something from the start
number.unshift(20);
console.log(number);
number.shift();
console.log(number);