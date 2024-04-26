// Concepts of Callback Function

function orderPizza(myfunction){
    // Here nested loop get created so we mostly use promises
    getCheese((cheese)=>{
           makeDough(cheese,(dough)=>{
               bakePizza(dough, (pizza) =>{
                myfunction(pizza);
               })
           })
    })
}




function getCheese (next){ // next is callback function
     
    setTimeout(() => {

        const cheese = "🧀";
        console.log(`Sending the ${cheese}`);
        next(cheese); // here function passed in getcheese will be called (callback function)

    }, 2000);
}

function makeDough(cheese,next){
    setTimeout(() => {
           
         const dough = cheese +"🍪";
         console.log(`sending the ${dough}`);
         next(dough); //here function passed in makedough will be called (callback function)
    }, 2000);
}
function bakePizza(dough , next){
    setTimeout(() => {
         const pizza = dough + "🍕";
         console.log(`sending the ${pizza}`);
         next(pizza);//here function passed in bakePizza will be called (callback function)
    }, 2000);
}

function notifyMeOnSuccess(pizza){
    console.log("here is my notification for ",pizza);
}

orderPizza(notifyMeOnSuccess);




// Flow of code:
// Line : 48 --> 3 -->5-->17-->21,22,23 --> 6 --> 28 --> 31,32,33 --> 7 -->36 -->38,39,40, --> 8 --> 44,45 --> end;