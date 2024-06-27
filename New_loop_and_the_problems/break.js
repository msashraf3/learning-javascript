/* for(var i = 1; i <=20; i++){
    console.log(i);
    if (i > 5) {
        break;
    }
} */

/* var roastGiven = 0;
while (roastGiven < 10) {
    console.log('Roast den bhai, Please!. Gift enesi kintu', roastGiven);
    roastGiven++
    if(roastGiven > 5){
        break;
    }
} */

/* var itemsOnTable = ['bottle', 'mouse', 'sunglass', 'pen', 'notebook'];

for(var i = 0; i < itemsOnTable.length; i++){
    var item = itemsOnTable[i];
    if(item=='pen'){
        break;
    }
    console.log(item);
} */

var numbers = [45, 87, 89, 56, 32, 51, 25, 188, 41, 25, 98];
for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if (number > 100) {
        break;
    }
    console.log(number);
}