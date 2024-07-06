//today we gonna learn about fibonacci series
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, .... this is a fibonacci series. 
//how this thing works? every number is the sum of the previous two numbers
//for instace 0 and 1 sum is 1 and 1 and 1 sum is 2 and then continues to 1 and 2 sum is 3 etc
/* 

fibo[3] = fibo[2] + fibo[1]
fibo[4] = fibo[3] + fibo[2]
fibo[5] = fibo[4] + fibo[3]
fibo[100] = fibo[99] + fibo[98]
fibo[564] = fibo[563] + fibo[562]
fibo[n] = fibo[n-1] + fibo[n-2]
fibo[i] = fibo[i-1] + fibo[i-2]

*/

const fibo = [0, 1];
for (let i = 2; i <= 10; i++) {
    fibo[i] = fibo[i-1] + fibo[i-2];
}
console.log(fibo);