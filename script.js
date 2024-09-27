let condition = 1

if(condition == true){
    console.log("Condition met")
} else if (condition === false){
    console.log("condition not met")
} else if (typeof condition == Number){
    console.log("condition is a number")
} else {
    console.log("condition is not a boolean or number")
}


let condition2 = 23

if (condition2 <= 30){
    console.log("condition2 is less than or equal to 30")
} else{
    console.log("condition2 is more than 30")
}

frequency = 105 

switch(frequency){
    case 102:
        console.log("tuneFM")
        break;
    case 105:
        console.log("Super happy fun time show")
        break;
    case 123:
        console.log("white noise")
        break;
}

temp = 27

if (temp > 10 || temp){
    console.log("Temperature is greater than or equal to 10")
} else {
    console.log("Temperature is less than or equal to 10 ")
}


//Tasks:

//1: Write a conditional statement to check whether a customer is old enough to be served alchohol at a bar. Check the value of a variable named "age" and log a message to the console asking what the customer would like if they are 18 or older and denying them service otherwise.
let age = 21

if (age >= 18){
    console.log("Yes that is fine. What would you like to drink?")
} else 
    console.log("Sorry we can not serve you.")

//2: Create a conditional statement to compare 2 numbers, and check which is larger
let num1 = 25
let num2 = 12

if (num1 > num2){
    console.log("The first number is larger than the second number.")
} else if (num1 < num2){
    console.log("The first number is smaller than the second number")
} else if (num1 === num2){
    console.log("numbers are equal")
} else{
    console.log("Those aren't numbers")
}


//3: Create a conditional statement to check if a number is even or odd
let num3 = 7;

if (num3 % 2 === 0) {
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}

//4: Create a conditional statement that will check if a number is higher than 5, 10, 20, 50 % 100 Only output the largest applicable number
let num4 = 65
let largest = 0;

if (num4 > 100) {
    largest = 100;
} else if (num4 > 50) {
    largest = 50;
} else if (num4 > 20) {
    largest = 20;
} else if (num4 > 10) {
    largest = 10;
} else if (num4 > 5) {
    largest = 5;
}

if (largest > 0) {
    console.log(`The largest applicable number is ${largest}.`);
} else {
    console.log("The number is 5 or less.");
}

//5: Create a conditional statemnt to play FizzBuzz with a single variable Fizzbuzz replaces multiples of 3 with 'Fizz', multiples of 5 with 'buzz' and multiples of both with 'fizzbuzz'
let num5 = 10

if (num5 % 15 === 0) {
    console.log("FizzBuzz");
} else if (num5 % 3 === 0) {
    console.log("Fizz");
} else if (num5 % 5 === 0) {
    console.log("Buzz");
} else {
    console.log(num5);
}


//6: Add a check for non number data types, to filter them out from our fizzbuzz app

