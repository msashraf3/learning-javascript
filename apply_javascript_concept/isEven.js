function isEven (even){
    const number = even % 2;

    if (number == 0) {
        return true;
    } else {
        return false;
    }
}

const numberItself = 69;
const result = isEven(numberItself);
console.log("the number is:",result);

const numberItself1 = 20;
const result1 = isEven(numberItself1);
console.log("The number is:",result1);