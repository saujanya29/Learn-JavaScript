/* 
const student ={
    name: 'anuj',
    age: 26,
  //This keyword dont work in arrow function and used to access current obj keys
    talk : function (){
        console.log(`My Name is ${this.name} and Age is ${this.age}`);
    }

}
student.talk();

//BakcTick ::

const emoji = " <)";
// There are two ways to print the variable value along with string text
//1.
// const love = console.log("I love Coding" + emoji);

//2. here $ access variable value and conver it into string 
// const love = console.log(`I Love Coding ${emoji}`);

*/





/* 


// Classes : They are Blueprint of objects and many objects can be created using a class

class Vehicle{
      
  //Constructor is created  when vehicle class will be called and this keyword is used to assign values to the objects
  constructor(model,wheels){
    
     this.model = model;
    this.wheels = wheels;
  }

  // Functions
  start (){
     console.log('Vehicle Starting');
  }
}

const obj1 = new Vehicle('Brezza' , 4);
console.log(obj1);

const obj2 = new Vehicle('truck' , 6);
console.log(obj2);

obj1.start();


*/



// JSON: Used for transmitting data from server to client

// In JSON String Keys/Value Pair Will Be In the Quotes
const JsonString = '{"name" : "Anuj" , "Age" : 26}';

// To Convert Json String Into Json Objects use( JSON.parse()) Function

const JsonObject = JSON.parse(JsonString);

console.log(JsonObject);

// TO Convert Back TO String Use (JSON.Stringify) Function

const BacktoString = JSON.stringify(JsonObject);
console.log(BacktoString);







