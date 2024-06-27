/* basic look of the function 
function functionName(parameters){
    function body
    return
}
functionName(parameters);
 */

//Let's look some of the examples
function getAverage(assignment1, assignment2, assignment3){
    const total = assignment1 + assignment2 + assignment3;
    const average = total / 3;
    return average;
}

const assignment1Marks = 30;
const assignment2Marks = 60;
const assignment3Marks = 59;
var myAverage = getAverage(assignment1Marks, assignment2Marks, assignment3Marks);
console.log(myAverage);