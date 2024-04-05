console.log(2+2+'1'); // "41" and not "221"
console.log('1'+2+2);// "122" and not "14"
console.log( 6 - '2' ); // 4, converts '2' to a number
console.log( '6' / '2' ); // 3, converts both operands to numbers

let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

console.log( a ); // 3
console.log( c ); // 0

// let n = 2;
// n = n + 5;
// n = n * 2;
// This notation can be shortened using the operators += and *=:

let n = 2;
n += 5; // now n = 7 (same as n = n + 5)
n *= 2; // now n = 14 (same as n = n * 2)
console.log( n ); // 14

let counter = 1;
let aa = counter++; // (*) changed ++counter to counter++

console.log(aa); // 1
console.log(counter); //2

