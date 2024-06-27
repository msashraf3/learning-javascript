//for loop

/* function reversed_factorial(number){
    let result = 1;
    for(let i = number; i > 0; i--){
        result = result * i;
    }
    return result;
}

const calling = reversed_factorial(9);
console.log(calling); */

//while loop
function reversed_factorial(number){
    let result = 1;
    while (number > 0) {
        result *= number;
        number--;
    }
    return result;
}

const calling = reversed_factorial(9);
console.log(calling);