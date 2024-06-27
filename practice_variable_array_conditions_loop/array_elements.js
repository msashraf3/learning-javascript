var numbers = [45, 68, 78, 56, 89, 98];

//get elements value by index
//array index always start by 0 then increase incrementally
console.log(numbers[0]);
console.log(numbers[3]);
console.log(numbers[2]);

//we can also use a variable for an specific elements
var elements = numbers[1];
console.log(elements);

//we can change/update one arrays elements as we want

numbers[1]=77;
console.log(numbers);

numbers[3]=44;
console.log(numbers);

//we can element position array if we know the value. but if the value doesn't exists in array then it will show -1

var positionIndex=numbers.indexOf(89);
console.log(positionIndex);

var positionIndex=numbers.indexOf(189);
console.log(positionIndex);