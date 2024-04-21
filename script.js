/*
In JavaScript, a variable is used to hold a value.
To use a variable, you must first declare it.
Variables can be assigned a value.
When you do this while you declare it, this is called initialization.
When a variable name has multiple words, the convention in JavaScript is to use what's called camelCase.
The first word is lowercase, and the first letter of every following word is uppercase.
The variables you have assigned have all had values that are numbers.
JavaScript has multiple different data types.
The next one you will use is the string. Strings are used to store things like words or text.
Strings are surrounded with double quotes, single quotes, or backticks.
The player's inventory in your game will be able to hold multiple items.
You will need to use a data type that can do this.
An array can be used to hold multiple values.
For example:
let order = ["first", "second", "third"];
This is an array which holds three values.
Notice how the values are separated by commas.
JavaScript interacts with the HTML using the Document Object Model, or DOM.
The DOM is a tree of objects that represents the HTML.
You can access the HTML using the document object, which represents your entire HTML document.

One method for finding specific elements in your HTML is using the querySelector() method.
The querySelector() method takes a CSS selector as an argument and returns the first element that matches that selector.
If you are not going to assign a new value to a variable, it is best practice to use the const keyword to declare it instead of the let keyword.
This will tell JavaScript to throw an error if you accidentally reassign it.
*/
let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let inventory = ["stick",];
let monsterHealth;
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");
/*
Functions are special tools that allow you to run sections of code at specific times.
You can declare functions using the function keyword.
Here is an example of a function called functionName - note the opening and closing curly braces.
function functionName() {

}
These indicate the section of code that is within the function.
*/
/*
The innerText property controls the text that appears in an HTML element.
For example:

<p id="info">Demo content</p> 

const info = document.querySelector("#info"); 
info.innerText = "Hello World"; 

The following example would change the text of the p element from Demo content to Hello World.
*/
function goStore() {
    button1.onclick = buyHealth;
    button2.onclick = buyWeapon;
    button3.onclick = goTown;
    button1.innerText = "Buy 10 health (10 gold)";
    button2.innerText = "Buy weapon (30 gold)";
    button3.innerText = "Go to town square";
    text.innerText = "You enter the store.";
}
function goCave() {
    console.log("Going to cave.");
}
function fightDragon() {
    console.log("Fighting dragon.");
}
function buyHealth(){

}
function buyWeapon(){

}
function goTown(){

}
/*
button1 represents your first button element.
These elements have a special property called onclick, which you can use to determine what happens when someone clicks that button.

You can access properties in JavaScript a couple of different ways.
The first is with dot notation.
Here is an example of using dot notation to set the onclick property of a button to a function reference.

button.onclick = myFunction;

In this example, button is the button element, and myFunction is a reference to a function.
When the button is clicked, myFunction will be called.
*/
// initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;