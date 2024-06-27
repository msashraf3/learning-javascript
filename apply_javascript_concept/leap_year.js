//We can also write it this way

/* function isTheYearLeap (year){

    const givenYear = year % 4;
    
    if (givenYear == 0) {
    
    return true;
    
    } else {
    
    return false;
    
    }
    
    }
    
    const theYear = 2028;
    
    const result = isTheYearLeap(theYear);

    console.log(result); */

function isTheYearLeap (year){
    const givenYear = year % 4;

    if (givenYear == 0) {
        return true;
    }
        return false;
}

const theYear = 2025;
const result = isTheYearLeap(theYear);
console.log(result);