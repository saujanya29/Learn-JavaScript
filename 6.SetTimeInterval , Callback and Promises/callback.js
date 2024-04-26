// CallBack Function : A function is Passes in a Function is called Callback Function
// Callback is just a name can reanamed as anything
function orderPizza(callback){
      
       bakePizza((pizza) =>{
           callback(pizza);
       })
}

// bakePizza Function with 2sec timeout
function bakePizza(callback){
   
    makeDough((dough) =>{
        setTimeout(() => {
            const pizza = dough +"🍕";
            console.log("bake the Pizza" , pizza);
            callback(pizza);
        }, 2000);
    })
}

function makeDough(callback){
  
    setTimeout(() => {
           const dough = "🍥";
           console.log("Baked The Dough", dough);
           callback(dough);
    }, 2000);
}

function notifyMeOnSuccess(pizza){
    console.log("Here is my notification for",pizza);
}

orderPizza(notifyMeOnSuccess);


// Flow of code : using this flow of code understand how its working and what callback functions really are and how are they called 

// lines : 
//35 -->3 --> 5 --> 11 --> 13 --> 22 -->25,26,27 -->15,16,17 -->6-->31,32 ;