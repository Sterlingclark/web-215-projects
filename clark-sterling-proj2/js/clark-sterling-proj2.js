// Create Variables
var isCold = false;
console.log(isCold);

let firstName = "Sterling";
console.log(firstName);

const lowestValue = 1;
console.log(lowestValue);

// Perform Operations
let pi = 3.14159265359;
let brainCells = 2.5;
console.log(pi + brainCells);
console.log(pi - brainCells);
console.log(pi * brainCells);
console.log(brainCells / pi);
console.log(pi / brainCells);

// Concatenation and Escaping
var part1 = "Tom \"Alley Cat\" O'Mally";
var part2 = "64";
var part3 = 1;

console.log(part1 + " is " + part2 + " years old");
console.log(part2 + part3);

//  Create indexed arrays 
var menu1 = ["Pizza", "Burgers", "Nachos", "Soup"];
var day2 = menu1[1];
console.log(day2);
console.log(menu1.length);

// Add a single elemnet to the end of the array
menu1[menu1.length] = "Chili";
console.log(menu1);

// Add a multiple elements to the end of the array
menu1.push("Fried Rice", "Pancakes");
console.log(menu1);

// Add a multiple elements to the beginning of the array
menu1.unshift("Spaghetti", "Sushi");
console.log(menu1);

// Remove a single element from the beginning of the array 
menu1.shift();
console.log(menu1);

// Remove a single element from the end of the array 
menu1.pop();
console.log(menu1);

// Create a multi-dimensional array 
var fruits = ["Peach", "Blueberry", "Strawberry"];
var vegtables = ["Lettuce", "Carrots", "Onion", "Cucumber"];
var ingredients = [fruits, vegtables];
console.log(ingredients[1][0]);
