// Variables in JavaScript
/* 
Rules for Choosing Variable Names

Allowed Characters: Variable names can only contain letters, numbers, underscores (_), and dollar signs ($).
Starting Characters: Variable names cannot start with a number.
Case Sensitivity: Variable names are case-sensitive (myVariable and myvariable are different).

*/

// Declaring Variables in JavaScript

// You can declare variables using three keywords:
// var
// let
// const
// Syntax for Declaring Variables
// Syntax: [keyword] [identifier] = [initial value];
var name = "John";   // Using var
let age = 25;        // Using let
const isStudent = true;  // Using const


/* 
Differences Between var, let, and const

Scope:
var is globally scoped if declared outside a function, and function scoped if declared inside a function.
let and const are block scoped, meaning they are only available within the block they are defined in (e.g., within curly braces {}).

Re-declaration:
var can be updated and re-declared within its scope.
let can be updated but not re-declared within its scope.
const cannot be updated or re-declared within its scope. It must be initialized at the time of declaration.


Usage Recommendation:
Use let and const to declare variables. let for variables that will be reassigned, and const for variables that will not be reassigned.
Avoid using var as it can lead to confusing behavior due to its scope rules.

*/
// using var 
var a = 10;
var a = 20;  // Re-declaration is allowed

console.log(a);  // Output: 20

//using let 
let b = 10;
b = 20;      // Updating is allowed
// let b = 20;  // Re-declaration would cause an error

console.log(b);  // Output: 20

//using const
const c = 30;
// c = 40;  // Updating would cause an error
// const c = 40;  // Re-declaration would cause an error

console.log(c);  // Output: 30

//scope Example 

var name = 'henil';
{
    var name = 'john';
    console.log(name);  // Output: john
}
console.log(name);  // Output: john (var is function scoped, not block scoped)

// --------------------------------------------
let name = 'henil';
{
    let name = 'john';
    console.log(name);  // Output: john
}
console.log(name);  // Output: henil (let is block scoped)

// --------------------------------------------
const author = 'henil';
console.log(author);  // Output: henil


