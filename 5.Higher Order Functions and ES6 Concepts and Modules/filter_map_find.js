// Filter Functions : it filter the element of array in the another array based on the conditions 



const a = [1,2,3,4,5,6,7];

function isEven (num){
    return num%2 == 0;
}


function Isodd (num){
    return num%2 != 0;
}

// Syntax
const b = a.filter(isEven);
const c = a.filter(Isodd);
console.log(c);
console.log(b);





// Map Function : it creates new array with the result of calling function for every every element . In all It modify the array and store in new array

function square(num){
    return num*num;
}

function negative (num){
    return -num;
}

// Syntax
const d  = a.map(square);
const e  = a.map(negative)

console.log(d);
console.log(e);


const Name = a.map((num) => "my name is "+ num);
console.log(Name);

// map Function in JSON

const student = [

    {
        name:"anuj",
        age: 34,
    },

    {
        name:"raj",
        age: 14,
    },

    {
        name:"love",
        age: 24,
    },

    {
        name:"skand",
        age: 14,
    }
]

// here element is random name which is a element in the student array
const grades = student.map((element) =>{
     if(element.age >20) {
     element.isPassed = true;
     }
     else{
        element.isPassed = false;
     }
     return element
})

console.log(grades);






























// Find function : it is similar to filter but it return first value satisfying the condition
const f = a.find((num)=>{
     return num%2==0;
})
console.log(f); // Return first element that is 2 





