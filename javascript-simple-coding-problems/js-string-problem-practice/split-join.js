const lyrics = 'tumi bondhu kala pakhi. ami jano ki bosonto kale tomai bolte pari ni. kala kala sada sada';
console.log(lyrics);

//now if we want to split them into parts then we can do that by using .split()
//we gonna divide everyone by the gap between words
const parts = lyrics.split(' ');
console.log(parts);
//now divided by the sentence means divide using .
const sentence = lyrics.split('.');
console.log(sentence);
//now lets divide using the character. Means split all the words
const character = lyrics.split('');
console.log(character);

//sometimes we need to slice some strings go things done
//to use string we need to use .slice and give the paranmeter about start to end. lets not confuse start to end. start is where we are starting from to end is before it will show the value and not the actual stop. we can do that by using index. 
const slicing = lyrics.slice(5, 8);
console.log(slicing);
//substring works same as slice
const substring = lyrics.substring(5, 8);
console.log(substring);

//concatination is important
const greetings = 'hello';
const greetings2 = 'world';

console.log(greetings.concat(greetings2));
console.log(greetings.concat(' ',greetings2));
console.log(greetings2.concat(', ',greetings));

//we can also join lines as well
//by using join we can join strings together. .join the bracket we have to mention how we want to join

const joining = [
    'tumi bondhu kala pakhi',
    'ami jano ki bosonto kale tomai bolte pari ni',
    'kala kala sada sada'
  ];

console.log(joining.join(':'));
console.log(joining.join(','));