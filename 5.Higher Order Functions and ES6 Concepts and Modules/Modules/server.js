// Modules : You Can acces the other js files or its functions as well

// For that we need to export from where function is created and import where function is desired to be used and mark type as module in the script of html

// So lets Import function from utilityto this servel file



// Importing addition function from utility
import { Addition } from "./utility";   


// If multiple functions to be imported in one line
// import { Addition,Substraction,Multiply } from "./utility";


// If we want to change the name of imported function
// import { Addition as add , Substraction as subs } from "./utility";


//if we want the default function to import then random_name will be that default function
// import random_name from "./utility";


const a = 5;
const b = 6;

const result = Addition(a,b);
console.log(result);
