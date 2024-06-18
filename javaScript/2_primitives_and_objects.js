// Primitive Data Types in JavaScript

// 1. null
// Represents the intentional absence of any object value.
// It is one of the primitive values in JavaScript.
let n = null;

// 2. number
// Represents both integer and floating-point numbers.
// There is only one number type in JavaScript which can store both types of numbers.
let num = 10;

// 3. string
// Represents a sequence of characters used to represent text.
// Strings are immutable, meaning once created, they cannot be changed.
let str = "hello world";

// 4. boolean
// Represents a logical entity and can have two values: true or false.
let bool = true;

// 5. undefined
// Represents a variable that has been declared but not yet assigned a value.
let undef = undefined;

// 6. symbol
// A unique and immutable primitive value and may be used as the key of an object property.
let sym = Symbol("hello");

// 7. bigint
// Represents an integer with arbitrary precision.
// BigInt is primarily used when you need to work with large integers outside the safe range for numbers.
let big = BigInt(10);

// Output the values and their types
console.log(n, num, str, bool, undef, sym, big);
console.log(typeof n, typeof num, typeof str, typeof bool, typeof undef, typeof sym, typeof big);

// Non-Primitive Data Types in JavaScript

// Objects
// Objects are collections of key-value pairs.
// Keys are strings or symbols, and values can be any type, including other objects.
const item = {
    "n": null,
    "num": 10,
    "str": "hello world",
    "bool": true,
    "undef": undefined,
    "sym": Symbol("hello"),
    "big": BigInt(10)
}

// Accessing values in the object
console.log(item['bool']);  // Output: true

// Explanation of each property in the object
/*
"n": null,           // Represents a null value.
"num": 10,           // Represents a number value.
"str": "hello world",// Represents a string value.
"bool": true,        // Represents a boolean value.
"undef": undefined,  // Represents an undefined value.
"sym": Symbol("hello"),  // Represents a symbol value.
"big": BigInt(10)    // Represents a bigint value.
*/

