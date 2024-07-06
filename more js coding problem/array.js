const country = 'Bangladesh';
const age = 53;
const isIndependent = true;
const student = {
    id: 121,
    class: 11,
    name: 'Agun'
};
const friends = [13, 14, 11, 17, 21, 16, 15, 20];
function add(num1, num2){
    return num1 + num2;
}

console.log(typeof country); // string
console.log(typeof age); // number
console.log(typeof isIndependent); // boolean
console.log(typeof student); // object
console.log(typeof friends); // object
//to check array we need to use this technique
console.log(Array.isArray(friends)); // true
console.log(Array.isArray(age)); // false
console.log(typeof add); // 

//checking if this exist inside of an array or not
console.log(friends.includes(19)); // false
console.log(friends.includes(21)); // true
//another way of checking, but we don't use it anymore
if (friends.indexOf(21) !== -1) {
    console.log('here it is');
}

//concat : joins two arrays together
const newFriendsAge = [12, 13, 11, 13];
const allFriends = newFriendsAge.concat(friends);
console.log(allFriends);  /* [
    12, 13, 11, 13, 13,
    14, 11, 17, 21, 16,
    15, 20
  ] */
