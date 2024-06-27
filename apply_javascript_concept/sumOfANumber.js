//add numbers from 1 to 7

let addition = 0;

for (let i = 0; i <= 7; i++) {

    addition += i;

}

console.log(addition);

//now lets make this in a function (no parameter has return)
function additionOfSum (){
    let sum = 0;
    for (let i = 0; i <= 7; i++) {
        const element = i;
        sum += element;
    }
    return sum;
}

console.log(additionOfSum());

// now lets make this in a function (has parameter has return)

function secondAdditionOfSum (numbers){
    let sum = 0;
    for (let i = 0; i <= numbers; i++) {
        const element = i;
        sum += element;
    }
    return sum;
}

console.log(secondAdditionOfSum(7));