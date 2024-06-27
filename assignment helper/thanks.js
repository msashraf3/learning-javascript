/* let num = [10, 20, 30, 40];

let friends = ["Arif", "John", "Asad", "Naim"];

let bestFriend = friends[0];

console.log(bestFriend.length);
console.log(bestFriend.toLowerCase());
console.log(friends.length);

console.log(friends.indexOf("As"));
for (let i = 0; i < friends.length; i++) {
  const name = friends[i];
  console.log(name);
}

let friend = {
  name: "Arif",
  age: 25,
};

console.log(friend.name);
let asd = "age";
console.log(friend[asd]);

function add(number1, number2) {
  const result = number1 + number2;
  return result;
}
let result1 = add(5, 6);

let result2 = add(10, 20);

let sum = result1 + result2;

let result = sum - 5;

let finalResult = result * 2;

console.log(finalResult);

let numberssdfg = ;

function arrayMath(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    sum = sum + number;
  }
  return sum;
}

let numbers = [10, 23, 23, 45, 54];
let result = arrayMath(numbers);
console.log(result);
function largestName(names) {
  if (Array.isArray(names)) {
    let largest = names[0];
    for (let i = 0; i < names.length; i++) {
      const element = names[i];
      if (element.length > largest.length) {
        largest = element;
      }
    }
    return largest;
  } else {
    return "You should provide an array";
  }
}

// let names = ["Arif", "David", "John", "Saiful"];
// let result = largestName(names);
// console.log(result);

function evenOdd(name) {
  if (typeof name == "string") {
    if (name.length % 2 == 0) {
      return "even";
    } else {
      return "odd";
    }
  } else {
    return "You should provide a string";
  }
}

console.log(evenOdd(23423));

Problem 5: Convert your gems into diamond

তোমাকে একটা function দেওয়া হবে called gemsToDiamond(). এটা ইনপুট হিসেবে তিনটা number ( তোমাদের ৩ বন্ধুর gems এর সংখ্যা ) নিবে।

১ম বন্ধুর প্রতি gems এর ক্ষমতা = 21

২য় বন্ধুর প্রতি gems এর ক্ষমতা = 32

৩য় বন্ধুর প্রতি gems এর ক্ষমতা = 43

[ gems এর ক্ষমতা বলতে একটা gems কে কয়টা diamond এ convert করা যাবে সেটা বুঝানো হচ্ছে। ]

এখন তোমার task: সব বন্ধুর gems মিলিয়ে total কতটি diamond পাবে সেটা বের করতে হবে। total diamond এর সংখ্যা যদি 2000 এর উপর হয়ে যায় সেক্ষেত্রে total diamond থেকে 2000 বাদ দিয়ে যতগুলো diamond অবশিষ্ট থাকবে, ততগুলো তোমরা পাবে।

Sample Input & Output:-

Input: 1, 1, 1

Output: 96

Input: 20, 200, 50

Output: 6970

Input: 100, 5, 1

Output: 303

function gemsToDiamond(gems1, gems2, gems3) {
  if (
    typeof gems1 == "number" &&
    typeof gems2 == "number" &&
    typeof gems3 == "number"
  ) {
    const diamond1 = gems1 * 21;
    const diamond2 = gems2 * 32;
    const diamond3 = gems3 * 43;
    const total = diamond1 + diamond2 + diamond3;
    if (total > 2000) {
      const result = total - 2000;
      return result;
    } else {
      return total;
    }
  } else {
    return "You should provide valid numbers";
  }
}

console.log(gemsToDiamond(100, 5, "1"));

Problem 3: Is Less or Greater than seven

তোমাকে একটা function দেওয়া হবে called “isLGSeven()”. এটা ইনপুট হিসেবে একটা number নিবে।

এখন তোমার task: তোমাকে ইনপুট ভ্যালু এবং ৭ এর মধ্যে পার্থক্য বের করতে হবে। যদি এই পার্থক্য ৭ এর চেয়ে ছোট হয়, তখন তোমাকে return করতে হবে সেই বিয়োগফল। নাহলে তোমাকে return করতে হবে double of the input। মানে যে সংখ্যা ইনপুট হিসেবে নিয়েছো সেটির দ্বিগুণ।

Input : 6

Output: -1

Input: -15

Output: -22

Input: 15

Output: 30
 */