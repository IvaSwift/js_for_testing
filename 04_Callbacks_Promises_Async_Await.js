//Sync code
// function print(string){
//     console.log(string)
// }
// print('Start')
// print('Printing something')
// print('Finish')

//Async code
function print(string){
    setTimeout( () => {
        console.log(string)
    }, Math.floor(Math.random() * 100)) 
}

print('Start')
print('Printing something')
print('Finish')