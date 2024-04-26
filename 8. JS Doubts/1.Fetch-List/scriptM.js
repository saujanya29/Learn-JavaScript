const userDataTemplate = document.getElementById('profile-card-template');
const container = document.getElementById('container');




async  function fetchData(){
  //fetched the response
    const response = await fetch('https://dummyjson.com/users');
    console.log(response);
    // converted respons in json data 
    const data =  await response.json();
    // accessed the array of users data
    const users = data.users;
 

    // function to bind the data of users 
    BindData(users);
   
}


function BindData(users){
  // ran a for loop for each user data in array
       users.forEach((user ) => {
            // created a clone of profile-card
        const userCardClone = userDataTemplate.content.cloneNode(true);
        
        //accessing the element in the profile-card
        const userImage = userCardClone.querySelector('#user-img');
        const userName = userCardClone.querySelector('#user-name');
        const userEmail = userCardClone.querySelector('#user-email');

        // changing the element of profile card for each user data 
        userImage.src = user.image;
        userName.innerHTML = `${user.firstName} ${user.lastName}`;
        userEmail.innerHTML = user.email;

        // finnlly appending this clone in container so it get visible in the page
        container.appendChild(userCardClone);
       })
}

//calling function
fetchData();