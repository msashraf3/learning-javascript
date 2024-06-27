//This is one way to do it
/* function getTheOddNumbers(numbers){
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element % 2 === 0) {
            continue;
        } else {
            console.log(i, element);
        }
    }
} */

//another way
function getTheOddNumbers(numbers){
    const oddNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element % 2 !== 0) {
            console.log(i, element);
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}

//to calculate the sum of the array
function toFindTheSumOfAnArray(array){
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        sum = sum + element;
    }
    return sum;
}

const theArray = [12, 69, 45, 50, 20, 79, 11];
const div = getTheOddNumbers(theArray);
console.log(div);
const sumOfOddNumber = toFindTheSumOfAnArray(div);
console.log(sumOfOddNumber);