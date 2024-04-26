// Error Handling : It Catch the error and instead of showing error to the user returns the desired text or anything 


// if The code in the element has an error then catch will be called
try{
      console.log(x);
}
catch(e){
    // console.log(e);             // THis will output what the error was 
    console.log("Error has Accured");
}
// There is finally function which will always be excuted
finally{
    console.log("this will always be executed");
}

// Note : With try function any of the catch or finally function should be called or both called otherwise it will show syntax error