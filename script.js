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
const weapons = [  
    {
    name: "stick",
    power: 5
    },
  {    name: "dagger",
    power: 30
},
  {    name: "claw hammer",
    power: 50
},
  {    name: "sword",
    power: 100
}
];
const monsters = [
  {
    name: "slime", level: 2, health: 15
  },
  {
    name: "fanged beast", level: 8, health: 60
  },
  {
    name: "dragon", level: 20, health: 300
  }
];
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
    {
      name: "cave",
      "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
      "button functions": [fightSlime, fightBeast, goTown],
      text: "You enter the cave. You see some monsters."
    },
    {
      name:"fight",
      "button text": ["Attack", "Dodge", "Run"],
      "button functions": [attack, dodge, goTown],
      text: "You are fighting a monster."
    },
    {
      name: "kill monster",
      "button text": ["Go to town square", "Go to town square", "Go to town square"],
      "button functions": [goTown,goTown,goTown],
      text: 'The monster screams "Arg!" as it dies. You gain experience points and find gold.'
    },
    {
      name: "lose",
      "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
      "button functions": [restart, restart, restart],
      text: "You die. &#x2620;"
    }
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
You pass arguments by including them within the parentheses of the function call.
For example, calling myFunction with an arg argument would look like:

myFunction(arg)

Pass in only the first element of the locations array by adding [0] at the end of the variable.
For example: myFunction(arg[0]);.

This is called bracket notation.
Values in an array are accessed by index.
Indices are numerical values and start at 0 - this is called zero-based indexing.
arg[0] would be the first element in the arg array.
*/
function goTown() {
    update(locations[0]);
  }
  /*
You need to wrap the text Store in double quotes.
Because your string is already wrapped in double quotes, you'll need to escape the quotes around Store.
You can escape them with a backslash \.
Here is an example:

const escapedString = "Naomi likes to play \"Zelda\" sometimes.";

Instead of assigning the innerText and onclick properties to specific strings and functions, the update function will use data from the location that is passed into it.
First, that data needs to be passed.
Here is an example of calling a function named myFunction:

myFunction();

  */
 function update(location) {
    monsterStats.style.display = 'none';
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];
    button1.onclick = location["button functions"][0];
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];
    text.innerHTML = location.text;
 }
function goStore() {
    update(locations[1]);
}
function goCave() {
    console.log("Going to cave.");
}
function fightSlime() {
  fighting = 0;
  goFight();
}
function fightBeast() {
  fighting = 1;
  goFight();
}
function fightDragon() {
  fighting = 2;
  goFight();
}
function goFight(){
  update(locations [3])
  monsterHealth = monsters[fighting].health
  monsterStats.style.display='block';
  monsterName.innerText = monsters[fighting].name;
  monsterHealthText.innerText = monsterHealth;
}
/*
The Math object in JavaScript contains static properties and methods for mathematical constants and functions.
One of those is Math.random(), which generates a random number from 0 (inclusive) to 1 (exclusive).
Another is Math.floor(), which rounds a given number down to the nearest integer.

Using these, you can generate a random number within a range.
For example, this generates a random number between 1 and 5: Math.floor(Math.random() * 5) + 1;.
*/
function attack(){
  text.innerText = "The " + monsters[fighting].name + " attacks.";
  text.innerText += " You attack it with your " + weapons[currentWeapon].name + ".";
  healthText = health -= monsters[fighting].level;
  monsterHealth -= weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1;
  healthText.innerText = health;
  monsterHealthText.innerText = monsterHealth;
  if (health <= 0){
    lose();
  }
  else if (monsterHealth <= 0) {
    if(fighting === 2){
      winGame();
    }
    else {
      defeatMonster();
    }
  }
}

function dodge(){
  text.innerText = "You dodge the attack from the " + monsters[fighting].name + ".";
}
/*
There is a shorthand way to add or subtract from a variable called compound assignment.
For example, changing num = num + 5 to compound assignment would look like num += 5.
Example if statement:
const num = 5;
if (num >= 3) {
  console.log("This code will run because num is greater than or equal to 3.");
}
*/
function buyHealth(){
    if (gold >= 10) {
        gold -= 10;
        health += 10;
        goldText.innerText = gold;
        healthText.innerText = health;
        } else {
            text.innerText = "You do not have enough gold to buy health.";
        }
}
function buyWeapon(){
  if (currentWeapon<weapons.length - 1) {
    if(gold >= 30) {
        gold -= 30;
        goldText.innerText.gold;
        currentWeapon++;
        goldText.innerText = gold;
        let newWeapon = weapons[currentWeapon].name;
        text.innerText = "You now have a " + newWeapon + ".";
        inventory.push(newWeapon);
        text.innerText += " In your inventory you have: " + inventory;
    }
    else {
      text.innerText = "You do not have enough gold to buy a weapon.";
    }
  }
  else {
    text.innerText = "You already have the most powerful weapon!";
    button2.innerText = "Sell weapon for 15 gold";
    button2.onclick = sellWeapon;
  }
}
function sellWeapon () {
  if (inventory.length > 1) {
    gold += 15;
    goldText.innerText = gold;
    let currentWeapon = inventory.shift();
    text.innerText = "You sold a " + currentWeapon + ".";
    text.innerText += " In your inventory you have: " + inventory;
  }
  else {
    inventory.length = 1;
    text.innerText = "Don't sell your only weapon!";
  }
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
function defeatMonster() {
  gold += Math.floor(monsters[fighting].level * 6.7);
  xp += monsters[fighting].level + xp;
  goldText.innerText = gold;
  xpText.innerText = xp;
  update(locations[4]);
};
function lose() {
  monsterStats.style.display = 'none';
};
function restart() {
  xp = 0;
  health = 100;
  gold = 50;
  currentWeapon = 0;
  inventory = ["stick"];
  goldText.innerText = gold;
  healthText.innerText = health;
  xpText.innerText = xp;
  goTown();
}