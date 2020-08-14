var todoDiv = document.getElementById("todoDiv");
var ul = document.getElementById("todoList");
var todoInput = document.getElementById("todoInput");

function getFirebaseData()
{
  
    firebase.database().ref('todo').on('child_added',function(data)
    {
        debugger;
        console.log(JSON.stringify(data.val()))
       
    
    var li = document.createElement("p");
    li.setAttribute("class","card-title");
    li.setAttribute("class","text-center");
    li.style.fontWeight = "bold";
 
    var textNode = document.createTextNode(data.val().todoInput);
    var editbtn = document.createElement("button");
    var edittextNode = document.createTextNode("Edit");
    var keynode = document.createElement("p");
    var keytextnode  = document.createTextNode(data.val().key);
    keynode.appendChild(keytextnode);
    keynode.style.display = "none";
    var delbtn = document.createElement("button");
    
    var deltextNode = document.createTextNode("Delete");
   
    


   editbtn.appendChild(edittextNode);
   delbtn.appendChild(deltextNode);
  editbtn.setAttribute("onclick","EditTodo(this)");
  editbtn.setAttribute("class","btn btn-primary ml-5");
  delbtn.setAttribute("class","btn btn-primary ml-2");
  delbtn.setAttribute("onclick","DeleteTodo(this)");
   li.appendChild(textNode);
   li.appendChild(editbtn);
   li.appendChild(delbtn);
   li.appendChild(keynode);
   ul.appendChild(li);
 
        
    })

    // firebase.database().ref('todo').on('child_added',function(data)
    // {
    //     console.log(data.val())
        
    // })
    
}

getFirebaseData();

function todo()
{
debugger;
  
    var key = firebase.database().ref('todo').push().key;
    var todo = {

        todoInput : todoInput.value,
        key:key
    }

  
    var li = document.createElement("p");
    li.setAttribute("class","card-title");
    li.setAttribute("class","text-center");
    li.style.fontWeight = "bold";
    var textNode = document.createTextNode(todoInput.value);
    var editbtn = document.createElement("button");
    var edittextNode = document.createTextNode("Edit");
    var keynode = document.createElement("p");
    var keytextnode  = document.createTextNode(key);
    console.log(keytextnode)
    keynode.appendChild(keytextnode);
    keynode.style.display = "none";
    var delbtn = document.createElement("button");
    
    var deltextNode = document.createTextNode("Delete");
   
    console.log(key)
    firebase.database().ref('todo/' + key).set(todo);


//    editbtn.appendChild(edittextNode);
//    delbtn.appendChild(deltextNode);
//   editbtn.setAttribute("onclick","EditTodo(this)");
//   editbtn.setAttribute("class","btn btn-primary ml-5");
//   delbtn.setAttribute("class","btn btn-primary ml-2");
//   delbtn.setAttribute("onclick","DeleteTodo(this)");
//    li.appendChild(textNode);
//    li.appendChild(editbtn);
//    li.appendChild(delbtn);
//    li.appendChild(keynode);
//    ul.appendChild(li);
//    console.log(textNode);
   todoInput.value = "";
} 


function EditTodo(e)
{
   debugger;
    var val = e.parentNode.firstChild.nodeValue;
    var keyparent = e.parentNode.lastChild.childNodes[0].data;
    console.log(keyparent);
    console.log(val);
    var inpPrompt = prompt("Enter Todo to Edit",val);
    e.parentNode.firstChild.nodeValue = inpPrompt;
   
    
      firebase.database().ref('todo/' + keyparent).set({
       
        key:keyparent,
        todoInput:inpPrompt

        
    
        }) 
        }

function DeleteTodo(e)
{
    var keyparent = e.parentNode.lastChild.childNodes[0].data;
    firebase.database().ref('todo/' + keyparent).remove();
    e.parentNode.remove();

}

function DeleteAllTodo()
{
  
  var delTodoAll = document.getElementById("todoList")
  firebase.database().ref('todo/').remove();
  delTodoAll.innerHTML = "";
  
}
