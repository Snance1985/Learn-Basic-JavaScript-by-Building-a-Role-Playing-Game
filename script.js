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