function todo()
{
    var ul = document.getElementById("todoList");
   
    var li = document.createElement("p");
    li.setAttribute("class","card-title");
    li.setAttribute("class","text-center");
    li.style.fontWeight = "bold";
    var todoInput = document.getElementById("todoInput");
   var textNode = document.createTextNode(todoInput.value);
   var editbtn = document.createElement("button");
   var edittextNode = document.createTextNode("Edit");

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
   ul.appendChild(li);
   console.log(textNode);
   todoInput.value = "";
} 


function EditTodo(e)
{
    var val = e.parentNode.firstChild.nodeValue;
    console.log(val);
    var inpPrompt = prompt("Enter Todo to Edit",val);
    e.parentNode.firstChild.nodeValue = inpPrompt;
    
}

function DeleteTodo(e)
{
    e.parentNode.remove();

}

function DeleteAllTodo()
{
  var delTodoAll = document.getElementById("todoList")
  delTodoAll.innerHTML = "";
}
