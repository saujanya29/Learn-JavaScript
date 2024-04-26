let age = 8;

console.log("age is "+age);
console.log(typeof(age));

let person = "Saujanya";
console.log("name is : " + person);
console.log(typeof(person));



// Type Conversion :

let x = "234";
let y = Number(x)

console.log(y);
console.log(typeof(x));
console.log(typeof(y));



// Operators 

let a = 6;
let b = 6;

console.log(a==b);
console.log(a != b);

console.log(a > b);
console.log(a <b);

console.log(a >= b);
console.log(a <= b);

b = "6";
// Even if you change the data type it still true for == sign
console.log(a ==b);
// but === will be true only if data type is also same
console.log(a===b);
console.log(a != b);


// ** this will be calculating power ( a**b = a to power b)
let c = a**b;
console.log(c);


