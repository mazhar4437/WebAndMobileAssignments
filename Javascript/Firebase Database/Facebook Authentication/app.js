

let login = () =>
{
  
var provider = new firebase.auth.FacebookAuthProvider();

//let promise = new Promise((resolve,reject)=>
//{
  console.log("Hi No Promise");
firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    
    console.log(user);
    document.getElementById("login").style.display = "none";
    document.getElementById("maindiv").style.visibility = "visible";
    debugger;
    let myName = user.displayName;
    let myemail = user.email;
    let myuserID = user.uid;
    let myphoto = user.photourl;
   // resolve(result);
    document.getElementById("displayname").innerHTML = user.displayName;
    
   
    
        

   
  })
  
  .catch(function(error) {
   
  
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
   console.log(errorMessage);
   //reject(error);
  
 // }
 // );
 
});
//promise
//.then((data)=>
//{
  //console.log("Resolve = >",data)
firebase.database().ref('messages').on('child_added',function(data)
{
  debugger;
  console.log(JSON.stringify(data.val()))
  let carddiv = document.getElementById("carddiv");
 
  let cardtextbody = document.createElement("p");
  cardtextbody.className = "card-text";
  let textnode =  document.createTextNode((data.val().sender) + " : " + (data.val().message));
  cardtextbody.append(textnode);
  carddiv.append(cardtextbody);
 
}
)

//.catch((error)=>console.log("Error =>",error))
}



let btnsend  = () => 
{

 //let carddiv = document.getElementById("carddiv");
  let message = document.getElementById("message");
//  let cardtextbody = document.createElement("p");
  //cardtextbody.className = "card-text";
 // let textnode =  document.createTextNode( document.getElementById("displayname").innerHTML + " : " + message.value);
 //// cardtextbody.append(textnode);
 
 

let key = firebase.database().ref("messages").push().key;

let messages = 
{
    key: key,

    sender : document.getElementById("displayname").innerHTML,
    message :message.value
}
firebase.database().ref("messages/"+key).set(messages);
message.value = "";
}