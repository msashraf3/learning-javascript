const friends = [12, 45, 32, 22, 44, 62, 19, 69, 87];

// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
// will change the original array
// basically it deletes the items selected from the original array
// it start with the array number but there is no end element we use how many element we will delete after start, we declare that
const partial = friends.splice(2, 5);


console.log(partial); // [ 32, 22, 44, 62, 19 ]
console.log(friends); // [ 12, 45, 69, 87 ] changed the original array

// we can also use splice to add elements after deleting the element
const partial2 = friends.splice(2, 5, 69, 99, 169);
console.log(partial2); // [ 69, 87 ]
console.log(friends); // [ 12, 45, 69, 99, 169 ]