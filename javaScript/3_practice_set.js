// 1. Create a variable of type string and try to add a number to it.
let a = 'henil'; // 'a' is a string
let b = 7; // 'b' is a number

// When a string is added to a number, the number is converted to a string and concatenated.
console.log(a + b); // Output: "henil7"

// 2. Use typeof operator to find the datatype of the string in the last question
console.log('Data type of a is', typeof(a)); // Output: "Data type of a is string"
console.log('Data type of b is', typeof(b)); // Output: "Data type of b is number"
console.log('Data type of a + b is', typeof(a + b)); // Output: "Data type of a + b is string"

// 3. Create a const object in JavaScript. Can you change it to a number later?
const obj = {
    name: 'henil',
    number: 7,
    isPrincipal: false
};
// No, you cannot reassign a const object to a different data type like a number.

// 4. Try to add a new key to the const object in problem 3. Were you able to do it?
obj['friend'] = 'tilak'; // Adding a new key-value pair to the const object
console.log(obj); // Output: { name: 'henil', number: 7, isPrincipal: false, friend: 'tilak' }

// You can also update existing properties of a const object.
obj['name'] = 'henil diyora';
console.log(obj); // Output: { name: 'henil diyora', number: 7, isPrincipal: false, friend: 'tilak' }

// 5. Write a JS program to create a word-meaning dictionary of 5 words.
const dict = {
    hello: 'a greeting',
    bye: 'a goodbye',
    good: 'a positive statement',
    bad: 'a negative statement',
    nice: 'a positive statement'
};

console.log(dict); // Output: { hello: 'a greeting', bye: 'a goodbye', good: 'a positive statement', bad: 'a negative statement', nice: 'a positive statement' }
console.log(dict.hello); // Output: "a greeting"
console.log(dict['hello']); // Output: "a greeting"
