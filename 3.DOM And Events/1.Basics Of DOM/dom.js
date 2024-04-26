/* Finding The HTML elements  */              /* */
    
// 1.BY USING IDs

// const box1 = document.getElementById('box-1');
// console.log(box1);


// 2.BY USING TAGS

// const div = document.getElementsByTagName('div');
// console.log(div);



// 3.BY USING CLASS NAME

// const container = document.getElementsByClassName('container');
// console.log(container);

// const box = document.getElementsByClassName('box');
// console.log(box);




// 4.BY USING CSS SELECTORS

// 4.1 QuerySelector
// const box3 = document.querySelector('#box-3');
// console.log(box3);

// // 4.2 QuerySelectorAll

// const boxMultiple = document.querySelectorAll('.container div'); // this will list the multiple Boxes in the form of Nodelist or can say arrays
// console.log(boxMultiple);




 // https://via.placeholder.com/100 // this is used for demo img




 /*Changing the HTML Elements : */

//  1.Changing HTML Content Using the InnerHTML Property

// document.getElementById('box-2').innerHTML = "<div><h2>This is h2</h2></div>";


//2. Changing HTML attribute value

document.getElementById('myimg').src = "https://via.placeholder.com/100";
document.getElementById('myimg').alt = "This is Dummy Img";



//3. Adding Class in The HTML

// USing the classList Property, we can add ,remove or toggle classes from html

// const element = document.getElementById('container');
// this will list out all the classes in the container class
// console.log(container.classList);



// THis will add another class to container class in run time using JavaScript
// element.classList.add('MainContainer');

// // we can check by Printing here 
// console.log(container.classList);



// Here we removing all the boxes from the container class in html and adding the same in the runtime using javaScript

const Container = document.getElementsByClassName('container');

for(let i = 0 ; i<10;i++){
    // creating div
    const boxElement = document.createElement('div');
    //assigning box class to the div
    boxElement.classList.add('box');
    // boxElement.innerHTML ='<h2>box </h2>';

    //appending the div in the container class 
    Container[0].append(boxElement);

}

console.log(container.classList);















