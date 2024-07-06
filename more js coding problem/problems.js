// 1. feet to inch
function feetToInch(feet){
    const oneFeetToInch = 12;
    const toInch = feet * oneFeetToInch;
    return toInch;
}

const feet = 5;
const convertToInch = feetToInch(feet);
console.log('Feet converted to inch is:',convertToInch,'inch.');

// 2. centimeter to meter
function centimeterToMeter(centimeter){
    const oneCentimeterToMeter = 0.01;
    const toMeter = centimeter * oneCentimeterToMeter;
    return toMeter;
}

const centimeter = 10;
const conversion = centimeterToMeter(centimeter);
console.log('Centimeter converted to meter is:',conversion,'Meter.');

// 3. count paper
/**
 * book1 --> 100
 * book2 --> 200
 * book3 --> 300
 */

function paperRequirement(book1, book2, book3){
    const book1Required = 100;
    const book2Required = 200;
    const book3Required = 300;

    const forBook1 = book1 * book1Required;
    const forBook2 = book2 * book2Required;
    const forBook3 = book3 * book3Required;
    const totalPageRequired = forBook1 + forBook2 + forBook3;
    return totalPageRequired;
}

const totalBook = paperRequirement(10, 5, 3);
console.log('Total page required for the book is:',totalBook,'pages.');

// 4.['sajid', 'mamun', 'kamal', 'jubayer bin rased' , 'chinku']

function bestFriend(string){
    let biggest = string[0];

    for (let i = 0; i < string.length; i++) {
        const element = string[i];
        if (element.length > biggest.length) {
            biggest = element;
        }
    }
    return biggest;
}

const friends = ['sajid', 'mamun', 'kamal', 'jubayer bin rased' , 'chinku'];
const biggestName = bestFriend(friends);
console.log('Biggest name of all:',biggestName);

// 5. only positive number will get printed [45, 87, 96, 11, 63, -56, 71, 28]

function onlyPositive(array){
    let arrayOnlyPositive = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element >= 0) {
            arrayOnlyPositive.push(element);
        } else {
            break;
        }
    }
    return arrayOnlyPositive;
}

const numbers = [45, 87, 96, 11, 63, -56, 71, 28];
const positiveOnly = onlyPositive(numbers);
console.log(positiveOnly);