const age = 29;

if(age > 19) {
    console.log('you can drive');
} else {
    console.log('you cannot drive');
}


// Ternary Operator 
age > 19 ? console.log('you can drive') : console.log('you cannot drive');

// If else conditions
const day = 3;
console.log('calculating');

if (day == 1) {
    console.log('Sunday');
} else if (day == 2) {
    console.log('Monday');
} else if (day == 3) {
    console.log('Tuesday');
} else if (day == 4) {
    console.log('Wednesday');
} else if (day == 5) {
    console.log('Thursday');
} else {
    console.log('chill day');
}

console.log('done');



// Same Operation for switch
console.log('calculating for switch');

switch (day) {
    case 1:
        console.log('Sunday');
        break;
    case 2:
        console.log('Monday');
        break;
    case 3:
        console.log('Tuesday');
        break;
    case 4:
        console.log('Wednesday');
        break;
    case 5:
        console.log('Thursday');
        break;
    default:
        console.log('Chill day');
        break;
}

console.log('done');





// logical operators
// AND

/* 

const age = 59;

if(age > 19 && age < 40) {
    console.log('you can drive');
} else {
    console.log('you cannot drive');
}
*/


/*
 
const age = 29;
const isSkilled = false;

if((age > 19 && age < 40) || isSkilled) {
    console.log('you can drive');
} else {
    console.log('you cannot drive');
}

 */


// OR

// const age = 9;

// if(!(age > 19)) {
//     console.log('you can drive');
// } else {
//     console.log('you cannot drive');
// }