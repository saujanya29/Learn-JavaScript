// In This Script We Will Create 
const  grandparent = document.getElementById("grandparent");
const  parent = document.getElementById("parent");
const  child = document.getElementById("child");




//  Either create fucntion and pass in the event listener 
// or create a annonymus function and write the body of fucntion itself there
child.addEventListener('click' , () => {
    console.log('Child Clicked');
})

parent.addEventListener('click' , () => {
    console.log('Parent Clicked');
})

grandparent.addEventListener('click' , () => {
    console.log('Grandparent Clicked');
})