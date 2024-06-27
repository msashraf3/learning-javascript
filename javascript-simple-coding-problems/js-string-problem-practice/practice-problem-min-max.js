//type 1
//maximum number
function returnMaxNumberIfElse(num1, num2, num3){
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3){
        return num2;
    } else {
        return num3;
    }
}

console.log(returnMaxNumberIfElse(69, 59, 99));

//minumum number
function returnMinNumberIfElse(num1, num2, num3){
    if (num1 < num2 && num1 < num3) {
        return num1;
    } else if (num2 < num1 && num2 < num3){
        return num2;
    } else {
        return num3;
    }
}

console.log(returnMinNumberIfElse(69, 59, 99));

//type 2
//maximum number
function returnMaxNumberIfElse2(num1, num2, num3){
    const check = Math.max(num1, num2, num3);
    return check;
}

console.log(returnMaxNumberIfElse2(88, 56, 89));

//checking the minimum number
function returnMinNumberIfElse2(num1, num2, num3){
    const check = Math.min(num1, num2, num3);
    return check;
}

console.log(returnMinNumberIfElse2(88, 56, 89));