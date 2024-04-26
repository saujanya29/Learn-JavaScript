// OBJECTS 

/* 

const Obj = {
    name: 'saujanya',  // This  one line is called "Key Pairs"
    age: 20,
    isAlive: true,

}

 //Obj='anuj' // Obj can not be changed as it is a const var
 
//  But the Keys in it can be changed 
Obj.name = "Golu";
Obj.age=21;

console.log(Obj.name);
console.log(Obj.age);

*/



/* 



const y = {
    name: "Anuj",
    age: 26,
    Hobbies: ['cricket','singing','cycling'],

    // We can create Object inside a Object
    food :{
        monday:'Pizza',
        tuesday:'Burger',
        Wednesday: 'Aloo',

        friday:{
            first: 'Panner',
            second: 'Bharata',
        }
    }
}


console.log(y.Hobbies);           // ['cricket', 'singing', 'cycling']
console.log(y['Hobbies']);      // ['cricket', 'singing', 'cycling']
console.log(y.Hobbies[2]);      //cycling

console.log(y.food.friday);    //  {first: 'Panner', second: 'Bharata'}

//{monday: 'Pizza', tuesday: 'Burger', Wednesday: 'Aloo', friday: {…}}
console.log(y.food);



// Another way to print arrays in objects
const FoodKey = 'food';
console.log(y[FoodKey]); // This will Print all elements in the food class

// we Can  Also Add Keys In The Objects
y.skills = 'Coding';
console.log(y);

*/





/* 
// Returning the object as return type 

function MyVehicle (){
      
    return {
        Type: 'Car',
        Wheels: 4,
    }

}

const MyVehicle1 = MyVehicle();
const MyVehicle2 = MyVehicle();
MyVehicle2.Wheels = 5;
console.log(MyVehicle1);  //{Type: 'Car', Wheels: 4}
console.log(MyVehicle2);   //{Type: 'Car', Wheels: 5}


console.log(typeof MyVehicle); //Function
console.log(typeof MyVehicle1); // Object


*/








/*

// Object Destructuring


// Storing key values in the variables 
console.log(y);

// const myname = y.name;
// const myage = y.age;

//This above two steps can be done in one line in ES6
// const{age:myage , name:myname} = y;


// If we want to store the keys in variable of same name
const{age,name : myname} = y;
console.log(age);      // 26


// Now myname will store the key value of name
console.log(myname);// Anuj


*/


/* 
// We can also pass fumction as value to keys in objects 

y.walk = function (){
    console.log("person is walking");
}

y.walk(); 

*/



// passing function in function

talking(() => {
    console.log("person is shouting");
})

function talking(Shouting) {
  
   console.log('Person is talking');
   Shouting();
}














