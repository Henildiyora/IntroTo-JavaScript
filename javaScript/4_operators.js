// Operators and Expressions in JavaScript

/* 
Explanation:

1. Arithmetic Operators: Used to perform basic mathematical operations (+, -, *, /, %, **).
2. Increment and Decrement Operators: Used to increase or decrease a value by one (++, --).
3. Assignment Operators: Used to assign values to variables (=, +=, -=, *=, /=, %=, **=).
4. Comparison Operators: Used to compare two values (==, !=, ===, !==, >, <, >=, <=).
5. Logical Operators: Used to combine or invert boolean values (!, &&, ||).
6. Conditional (Ternary) Operator: Used to assign a value based on a condition (condition ? value_if_true : value_if_false).
7. Bitwise Operators: Used to perform bit-level operations (&, |, ^, ~, <<, >>, >>>).
8. Object Operators: Used to compare objects (==, ===, !=, !==). Note that object comparison checks for reference equality, not content equality.
*/

// Arithmetic operators
let num1 = 10;
let num2 = 5;
let sum = num1 + num2; // addition
let difference = num1 - num2; // subtraction
let product = num1 * num2; // multiplication
let quotient = num1 / num2; // division
let remainder = num1 % num2; // modulus
let power = num1 ** num2; // exponentiation

// Increment and decrement operators
let incDecNum1 = 10;
let incDecNum2 = 5;
let postIncrement = incDecNum1++; // post-increment
let preIncrement = ++incDecNum2; // pre-increment
let postDecrement = incDecNum1--; // post-decrement
let preDecrement = --incDecNum2; // pre-decrement

// Assignment operators
let assignNum1 = 10;
let assignNum2 = 5;
assignNum1 += assignNum2; // addition assignment
assignNum1 -= assignNum2; // subtraction assignment
assignNum1 *= assignNum2; // multiplication assignment
assignNum1 /= assignNum2; // division assignment
assignNum1 %= assignNum2; // modulus assignment
assignNum1 **= assignNum2; // exponentiation assignment

// Comparison operators
let compNum1 = 10;
let compNum2 = 5;
let isEqual = compNum1 == compNum2; // equality only value
let isNotEqual = compNum1 != compNum2; // inequality only value
let isStrictEqual = compNum1 === compNum2; // strict equality value and data type
let isStrictNotEqual = compNum1 !== compNum2; // strict inequality value and data type
let isGreaterThan = compNum1 > compNum2; // greater than
let isLessThan = compNum1 < compNum2; // less than
let isGreaterThanOrEqual = compNum1 >= compNum2; // greater than or equal to
let isLessThanOrEqual = compNum1 <= compNum2; // less than or equal to

// Logical operators
let bool1 = true;
let bool2 = false;
let logicalNot = !bool1; // logical NOT
let logicalAnd = bool1 && bool2; // logical AND
let logicalOr = bool1 || bool2; // logical OR

// Conditional (ternary) operator
let condNum1 = 10;
let condNum2 = 5;
let condResult = condNum1 > condNum2 ? "condNum1 is greater than condNum2" : "condNum1 is less than or equal to condNum2"; // ternary operator

// Bitwise operators
let bitwiseNum1 = 10;
let bitwiseNum2 = 5;
let bitwiseAnd = bitwiseNum1 & bitwiseNum2; // bitwise AND
let bitwiseOr = bitwiseNum1 | bitwiseNum2; // bitwise OR
let bitwiseXor = bitwiseNum1 ^ bitwiseNum2; // bitwise XOR
let bitwiseNot = ~bitwiseNum1; // bitwise NOT
let bitwiseLeftShift = bitwiseNum1 << bitwiseNum2; // bitwise left shift
let bitwiseRightShift = bitwiseNum1 >> bitwiseNum2; // bitwise right shift
let bitwiseUnsignedRightShift = bitwiseNum1 >>> bitwiseNum2; // bitwise unsigned right shift

// Object operators
let obj1 = { name: "John", age: 30 };
let obj2 = { name: "Jane", age: 25 };
let obj3 = { name: "John", age: 30 };
let objIsEqual = obj1 == obj2; // equality
let objIsStrictEqual = obj1 === obj2; // strict equality
let objIsNotEqual = obj1 != obj2; // inequality
let objIsStrictNotEqual = obj1 !== obj2; // strict inequality

// Logging results to console
console.log("Arithmetic Operators:");
console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);
console.log("Remainder:", remainder);
console.log("Power:", power);

console.log("\nIncrement and Decrement Operators:");
console.log("Post-Increment:", postIncrement);
console.log("Pre-Increment:", preIncrement);
console.log("Post-Decrement:", postDecrement);
console.log("Pre-Decrement:", preDecrement);

console.log("\nAssignment Operators:");
console.log("AssignNum1 after +=, -=, *=, /=, %=, **= :", assignNum1);

console.log("\nComparison Operators:");
console.log("Is Equal:", isEqual);
console.log("Is Not Equal:", isNotEqual);
console.log("Is Strict Equal:", isStrictEqual);
console.log("Is Strict Not Equal:", isStrictNotEqual);
console.log("Is Greater Than:", isGreaterThan);
console.log("Is Less Than:", isLessThan);
console.log("Is Greater Than or Equal:", isGreaterThanOrEqual);
console.log("Is Less Than or Equal:", isLessThanOrEqual);

console.log("\nLogical Operators:");
console.log("Logical NOT:", logicalNot);
console.log("Logical AND:", logicalAnd);
console.log("Logical OR:", logicalOr);

console.log("\nConditional Operator:");
console.log("Conditional Result:", condResult);

console.log("\nBitwise Operators:");
console.log("Bitwise AND:", bitwiseAnd);
console.log("Bitwise OR:", bitwiseOr);
console.log("Bitwise XOR:", bitwiseXor);
console.log("Bitwise NOT:", bitwiseNot);
console.log("Bitwise Left Shift:", bitwiseLeftShift);
console.log("Bitwise Right Shift:", bitwiseRightShift);
console.log("Bitwise Unsigned Right Shift:", bitwiseUnsignedRightShift);

console.log("\nObject Operators:");
console.log("Object is Equal:", objIsEqual);
console.log("Object is Strict Equal:", objIsStrictEqual);
console.log("Object is Not Equal:", objIsNotEqual);
console.log("Object is Strict Not Equal:", objIsStrictNotEqual);



// Bitwise operators in details 

/* 
Bitwise AND (&)
Performs a logical AND operation on each pair of corresponding bits of two numbers. The result bit is 1 only if both corresponding bits are 1, otherwise it is 0.

Bitwise OR (|)
Performs a logical OR operation on each pair of corresponding bits of two numbers. The result bit is 1 if at least one of the corresponding bits is 1, otherwise it is 0.

Bitwise XOR (^)
Performs a logical XOR operation on each pair of corresponding bits of two numbers. The result bit is 1 if only one of the corresponding bits is 1, otherwise it is 0.

Bitwise NOT (~)
Inverts all the bits of a number. The result is the bitwise complement of the original number, which is -(n + 1) for a given number n.

Bitwise Left Shift (<<)
Shifts the bits of the first operand to the left by the number of positions specified by the second operand. Bits shifted off to the left are discarded. Zero bits are shifted in from the right.

Bitwise Right Shift (>>)
Shifts the bits of the first operand to the right by the number of positions specified by the second operand. Bits shifted off to the right are discarded. The sign bit is used to fill the leftmost bits, thus preserving the sign of the number (sign-propagating).

Bitwise Unsigned Right Shift (>>>)
Shifts the bits of the first operand to the right by the number of positions specified by the second operand. Bits shifted off to the right are discarded, and zero bits are shifted in from the left. The sign bit is not preserved (zero-fill right shift).
*/

// Bitwise AND (&)
let bitANDNum1 = 5;  // Binary: 0101
let bitANDNum2 = 3;  // Binary: 0011
let resultAND = num1 & num2; // Binary: 0001, Decimal: 1

console.log(resultAND); // Output: 1

// Bitwise OR (|)

let bitORNum1 = 5;  // Binary: 0101
let bitORNum2 = 3;  // Binary: 0011
let resultOR = num1 | num2; // Binary: 0111, Decimal: 7

console.log(resultOR); // Output: 7

// Bitwise XOR (^)
let bitXORNum1 = 5;  // Binary: 0101
let bitXORNum2 = 3;  // Binary: 0011
let resultXOR = num1 ^ num2; // Binary: 0110, Decimal: 6

console.log(resultXOR); // Output: 6


// Bitwise NOT (~)
let bitNOTNum = 5;  // Binary: 0101
let result = ~bitNOTNum; // Binary: 1010, Decimal: -6 (since ~5 is -(5 + 1))

console.log(resultNOT); // Output: -6

// Bitwise Left Shift (<<)
let bitLShiftNum = 5;  // Binary: 0101
let resultLShift = bitLShiftNum << 1; // Binary: 1010, Decimal: 10

console.log(resultLShift); // Output: 10

// Bitwise Right Shift (>>)
let bitRShiftNum = 5;  // Binary: 0101 
let resultRShift = bitRShiftNum >> 1; // Binary: 0010, Decimal: 2

console.log(resultRShift); // Output: 2


// Bitwise Unsigned Right Shift (>>>)
let bitURShiftNum = -5;  // Binary: 11111111111111111111111111111011 (32-bit representation)
let resultURShift = bitURShiftNum >>> 1; // Binary: 01111111111111111111111111111101, Decimal: 2147483645

console.log(resultURShift); // Output: 2147483645

