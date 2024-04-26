// 1. Here We will create a code that will show that box is clicked by mouse 

const container = document.getElementById('container');
const box =document.getElementById('box');

// // this is a arrow function created to print clicked in console 
// const logMessage = () =>{
//     console.log('clicked');
// }

// box.addEventListener('click',logMessage);







/*


// 2. We will create a code that will show the offset of x and y axis(Coordinates) 


// // Creating a paragraph 
const Coordinates = document.createElement('p');
// // Append paragraph in the body of the document
document.body.append(Coordinates)

const logMessage = (event) => {
    // Adding text in paragraph
    Coordinates.innerHTML = `${event.offsetX} ${event.offsetY}`;
}
// // this will create eventlistner that will show offset of x and y when clicked or mouse moved in box 

// //Clicked
// container.addEventListener('click',logMessage);

// // moving Mouse
 container.addEventListener('mousemove',logMessage);

*/ 






 // 3. Now we will create code that will move the box where the mouse is hovered

const coordinates = document.createElement('p')
document.body.append(coordinates);

const logMessage = (event) =>{
    // console.log(event);
    coordinates.innerHTML = `${event.offsetX} ${event.offsetY}`;  
    // $ will give the coordinates
    // style box left and top equal to offset x and y so that when mouse is hovered at any point in the screen then the box ussi jagah pahuch jaye   
    box.style.left  = `${event.offsetX}px`;
    box.style.top = `${event.offsetY}px`;
}

// to make box look like circle just change the border-radius to 50%
container.addEventListener('mousemove',logMessage);



