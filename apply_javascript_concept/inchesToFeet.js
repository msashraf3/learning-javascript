/* const myInches = 12;
const myFeet = myInches / 12;
console.log(myFeet);

const dadaInches = 144;
const dadaFeet = dadaInches / 12;
console.log('dada inches', dadaFeet);

const dadiInches = 60;
const dadiFeet = dadiInches / 12;
console.log('dadi feet', dadiFeet); */

function inchesToFeet(inches){
    const toFeet = inches / 12;
    return toFeet;
}

console.log('The convert inches to feet is:',inchesToFeet(144));
console.log('The convert inches to feet is:',inchesToFeet(60));
console.log('The convert inches to feet is:',inchesToFeet(12));


const dadaInches = 144;
const dadaFeet = inchesToFeet(dadaInches);
console.log(dadaFeet);

const nanaInches = 168;
const nanaFeet = inchesToFeet(nanaInches);
console.log("nana's feet", nanaFeet);