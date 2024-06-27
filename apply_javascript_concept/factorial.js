// will multiply 1 to 7

let num = 1;
for (let i = 1; i <= 7; i++) {
    const element = i;
    num *= element;
}

console.log(num);

// using function

function factorial (number){
    let num = 1;
    for (let i = 1; i <= number; i++) {
        const element = i;
        num *= i;
    }
    return num;
}

console.log(factorial(9));