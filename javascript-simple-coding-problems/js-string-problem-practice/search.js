const lyrics = 'tumi bondhu kala pakhi ami jano ki bosonto kale tomai bolte pari ni. kala kala sada sada';

const result = lyrics.includes('pakhi');
const result2 = lyrics.includes('pokhi');

console.log(result);
console.log(result2);

//these are case sensitive 
const doesexist = lyrics.includes('Pakhi');
console.log(doesexist);

//but we can actually use to lowerCase the whole thing then use to search things so that we don't mess everything up
//we can actually use another variable and then use that variable inside the includes and works the same
const searchItem = 'PaKhi';

const lyricsLowerCase = lyrics.toLowerCase();
const searchItemLowerCase = searchItem.toLowerCase();
const findOut = lyricsLowerCase.includes(searchItemLowerCase);
console.log(findOut);

//we can use this one line without having to write multiple line code

const oneLiner = lyrics.toLowerCase().includes(searchItem.toLowerCase());
console.log(oneLiner);

//just like array we can use index of to find something

//indexOf

console.log(lyrics.indexOf('kala'));
console.log(lyrics.indexOf('kailla'));

//in many places we might find this kind of condition so let us familier with it
if (lyrics.indexOf('sada') !== -1) {
    console.log('Item found');
} else {
    console.log('Not found');
}


if (lyrics.indexOf('sadada') !== -1) {
    console.log('Item found');
} else {
    console.log('Not found');
}

//there is something that we use sometimes. that is startwith and endswith

const checking = lyrics.startsWith('Tumi');
console.log(checking);
//these are case sensitive. so be carefull
const checking2 = lyrics.startsWith('tumi');
console.log(checking2);


//sometimes we need to find the file that is ends with something then we use endswith
const fileName = 'myResume.pdf';
console.log(fileName.endsWith('pdf'));