function add(num1, num2){
    console.log(num1, num2);
    //only available inside the function. This is called array like object not actually an array.
    console.log(arguments);
    console.log(arguments[3]);
}

add(69, 69, 12, 56, 99);