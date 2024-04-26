// Lets create a train ticket promises sample

// Steps : select seat
// enter name
// payments

function bookRailwayTicket(){
    const seat  =  "A2";
    const name = "saujanya";
    const paymentAmount = 520;

     selectSeat(seat)
     .then((seat) =>{
        // here name and seat is from resolve if select seat 
        enterDetails(name,seat)
     })
     .then((details) =>{
        // here name and seat is from resolve of 
         SuccesPayment(name,seat,paymentAmount)
     })


}

function selectSeat(seat){

    return new Promise (function(resolve,reject) {
          setTimeout(() => {

              console.log(`seat confirmed` ,seat);
              resolve(seat);

          }, 2000);
    })
}

function enterDetails(name ,seat){
    return new Promise (function (resolve,reject){ 
    setTimeout(() => {
            
        console.log('name binded', name, 'with', seat);
        resolve(`confirmed ${name} ${seat}`);
        
        }, 2000)
         
    })
   
}

function SuccesPayment(name, seat,paymentAmount){
    return new Promise(function(resolve,reject){
      
    setTimeout(() => {
        
        console.log('payment confirmed', name, 'with', paymentAmount);

        resolve(`confirmed ${name} ${seat} ${paymentAmount}`);


    }, 2000);
       

    })
}

bookRailwayTicket()
