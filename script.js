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
const locations = [
    {
        name:"town square",
        "button text":["Go to store","Go to cave","Fight dragon"],
        "button functions":[goStore,goCave,fightDragon],
        text:"You are in the town square. You see a sign that says \"Store\"."
    },
    {
        name:"store",
        "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
        "button functions": [buyHealth, buyWeapon, goTown],
        text: "You enter the store."
    },
];
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

When you have repetition in your code, this is a sign that you need another function.
Functions can take parameters, which are values that are given to the function each time it is run.
Here is a function that takes a parameter called param:

function myFunction(param) {
    console.log(param);
}

*/
function goTown() {
    button1.innerText = "Go to store";
    button2.innerText = "Go to cave";
    button3.innerText = "Fight dragon";
    button1.onclick = goStore;
    button2.onclick = goCave;
    button3.onclick = fightDragon;
    text.innerText = "You are in the town square. You see a sign that says \"Store\".";
  }
  /*
You need to wrap the text Store in double quotes.
Because your string is already wrapped in double quotes, you'll need to escape the quotes around Store.
You can escape them with a backslash \.
Here is an example:

const escapedString = "Naomi likes to play \"Zelda\" sometimes.";

  */
 function update(location) {

 }
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

/*
Objects are non primitive data types that store key-value pairs.
Non primitive data types are mutable data types that are not undefined, null, boolean, number, string, or symbol.
Mutable means that the data can be changed after it is created.

Here is the basic syntax for an object:

{
  key: value
}
Objects are similar to arrays, except that instead of using indexes to access and modify their data, you access the data in objects through properties.

Properties consist of a key and a value.
The key is the name of the property, and the value is the data stored in the property.

Here is an example of an object with a single property:

const obj = {
  name: "Quincy Larson"
};
If the property name (key) of an object has a space in it, you will need to use single or double quotes around the name.
Here is an example of an object with a property name that has a space:
const spaceObj = {
  "Space Name": "Kirk",
};
If you tried to write a key without the quotes, it would throw an error:
const spaceObj = {
  // Throws an error
  Space Name: "Kirk",
}; 

There are two ways to access the properties of an object: dot notation (.) and bracket notation ([]), similar to an array.

Dot notation is what you use when you know the name of the property you're trying to access ahead of time.

object.property;

Here is a sample of using dot notation (.) to read the name property of the developer object:

const developer = {
  name: "Jessica",
}

// Output: Jessica
console.log(developer.name); 

The second way to access the properties of an object is bracket notation ([]).
If the property of the object you are trying to access has a space in its name, you will need to use bracket notation.

objectName["property name"];

Here is a sample of using bracket notation to read an object's property:

const spaceObj = {
  "Space Name": "Kirk",
};

spaceObj["Space Name"]; // "Kirk"

*/
