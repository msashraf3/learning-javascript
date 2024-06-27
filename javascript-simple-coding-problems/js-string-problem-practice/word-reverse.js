function reverseWords(str){
    const words = str.split(' ');
    let showdown = [];
    for (let i = words.length - 1; i >= 0; i--) {
        const element = words[i];
        showdown.push(element);
    }
    return showdown;
}


const myString = 'I am a good boy';
const calling = reverseWords(myString);
console.log(calling);