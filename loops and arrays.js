//arrays
let arr = [1,5,"hello",true,null,3]

const fruits = ["kiwi","mango","banana","grapes"]

// prints whole list
console.log(fruits) 

// prints a single entry
console.log(fruits[1]) 

// array.length prints the amount of items in our array
console.log(fruits.length) 

// finding the last index number in our array
console.log(fruits.length - 1) 

console.log("-----------------------")

//replacing data point in an array
// works even if array is a constant
fruits[1] = "strawberry"
console.log(fruits)

// push method adds a new entry at the end of our array
fruits.push("apple")
console.log(fruits)

//pop will remove the last element of our array
fruits.pop();
console.log(fruits)

//shift will remove the first element of our array
fruits.shift();
console.log(fruits);

//splice lets us remove an amount of entries, starting from an index point 

fruits.splice(1,1)// at index point one, delete 2 entries
console.log(fruits)

fruits.push("apple")
fruits.push("pear")
fruits.push("plum")
console.log(fruits)

//we can also use splice to insert new entries 
fruits.splice(2,1, "passionfruit") // at index point 2, delete nothing and add passionfruit
console.log(fruits)


console.log(fruits.join (", ")) //joins the arrays in a string

console.log("-----------------------")

// LOOPS

// For loop

//for (startpoint; condition; iteractor)
for(let i = 1; i<=10; i++){
    console.log(i)
}

for(let i = 10; i>=0; i--){
    console.log(i)
}

// for loops can also iterate through arrays
// for (let item of array)
for (let fruit of fruits){
    console.log(fruit)
}

myName = "Tristan"

for(let letter of myName){
    console.log(letter)
}

console.log("-----------------------")

// While loops 

let x = 5
while(x<=10){
    console.log(x)
    x++
}

// TASKS

// EASY

// 1. Create an array with at least 5 elements. Create a loop to output them to console
const cars = ["BMW","ford","nissan","audi","fiat"]

for(let car of cars){
    console.log(car)
}

// 2. Create a loop that counts up to 50 from 0 in increments of 5
for (let p=0; p<=50; p+=5){
    console.log(p)
}

// 3. Create a loop to count to 500 in increasing increments
console.log("-----------------------")
let counter = 0;
let increment = 5;

while (counter <= 500) {
    console.log(counter);
    increment++;
    counter += increment;
}
console.log("-----------------------")
console.log("-----------------------")
console.log("-----------------------")
console.log("-----------------------")
// INTERMEDIATE

// 1. Create a loop that alternates between adding two & subtracting one, until it reaches 20
// Bonus points if you can make it cut off exactly at 20
// Hint: you may need to implement some things we covered yesterday

let number = 0;
let add = true;

while(number < 20){
    if (add == true){
        console.log(number)
        number += 2
        add = false
    }
    else if(add == 0){
        console.log(number)
        number -= 1
        add = true
    }       
}

// 2. Create a loop that alternates counting up or down by increasing increments, stopping when it reaches +50 or -50


//3. Create a loop to show the first 20 numbers of the fibbonacci sequence


// 4. Create a loop to play FizzBuzz
// Can be done multiple ways

