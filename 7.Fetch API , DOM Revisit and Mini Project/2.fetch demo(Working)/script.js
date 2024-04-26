// const response = fetch('https://dummyjson.com/products/1')
//     .then((response) => {

//     })
//     .catch(err => {

//     })


// But Mostly We will use async and await to fetch upi :
// lets make it more interesting by adding loadingElement element and we will see loadingElement element till api gets fetches and obviouslywe will style a little a bit

async function fetchData() {
    try {

        const loadingElement = document.getElementById('loading');
        const phoneBox = document.getElementById('box');
        
        // Making Display property of loadig element as block and phone box as none so that initially till browser fetch api there is loading element which will be displayed in the sceeen
        loading.style.display = 'block';
        phoneBox.style.display = 'none';
       
        // Response is promise so used await 
        const response = await fetch('https://dummyjson.com/products/1');

        console.log(response);

        if(response.statusText == "") {
            // converted response into json so that it can be read as object
            // its something like parse 
            const jsonData = await response.json();
            console.log(jsonData);
    
            // Now when we have fetched the api now will make the display property of loading element as none so its not visible anymore 
            // phonebox as block so that our main content get displayed in the screen 
            phoneBox.style.display = 'block';
            loading.style.display = 'none';
       
            // This is function to load data 
            loadData(jsonData);
        } 
        else {
            loading.innerHTML = "Invalid response";
        }

        
    // If there is any error in fetching 
    } catch (err) {
        console.log(err);
        loading.innerHTML = "Invalid response";
    } 
    
}


function loadData(jsonData) {
    const phoneTextElement = document.getElementById('phone-title');
    const phoneDescElement= document.getElementById('phone-desc');
    const phoneImg = document.getElementById('phone-img');


    // destructuring the json element 
    const { title, description, thumbnail } = jsonData;

    // here changing the html element of the phonebox
    phoneTextElement.innerHTML = title;
    phoneDescElement.innerHTML = description;
    phoneImg.src = thumbnail;
}

// Now calling the main function 

fetchData();