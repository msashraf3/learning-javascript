/* 1. Write a function foo() which prints "foo" and a function bar() which prints "bar". Call function bar() in the foo() function after printing. What will be the output? Now call the foo() to see the output. */

function foo(){
    console.log("foo");
}


function bar(){
    console.log("bar");
    foo()
}

foo()
bar()
foo()


/* 2. Write a function called make_avg() which will take an three integers and return the average of those values. */

function make_avg(a, b, c){
    var sum = a + b + c;
    var avg = sum / 3;
    return avg;
}

var ok = make_avg(10, 20, 30);
console.log(ok);

/* 3. Challenging: Write a function called make_avg() which will take an array of integers and
the size of that array and return the average of those values.  */

/* function make_avg(num){

} */


/* 4.Write a function called odd_even() which takes an integer value and tells whether this
value is even or odd. You need to do it in 4 ways:
· Has return + Has parameter
· No return + Has parameter */

//no return has parameter
function odd_even(num){
    if (num % 2 == 0) {
        console.log('The number is Even', num);
    } else {
        console.log('The number is Odd', num);
    }
}

// has return has parameter
function odd_even(num){
    if (num % 2 == 0) {
        return "The number is Even";
    } else {
        return "The number is Odd";
    }
}

console.log(odd_even(33));