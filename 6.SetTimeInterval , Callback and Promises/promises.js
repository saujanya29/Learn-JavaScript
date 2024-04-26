// Promises : TO Handle the asynchromnus operation

function orderPizza(){
    // Syntax
    return new Promise((resolve, reject) => {
        setTimeout(() => {
             
            const IsAvailable = true;
            if(IsAvailable){
                const pizza = "🍕"
                resolve(pizza);
            }
            else{
                reject("we dont have pizza")
            }

        }, 2000);  
         
    })
}

const pizzaPromise = orderPizza();

// Then used for resolve
// catch used for reject

pizzaPromise
     .then((pizza) =>{
     // here pizza is value passed in resolve function 
        console.log("my pizza",pizza);
     })
     .catch(error =>{
        //  here error is "we dont have pizza " from reject function
         console.log("error Occured",error);
     })

orderPizza();


