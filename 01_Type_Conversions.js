// let value = true;
// alert(typeof value); // boolean

// value = String(value); // now value is a string "true"
// alert(typeof value); // string

let value = true;
console.log(value);
console.log(typeof value); // boolean

value = String(value); // now value is a string "true"
console.log(typeof value); // string

// alert( "6" / "2" ); // 3, strings are converted to numbers
console.log( "6" / "2" ); // 3, strings are converted to numbers
let str = "123";
console.log(typeof str); // string

let num = Number(str); // becomes a number 123

console.log(typeof num); // number
let age = Number("an arbitrary string instead of a number");

console.log(age); // NaN, conversion failed
console.log( Number("   123   ") ); // 123
console.log( Number("123z") );      // NaN (error reading a number at "z")
console.log( Number(true) );        // 1
console.log( Number(false) );       // 0