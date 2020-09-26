let signup = () =>
{
    let email = document.getElementById("email");
    let password = document.getElementById("password");
   
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    
    .then((result) => 
    { 
        console.log(result);
    })

    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
       console.log(errorMessage)
      });
}

let signin = () =>
{
    let email = document.getElementById("loginemail");
    let password = document.getElementById("loginpassword");
   
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
  
    .then((result) => 
    { 
        console.log(result);
    })

    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
       console.log(errorMessage)
      });
    
}
