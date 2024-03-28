let x = 1;

x = -x;
console.log( x ); // -1, unary negation was applied
let z = 1, y = 3;
console.log( y - z ); // 2, binary minus subtracts values
/*
The following math operations are supported:

Addition +,
Subtraction -,
Multiplication *,
Division /,
Remainder %,
Exponentiation **.
*/
console.log( 5 % 2 ); // 1, the remainder of 5 divided by 2
console.log( 8 % 3 ); // 2, the remainder of 8 divided by 3
console.log( 8 % 4 ); // 0, the remainder of 8 divided by 4
// The exponentiation operator a ** b raises a to the power of b
console.log( 2 ** 4 ); // 2⁴ = 16
// a square root is an exponentiation by ½:
console.log( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root)
console.log( 8 ** (1/3) ); // 2 (power of 1/3 is the same as a cubic root)