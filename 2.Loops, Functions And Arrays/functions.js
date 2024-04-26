// Syntax without Parameters
function Greetings (){
    console.log('Hi');
    console.log("Namaste");
    console.log('Wassssup',);
}

Greetings();





/* Syntax of function with Parameters*/

// function Greetings (name){
//     console.log('Hi', name);
//     console.log("Namaste", name);
//     console.log('Wassssup',name);
// }

// Greetings("Saujanya");






/* Storing the result of function */

// function addition(a,b){
//     console.log('Starting the Operation');
//     return a+b;
// }

// let result = addition(3,9);
// console.log(result);





/*We can also store the function value like this */
 let myAddition = function (a,b){
    console.log('Starting the Operation');
    return a+b;
}
console.log(myAddition(4,6));








/* */

/*  Arrow Function : same as above with little change in syntax */

// let myAddition = (a,b) =>{
//     console.log('Starting the Operation');
//     return a+b;
// }

// console.log(typeof myAddition);
// // Can use variable name as function 
// console.log(myAddition(4,8));

