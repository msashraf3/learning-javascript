/* var myBudget = 5000;

if (myBudget >= 80000) {
  console.log('iPhone kinbo, Futani marbo');
} else if(myBudget >= 60000){
  console.log('Gaming laptop diye e cholbe');
} else if (myBudget >= 40000) {
  console.log('Lenovo Yoga kinlam bhai');
} else if (myBudget >= 20000) {
  console.log('Gorib manus bhai just puraton lappy e nilam');
} else {
  console.log('bolis na bhau, gebon e gorib. Shudhu phone diye lag chalate hobe');
}

var print = "আজকে আমার মন ভাল নেই!"

for (var i = 1; i <= 39; i++) {
  
  console.log(print, i);
  
}
var count = 0;
for (var i = 58; i <= 98; i++){
  if (i != 0) {
    count++;;
  }
}
console.log(count); */

/* var count = 0;
for (var i = 412; i <= 456; i++){
  if (i % 2 == 0) {
    count++
  }
}
console.log(count); */

/* var count = 0;
for (var i = 581; i <= 623; i++){
  if (i % 2 !== 0) {
    count++
  }
}
console.log(count); */

/* var lessonsLearned = ['HTML', 'CSS', 'Bootstrap', 'JavaScript'];

for (var i = 0; i < lessonsLearned.length; i++){
  var output = lessonsLearned[i];
  console.log(output);
} */

/* var phoneModelsUsedSoFar = ['symphony', 'nokia', 'samsung', 'xiaomi', 'realme'];
var i = 0;
while (i < phoneModelsUsedSoFar.length) {
  console.log(phoneModelsUsedSoFar[i]);
  i++;
} */

/* for (var i = 30; i <= 86; i++){
  console.log(i);
  if (i == 44) {
    break;
  }
} */

var booksPrice = [500, 200, 300, 100, 150, 50, 75, 999, 69];

for (var i = 0; i < booksPrice.length; i++){
  var check = booksPrice[i];
  if (check > 200) {
    continue;
  }
  console.log(check);
}