
// const words = ["RAM",'SHYAM','13',5]

// console.log(words);   // This will Print the whole array

/*  */


/* Here if let is type then this variable can be changed later but if const then cant be changed */

// let a = [10,4,6,3,8];
// console.log(typeof(a));

// a = 12 ;
// console.log(typeof(a));





/* ARRAYS IN LOOPS :*/
 const words = ["RAM",'SHYAM','13',5]
// for(let i =0 ; i<words.length;i++){
//      console.log("Hello", words[i]);
// }





/* For Finding the Index of the element  */

// const index = words.indexOf(5);
// console.log(index);




/* For Checking inclusiveness of the element */

// const IsPresent = words.includes("13")
// console.log(IsPresent);







/* Before Sorting */
// console.log(words);

// words.sort();    // Sorting is done by converting all element to    string 

/* After Sorting */
// console.log(words);


/* Another Method to Declair Array */
//const words = new Array(4, 1, 6, 'hi', 3)






/*

words[7] = "Hariom";

console.log(words);
console.log(words[7]);

*/





/* Push and Pop Operation in Array */

// words.push("Miracle");
// words[0]= "Anju";
// console.log(words);

// words.pop();

// console.log(words);
// console.log(words.length)





/* IMP : Splices Function  

// this will delete the elements in the array
// syntax: array.splice(deletingIndex , no of element to be deleted)
 
// Here is we can also insert elements in the array
// New Syntax : array.slice(deletingIndex , no of element to be deleted, "Element to be added ")
 
*/




// Before : words(["RAM",'SHYAM','13',5])

// words.splice(1,2, "Shivam","Saujanya")
// console.log(words);

// After: ['RAM', 'Shivam', 'Saujanya', 5]





/* when Inserting without removing - make number of elements to be deleted 0 */

// Before : words(["RAM",'SHYAM','13',5])
// words.splice(1,0, "Shivam","Saujanya");
// console.log(words);
//  After: ['RAM', 'Shivam', 'Saujanya', 'SHYAM', '13', 5]


/*  */

/* For Each Loop */

let a = [10,4,23];

const myFunction = (element,index) =>{
    console.log("printing",element,'index is',index);
}

a.forEach(myFunction);





// This for sorting Number and in general sort function consider elements as string and sort them alphabatically
a.sort((p, qqq) => {
    // if(p > q) return 100;
    // if(p < q) return -100;
    // return 0;
    return p-qqq;
})

console.log(a);


