const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let a;
rl.question(`What's your name? `, name => {
  console.log(`Hi ${name}!`);
  a= name;
  rl.close();
});

console.log(a)