/* //১. একটা কোড লিখো। যেটা দিয়ে কোন একটা Array এর মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিতে পারবে। 

function smallNumber(array){
    let storage = array[0];
    for (let i = 0; i < array.length; i++) {
    
        if (array[i] < storage) {
            storage = array[i];
        }

    }
    return storage;
}

let number = [69, 10, 54, 5, 100, 99, 75];
const callout = smallNumber(number);
console.log(callout); */

//২. একটা কোড লিখো যেটা দিয়ে তিনটা সংখ্যার মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিবে।  

/* function smallestOfAll(number1, number2, number3){
    if (number1 < number2 && number1 < number3) {
       return number1;
    }
    else if(number2 < number1 && number2 < number3){
      return number2;
    }
    return number3;
  }
  
  
  let number1 = 69;
  let number2 = 420;
  let number3 = 666;
  const calling = smallestOfAll(number1, number2, number3);
  console.log('Smallest Number among those 3 is :',calling,'🌝'); */

//৩. একটা ফাংশন লিখো। সেই ফাংশনের মধ্যে ইনপুট হিসেবে একটা Array নিবে। সেই Array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হবে ইনপুট নেয়া Array এর মধ্যে যতগুলা সংখ্যা আছে। সেই সংখ্যা গুলার গড় বের করবে। তারপর সেই গড় ফাংশনের রিটার্ন হিসেবে দিয়ে দিবে। একটু চিন্তা করো। বুঝার চেষ্টা করো। ট্রাই করো। দেখো পারো কিনা। 

/* function averageOfArray(array){
    let average = 0;
    for(let i = 0; i < array.length; i++){
      average += array[i];
    }
    average = average / array.length;
    return average;
  }
  
  let number = [69, 54, 65, 99, 23];
  const callingAgain = averageOfArray(number);
  console.log('Average number of the array number is:',callingAgain); */

//৪. একটা ফাংশন লিখো। যেটা ইনপুট প্যারামিটার হিসেবে একটা আয়তক্ষেত্রের দৈর্ঘ্য আর উচ্চতাকে নিবে। তারপর সেই আয়তক্ষেত্র এর Area (আয়তন) কে রেজাল্ট হিসেবে রিটার্ন করবে। 

function areaOfRectangle(length, wide){
    let area = length * wide;
    return area;
}

const length = 6;
const wide = 4;
const calling2 = areaOfRectangle(length, wide);
console.log(calling2);

