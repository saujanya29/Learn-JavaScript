// Fetch API  //

// When We Fetch API It gives us the promise so we fetch using then and catch to fetch it 


// const response =  fetch('https://dummyjson.com/products/1');
// response
// .then(res => res.json())
// .then(json => console.log(json))
      


// const response = fetch('https://dummyjson.com/products/1')
//     .then((response) => {
//         console.log(response);
//     })
//     .catch(err => {

//     })





// But Mostly We will use async and await to fetch upi :
// lets make it more interesting by adding loadingElement element and we will see loadingElement element till api gets fetches and obviouslywe will style a little a bit 

 async function fetchData (){
  
    try {
         
    const loadingElement = document.getElementById('loading');
    const phoneBox = document.getElementById('box');

    loading.style.display = 'block';
    phoneBox.style.display = 'none';
   
    
    const response =  await fetch('https://dummyjson.com/products/2');
    console.log(response);


    // const res = await response.json();
    // console.log(res);



    if(response.statusText ==""){
    
    const jsonData = await response.json();
    console.log(jsonData);
     
    phoneBox.style.display = 'block';
    loading.style.display = 'none'
      
    loadData(jsonData);

    }
    else{
        
        loading.innerHTML = "Invalid response";

    }


    } 
    catch (error) {
        // console.log(error);
        loading.innerHTML = "Invalid response";
    }
     


}



 function loadData(jsonData){
    const phoneTextElement = document.getElementById('phone-title');
    const phoneDescElement= document.getElementById('phone-desc');
    const phoneImg = document.getElementById('phone-img');


   const { title, description, thumbnail } = jsonData;

    phoneTextElement.innerHTML = title;
    phoneDescElement.innerHTML = description;
    phoneImg.src = thumbnail;

}

fetchData();


