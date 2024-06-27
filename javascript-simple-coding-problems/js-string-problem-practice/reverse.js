function reverseString(text){
    let storing = '';
    for (let i = text.length - 1; i >= 0; i--) {
        const element = text[i];
        storing = storing.concat(element);
    }
    return storing;
}

const myString = 'I am a good boy';
const reversed = reverseString(myString);
console.log(reversed);

//string works like an array
const str = 'I am a good person';
console.log(str);

console.log(str[0]);

console.log(str[1]);

console.log(str[2]);

console.log(str[3]);

console.log(str.length);