// // Set TimeInterval functions

const a = 5;
const b = 6;


// console.log("Before big function Called");

// for(let i = 0; i<50000000;i++){

//     let n = i*4350934803;
// }

// console.log("After big function Called");






/* 
 

// //     SetTimeout Functions     // //

console.log("before greet");



function greet (obj){
    console.log("Hello", obj);
}

//Syntax : Time in milisecond -> so greet function will be excuted after 2sec 
 const clearT  = setTimeout(greet,2000,"anuj"); // here passing the function


 //This will clear the SetTimeout 
// clearTimeout(clearT);

//Another syntax for setTimeout function
// const greetTimeOutId = setTimeout( () =>{
//      console.log("Helloo");
// },2000)



const greetTimeoutId = setTimeout(() => {
// below block of code is function 
    greet({
        name: 'Anuj'
    })
    
}, 2000)


console.log(greetTimeoutId);

// clearTimeout function : You need id of setTimeout function which it returns//
clearTimeout(greetTimeoutId);

// console.log(greetTimeOutId);





*/









// SetInterval Functions : Repeat a block of code after some interval
let count =0;
function increaseCount(){
    count++;
    // This library is used for the date and time functions 
     const date = new Date().toTimeString();
     console.log(date);

    if(count == 5){
        // This clear the interval 
        clearInterval(setIntervalId);
    }
}


// Settting the increaseCount function to repeat after every 1 sec clear interval is called 
const setIntervalId = setInterval(increaseCount,1000);




