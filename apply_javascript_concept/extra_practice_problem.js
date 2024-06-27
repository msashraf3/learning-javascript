//১. LeapYear() নামে ফাংশন লিখো এবং নেক্সট ইয়ার অর্থাৎ ২০২৩ কি Leap Year নাকি সেটা চেক করো। Leap Year হলে ফাংশন True রিটার্ন করবে আর Leap Year না হলে False রিটার্ন করবে।


//২. তোমার বয়স কি Odd নাকি Even সংখ্যা সেটা চেক কর একটা ফাংশন দিয়ে। সেই ফাংশনকে কোন সংখ্যা প্যারামিটার হিসেবে দিলে, সেই সংখ্যা Even হলে ফাংশন True রিটার্ন করবে আর Odd হলে False রিটার্ন করবে।

function ageOddEven(age){
    if (age % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

var trueFlaseAge = ageOddEven(69);

console.log(trueFlaseAge);

//৩. এমন একটা ফ্যাংশনা লিখো যেটাকে তুমি ঘন্টাকে ইনপুট প্যারামিটার হিসেবে দিবে। আর সে সেই ঘন্টাকে মিনিটে কনভার্ট করে মিনিট রিটার্ন করবে। 

function hoursToMinutes(num){
    var convert = num * 60;
    return convert;
}

var findOut = hoursToMinutes(2);
console.log('The convert hours to minutes is:',findOut);