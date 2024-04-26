
const images = [
    'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1948&q=80',
    'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'

    
]

// storing no of images 
const n = images.length;
const flexContainer = document.getElementById('flex-container');
const leftButton = document.getElementById('left-btn');
const rightButton = document.getElementById('right-btn');
const corouselNav=  document.getElementById('corousel-nav');

// setting container width and flexcontainer width by mulplying by n
const containerWidth = 40;
const flexContainerWidth = n*containerWidth;
flexContainer.style.width = flexContainerWidth;


for(let i =0; i<n; i++){
    const newImg = document.createElement('img');
    //adding each img from array to flex container
    newImg.src = images[i];
    // giving style to img by adding new class using js 
    newImg.classList.add('img-style');
    // appended the img into flex container
    flexContainer.appendChild(newImg);

    // Creating a div (dotDiv)
    const dotDiv = document.createElement('div');
    // Add corousel-dot class in it so properties of this class get appplied 
    dotDiv.classList.add('corousel-dot');
    //Now append this div to coroselNav Div
    corouselNav.appendChild(dotDiv);

    // Handle the click on the dotDiv 
    dotDiv.addEventListener('click', (event) =>{
        // this index is the position of dot in array of corousalNav's childrens
        const index = [...corouselNav.children].indexOf(event.target);
        showImg(index);
    })
    
}

// Now Adding the corousel feature

let currPosition = 0;
// Calling the function here initially so that first dot get active class 
showImg(0);

leftButton.addEventListener('click' , () =>{
    
    if(currPosition > 0){
       // moving the img to left by 1times 
        showImg(currPosition -1);
        
    }
    else{
        // if curr positon is first img then show the last one
         showImg(n-1);
    }
    
})

rightButton.addEventListener('click' , () =>{
    if(currPosition < n-1){
        showImg(currPosition+1);
    }
    else{
        // if crr position is last img then show first img
        showImg(0)
        }
   
})



 //IN All THIS FUNCTION WILL ACCEPT CLICKED DOT AS INPUT AND THEN FIRSTLY FIND THE THE PREV DOT REMOVE THE WHITE BG COLOR BY  REMOVING ACTIVE AND THEN ADD THE ACTIVE CLASS TO THE CLICKED DOT //

function showImg(Position){
   
    
    // This will store the position or index of prevdot
    const prevPos = corouselNav.children[currPosition];
    //this will remove active class from prevdot so white BG will be removed
    prevPos.classList.remove('active');
    // now changing the currposition to clicked position
    currPosition = Position;

    // Now access the currDot position 
    const currDot = corouselNav.children[currPosition];
    // and adding the active class to it so CurrDot will have White BG color 
    currDot.classList.add('active');


 // Here negative so translate img in neg x dir 
    const translateXDistance = -currPosition * containerWidth;
    flexContainer.style.transform = `translateX(${translateXDistance}vw)`;
}


