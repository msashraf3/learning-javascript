function cubeNumber(number) {

    if (typeof number !== "number") {
        return "Please enter a number.";
    }

    const cube = number * number * number;
    return cube;
}

function matchFinder(string1, string2) {

    if (typeof string1 !== "string" || typeof string2 !== "string") {
        return "Please enter string.";
    }

    if (string1.includes(string2)) {
        return true;
    } else {
        return false;
    }
}

function sortMaker(arr) {

    let BigToSmall = [];

    if (arr[0] < 0 || arr[1] < 0) {
        return "Invalid Input";
    }
    else if (arr[0] === arr[1]) {
        return "equal";
    }
    else if (arr[0] > arr[1]){
        BigToSmall.push(arr[0], arr[1]);
    }
    else{
        BigToSmall.push(arr[1], arr[0]);
    }
    return BigToSmall;
}

function findAddress(obj) {
    let values = Object.values(obj);
    let address = '';

    for (let i = 0; i < values.length; i++) {
        const element = values[i];
        address = address.concat(element,',');
    }
    return address;
}

function canPay(changeArray, totalDue) {

    if (changeArray.length === 0) {
        return "Please enter your khuchra taka";
    }

    let totalTaka = 0;
    for (let i = 0; i < changeArray.length; i++) {
        const element = changeArray[i];
        totalTaka = totalTaka + element;
    }
    if (totalTaka >= totalDue) {
        return true;
    }
    else{
        return false;
    }
}