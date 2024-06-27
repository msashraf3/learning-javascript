var mathMarks = 75.25;
var bioMark = 65;
var chemistryMark = 80;
var phyMark = 35.45;
var banglaMark = 99.50;
var totalMarks = mathMarks + bioMark + chemistryMark + phyMark + banglaMark;

var averageMark = totalMarks / 5;
//Fixed the number after the point mark
var averageMarks = averageMark.toFixed(2);
//using the tofixed will give the output in string but we gonna use it in parsefloat to make it a number
var averageMarksFloat = parseFloat(averageMarks);
console.log(averageMarksFloat);