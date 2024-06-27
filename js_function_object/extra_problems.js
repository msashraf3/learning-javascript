//একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (Multiplication Table) আউটপুট হিসেবে দেখাবে। 
function table13(){
    for(var i = 1; i <= 10; i++){
        var table = 13 * i;
        console.log(13, '*',i,'=',table);
    }
}

table13()

//2. একটা ফাংশন লিখবা যেটা যেকোন নামকে Uppercase বা রেগুলার কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম Lowercase করে রিটার্ন করবে।

function makeUppercase(string){
    var changedTo = string.toUpperCase();
    return changedTo;
}

console.log(makeUppercase('hello'));

//lower case

function makeLowercase(string){
    var changedTo = string.toLowerCase();
    return changedTo;
}

console.log(makeLowercase('HELLO'));


//৩. FullName নামে একটা ফাংশন তৈরী কর যেটা তোমার নামের প্রথম অংশ এবং তোমার নামের শেষের অংশ প্যারামিটার হিসেবে নিবে। আর তোমার নামের দুই অংশ জোড়া দিয়ে আউটপুট হিসেবে তোমার পূর্ন নাম রিটার্ন করে দিবে। যেমন ধরো, Hablu এবং Kanto ইনপুট প্যারামিটার হিসেবে দিলে আউটপুট হিসেবে Hablu Kanto রিটার্ন করবে।

function FullName(firstName, lastName){
    var full = firstName + ' ' + lastName;
    return full;
}

console.log(FullName('Junior', 'fapper'));

//৪. একটা ফাংশন লিখবা যেটাকে তুমি কোন সংখ্যাকে ইনপুট হিসেবে দিলে সে সেই সংখ্যার Square করে সেই Square কে রিটার্ন করবে। অর্থাৎ তুমি ইনপুট হিসেবে 5 দিলে সেটাতে স্কয়ারে হিসেবে 25 আউটপুট হিসেবে পাবে।

function Square(num1){
    var final = num1 * num1;
    return final;
}

console.log(Square(5));

//৫) Pizza নামের একটা Object কে নিচের উদাহরণ মতো Define করবা :

const Pizza = {

    Toppings: ['Cheese', 'Sauce', 'Pepperoni'],
   
    Crust: 'Deep Dish',
   
    Serves: 2
   
   }

console.log(Pizza.Toppings[2]);

function make_avg(num, size){
    for(var i = 0; i < size.length; i++){
        var div = num[i];
        for (var i = 0; i < div.length; i++) {
            var element = div[i];
            
        }
    }
}