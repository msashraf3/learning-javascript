//we don't need math related problem that much but sometimes it does come in handy. For Instance

//to get the to the power value. we need to use the pow and math function
const toThePower = Math.pow(3, 8);
console.log(toThePower);

//let us check some problem and solve it. For Instance if someones age is greater than 5 year compared to the other one then they can't be friends. But there is an issue

const age1 = 25;
const age2 = 45;
const ageGap = age1 - age2;
console.log(ageGap);

//age gap is more than 5 but it still giving us the if conditions output
if (ageGap < 5) {
    console.log('You guys can be friends');
} else {
    console.log('No just stay apart');
}

// for that reason we use a function under math called abs. 
const ageGap2 = Math.abs(age1 - age2);
console.log(ageGap2);

if (ageGap2 < 5) {
    console.log('Let us become friends');
} else {
    console.log('Let us be strangers');
}

//sometimes we need to round off some numbers. for example the things that supermarkets do

//as we know if somethings value is point .50  and up then us round off by upper number otherwise round off by the same number
const roundOffNum = 2.3456;
const roundOff = Math.round(roundOffNum);
console.log(roundOff);
//but we can always set for up or down as well
const roundOffUp = Math.ceil(roundOffNum);
console.log(roundOffUp);
//we can also set the value to be down always
const roundOffDown = Math.floor(roundOffNum);
console.log(roundOffDown);

//we can genarate random number as well
console.log(Math.random());
//also can take 1 to 100 number
console.log(Math.random()*100);
//this always gives us round number but we can actually use roundoff to get full number
console.log(Math.round(Math.random()*100));


//we can generate ludo dice model. example how many times a number come to play. we will use for loop 10 times. we will into it by 6 because we are giving a dice
for (let i = 0; i <= 10; i++) {
    console.log(Math.round(Math.random()*6));
    
}