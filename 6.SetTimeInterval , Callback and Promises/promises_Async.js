
 async function getcheese(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("cheese 🧀")
        }, 1000);
    })
}

async function makeDough(cheese){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve( `${cheese} dough 🍪`)
        }, 1000);
    })
}

 async function makePizza(dough){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve( `${dough} pizza 🍕`)
        }, 1000);
    })
}

async function orderPizza(){
     try {
        
    // Here cheese is value in resolve function of getcheese
    const cheese = await getcheese(); 
    console.log('now we have ',cheese);
    const dough = await makeDough(cheese);
    console.log('now we have ',dough);
    const pizza = await makePizza(dough);
    console.log('now we have ',pizza);
    return pizza;

     } catch (error) {
        console.log(error);
     }
    
}


// async and await apply to asynchronus function and async is declairation that function that it asynchronus and await is means we will till that function get executed

orderPizza().then((pizza)=>{
    console.log(pizza);
}).catch(e =>{

});