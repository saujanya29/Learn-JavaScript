
// Accessing the elements 

// const headingElement  = document.getElementById('heading');
// const headingElement = document.getElementsByClassName('heading')
// console.log(headingElement[1]);
// console.log(headingElement); //collection of elements



const containerDiv = document.getElementById('container');

const count = 123;

containerDiv.innerHTML = `<h1> ${count} this is inside the container </h1>
                          <p> This is also there </p>`

containerDiv.style.border = "2px solid black";
containerDiv.style.padding = "20px";

// Adding classes to element
containerDiv.classList.add('funky');
console.log(containerDiv.classList);


const img = document.getElementById('dummy-img');
img.src = "https://via.placeholder.com/200";
console.log(img);


// creating new element and then append it into any class

const newElement = document.createElement('h1');
newElement.innerHTML = 'this is new h1';
containerDiv.appendChild(newElement) ;
