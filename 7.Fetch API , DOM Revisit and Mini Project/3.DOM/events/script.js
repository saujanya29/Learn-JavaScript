
const body =  document.body;

// Accessing the childrens
const children = body.children[1].children[0].innerHTML = "changed";
console.log(children);

const list = document.getElementById('list');
// last or first element can be accessed like this
console.log(list.lastElementChild.innerHTML = "changed Eight");






const numberInput = document.getElementById('number-input');
// numberInput.value = "anuj"


// BY default the submit btn refresh the page by passing the input to action
// so we will change it and use it to print value in console

const submitBtn  =document.getElementById('submit-btn');
const form = document.getElementById('dummy-form');

// changing the operation of submit button 
submitBtn.addEventListener('click',(event) =>{
    event.preventDefault();
    console.log(numberInput.value); //this will print the value entered as input
})

