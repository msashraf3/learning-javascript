const friends = [12, 45, 32, 22, 44, 62, 19, 69, 87];

//to get the specific items we use .slice(start, end)
const partial = friends.slice(2, 5);
console.log(partial);// [32, 22, 44] starts from index 2 and ends before 5 index

//but the original array didn't changed just because we used slice
console.log(friends); // [12, 45, 32, 22, 44, 62, 19, 69, 87]
