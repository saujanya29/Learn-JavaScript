const a = [1,2,3,4,5,6];

// HIGH ORDER FUNCTIONS : We can pass function as conditions and using this we dont need to write the same function again and again just change the conditions
function filterNumbers ( conditionFunction ) {
    const b = [];
    for(let i =0;i<a.length;i++){
        if(conditionFunction(a[i])){
            b.push(a[i]);
        }
    }
    return b;
}

// Create a function and pass it in the filterNUmbers as 
const evenNo = (num) =>{
    return num%2 == 0;
}

const oddNo = (num) =>{
    return num%2 != 0;
}

const ThreeMultiple = (num) =>{
    return num%3 == 0;
}

const evenNum = filterNumbers(evenNo);
const oddNum = filterNumbers(oddNo);
const MultipleOfThree = filterNumbers(ThreeMultiple);

console.log(evenNum);
console.log(oddNum);
console.log(MultipleOfThree);

// Note : So main Motive of high order function is that we will create only one main function and for different conditions we will pass different function as attribute and get desired result and dont need to create whole function again and again 
