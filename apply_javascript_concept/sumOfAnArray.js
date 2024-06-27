function sumOfAnArray(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        sum = sum + element;
    }
    return sum;
}

const givenNumber = [12, 65, 38, 55, 69, 20];
const number = givenNumber;
const gettingArray = sumOfAnArray(number);
console.log(gettingArray);