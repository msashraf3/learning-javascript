// prob 1
var fruits=['apple','banana', 'orange'];
var fruitsIndex=fruits.indexOf('banana');
console.log(fruitsIndex);
fruits.pop();
fruits.push('watermelon');
fruits[1]='mango';
console.log(fruits);
// prob 2
var resultMe=85;
var resultTom=66;
var resultJane=95;
var resultPeter=56;
var resultJohn=40;

if(resultJohn>=80){
    console.log("You got A grade");
}
else if(resultJohn>=60 ){
    console.log("You got B grade");
}
else if(resultJohn>=50){
    console.log("You got C grade");
}
else if(resultJohn>=40){
    console.log("You got D grade");
}
else{
    console.log('congrats you failed the exam :)');
}
// prob 3
