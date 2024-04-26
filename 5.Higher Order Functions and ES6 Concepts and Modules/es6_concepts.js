// Destructuring

const obj = {
      name : "anuj",
      age: 26
}

const {name ,age} = obj;
console.log(name,age);



//Default Parameter

// function greet(name = "lerner"){
//       console.log("Hello "+name);
// }

// greet(); // Hello lerner
// greet("anuj") ; // Hello anuj




//Spread Operator (...array) : 

// here spread operator is used for taking multiple value being passed in the function without specifying in the function body 

function greet(...a){
    console.log("hello",a);
}

//  As many value passed in the calling function that many will be accepted by the function
greet("anuj", "ram"); // 


const a = [1,2,3];
const b =  [4,...a,5,6];

console.log(b);  //[4, 1, 2, 3, 5, 6]



// spread function in objects

const animal = {
    name: "simba",
    age: 24,
}

const FullInfo = {
    // Including the anumal object in the fullinfo using spread function
    ...animal,
    address: 'pahad',
    legs: 4,
}


console.log(animal);    //{name: 'simba', age: 24}
console.log(FullInfo);   // {name: 'simba', age: 24, address: 'pahad', legs: 4}
