//DOM Manipultion allows us to make changes to our webpage dynamicly

//creating a new element for your page
const newParagraph = document.createElement("p");
newParagraph.textConent = "If this is on the page, newParagrapgh works!";

document.body.appendChild(newParagraph)

const newHeading = document.createElement("h1")
newHeading.textContent = "This is my new heading, I am very proud!"
document.body.appendChild(newHeading)

newHeading.style.color = "Red"
newHeading.style.backgroundColor = "cyan"

document.body.style.backgroundColor = "yellow"

function lightMode(){
    document.body.style.backgroundColor = "yellow"
}

function darkMode(){
    document.body.style.backgroundColor = "grey"
}

function newElement(type,text){
    let newText = document.createElement(type);
    newText.textContent = text 
    document.body.appenChild(newText)
}

// change styling of an element 
function bigAndRed(){
    document.getElementById("stickman").style.color="red"
    document.getElementById("stickman").style.fontSize="150px"
}

function accessDenied(){
    alert("Sorry, nice try")
    location.href="page2.html"
}

// 1a. create a function to add text to your page
// 1b. Adda a button to your page that triggers the function
function newHeader(){
const newHeading2 = document.createElement("h1")
newHeading.textContent = "This is also my new heading!"
document.body.appendChild(newHeading2)
}

// 2a. Create a new page with text on it, and styling classes for light and dark mode
// 2b. Write a function which can be applied to a button to toggle between light and dark mode

// 3. Add buttons to your page to icrease & decrease your counter by 1, 5 & 10
let counter = 0;

function addOne() {
    counter += 1;
    document.getElementById("counter").value = counter;
}
function addFive() {
    counter += 5;
    document.getElementById("counter").value = counter;
}
function addTen() {
    counter += 10;
    document.getElementById("counter").value = counter;
}
function reset() {
    counter = 0;
    document.getElementById("counter").value = counter;
}
// HTML content will be in chat

// 4a. Create an input field & button to allow users to submit text to your page

function Submit() {
    const userInput = document.getElementById('userInput').value;
    document.getElementById('displayText').innerText = 'Submitted text: ' + userInput;
}
// 4b. Alter your function so each post has a background colour


