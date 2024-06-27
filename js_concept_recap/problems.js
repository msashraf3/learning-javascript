//একটা লুপ লিখতে হবে যেটা ১ থেকে ১০০ পর্যন্ত যত সংখ্যা আছে সেটা দেখাবে 

for (let i = 0; i <= 100; i++) {
    console.log(i);
    
}

//৫০ থেকে ৮০ এর মধ্যে যতো বিজোড় সংখ্যা আছে সেগুলাকে দেখাবে। 

for (let i = 50; i <= 80; i++) {
    if (i % 2 === 0) {
        console.log(i);
    } else {
        continue;
    }
    
}

//তিনটা সংখ্যা এর যোগ করতে পারবে এমন একটা ফাংশন লিখো 

function sum(a, b, c){
    const addition = a + b + c;
    return addition;
}

const number1 = 10;
const number2 = 10;
const number3 = 10;
const final = sum(number1, number2, number3);
console.log(final);

//একটু কোড লিখে অবজেক্ট এর সব প্রপার্টি এর নাম এবং মান আউটপুট হিসেবে দেখাও। 

let person = {

    name: 'jhon',
    age: 30,
    city: 'dhaka',
    job: 'software engineer'

};

for (let i = 0; i < person.length; i++) {
    const element = person[i];
    console.log(person.key + ': '+ person.value);
}

