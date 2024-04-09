// function makeUser() {
//     return {
//       name: "John",
//       ref: this
//     };
//   }
//   let user = makeUser(); 
// //   alert( user.ref.name ); // What's the result?
//   console.log( user.ref.name ); 

//* the same:
//   function makeUser1(){
//     return this; // this time there's no object literal
//   }
// //   alert( makeUser().name ); // Error: Cannot read property 'name' of undefined
//   console.log( makeUser1().name); 
//*

function makeUser() {
    return {
      name: "John",
      ref() {
        return this;
      }
    };
  }
  
  let user = makeUser();
  
//   alert( user.ref().name ); // John
  console.log( user.ref().name ); // John