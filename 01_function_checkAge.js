function checkAge(age){
    if (age>=18) {
        return true;
    } else {
        return confirm('Do you have permission from your parents?');
    }
}
// open 
// const open = require('open');
// (async () => {
// await open('https://google.com');
// })();
let age = prompt('How old are you?', 18);

// if ( checkAge(age) ) {
//     alert('Access granted');
// } else {
//     alert( 'Access denied')
// }

function showMovie(age) {
    if ( !checkAge(age) ) {
        alert( 'Access denied')
      return;
    }
  
    alert( "Showing you the movie" ); // (*)
    // ...
  }
showMovie(age);
