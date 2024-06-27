// hour as input and return minutes as output
function convertToMinute(hour){
    let result = hour * 60;
    return result;
}

const hour = 5;
const calling = convertToMinute(hour);
console.log('your desired',hour,'hours to minutes is',calling);

// minutes to seconds
function convertMinutesToSeconds(minutes){
    let result = minutes * 60;
    return result;
}

const minutes = 40;
const fcalling = convertMinutesToSeconds(minutes);
console.log('your desired',minutes,'minutes to second is:',fcalling);

// array of leap years
function findLeapYear(array){
    let leapYears = [];
    for(let i = 0; i <array.length; i++){
        let values = array[i];
        if (values % 4 === 0) {
            leapYears.push(values);
        }else{
            continue;
        }
    }
    return leapYears;
}

const theArray = [2023, 2024, 2025, 2028, 2030];
const letsCall = findLeapYear(theArray);
console.log(letsCall);