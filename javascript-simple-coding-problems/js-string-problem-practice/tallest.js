//tallest of all time
function tallestOne(numbers){
let taller = 0;
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (taller < element) {
        taller = element;
    } else {
        continue;
    }
}
return taller;
}

const heights = [167, 190, 120, 165, 137];
const tallest = tallestOne(heights);
console.log('The tallest one is with', tallest, 'cm');

//find the smallest of all
function smallestOfAll(numbers){
    let smaller = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (smaller > element) {
            smaller = element;
        }
    }
    return smaller;
}

const heights1 = [167, 190, 120, 165, 137];
const smallest = smallestOfAll(heights1);
console.log('The smallest one is with', smallest, 'cm');