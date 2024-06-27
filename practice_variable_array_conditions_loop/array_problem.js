var fruits = ['apple', 'banana', 'orange'];

var indexBanana = fruits.indexOf('banana');
fruits[indexBanana] = 'mango';
console.log(fruits);
fruits.pop();
fruits.push('watermelon');
console.log(fruits);