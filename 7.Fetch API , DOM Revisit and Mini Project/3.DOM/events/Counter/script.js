// Here we will Create code for counter so when we click the + or - it increase or decrease the number


const counterText = document.getElementById('counter');
const posBtn = document.getElementById('pos-btn');
const negBtn = document.getElementById('neg-btn');

let count = 0;
updateCount();

posBtn.addEventListener('click',() =>{
    count++;
    updateCount();
})

negBtn.addEventListener('click',()=>{
     
    count--;
    updateCount();
})

function updateCount(){
    counterText.innerHTML = count;
}


