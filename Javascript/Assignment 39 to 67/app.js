/***************Chap 38 till 42 ********/
//1. 

// function power(a,b)
// {
//     var count = 0;
//     var res = a;
// while(count<b-1)
// {
//     res = res * a;
//     count++;
// }

// return res;

// }

// var inp = parseInt(prompt("Enter Value to calculate power"));
// var nooftimes = parseInt(prompt("Enter Value for number of time to calculate power"));
// var value = power(inp,nooftimes);
// alert(value);


//2
// function leap(inp)
// {


//     if(inp % 4 == 0 || inp % 100 == 0 || inp % 400 == 0)
//     {
//       alert(inp + " is a Leap Year");
//     }

//     else
//     {
//         alert(inp + " is not a Leap Year");
//     }

//  }
//   var year = parseInt(prompt("Enter Year"));
//   leap(year);

//3.


// function area(s,a,b,c){

//     var ar = s*(s-a)*(s-b)*(s-c); //4.5(4.5-2)(4.5-3)(4.5-4)
//     alert("Area of triangle is " + ar);

// }

// function lengthofSides(a,b,c)
// {
//     var s = (a+b+c)/2;
//     //s= 4.5
//      return area(s,a,b,c);


// }

// var leng1 = parseFloat(prompt("Enter Length  : "));
// var leng2 = parseFloat(prompt("Enter Breadth : "));
// var leng3 = parseFloat(prompt("Enter Height   : "));
// lengthofSides(leng1,leng2,leng3);

//4.


// function mainFunc()
// {
//    var sub1 = parseFloat(prompt("Enter Marks for Subject 1")); 
//    var sub2 = parseFloat(prompt("Enter Marks for Subject 2"));
//    var sub3 = parseFloat(prompt("Enter Marks for Subject 1"));
//    var average = CalAverage(sub1,sub2,sub3);
//    var percentage = CalPercent(sub1,sub2,sub3);
//    alert("Average Marks of Student for all subjects is " + average);
//    alert("Percentage of Student is " + percentage);

// }


// function CalAverage(sub1,sub2,sub3)
// {
//    var average = (sub1 + sub2 + sub3) / 3;
//    return average;

// }

// function CalPercent(sub1,sub2,sub3)
// {
//     var totMarks = 300;
//    var per = ((sub1 + sub2 + sub3)/ totMarks) * 100 ;
//    return per;

// }

// mainFunc();

//5.
// function IndexOf(s,str)
// {


//     var i = 0,flag = false;
// do 
// {

//     if(s === str[i])
//    {
//        alert("Index of character " + s + " is " + i);
//        flag = true;
//        break;
//    }

//    else
//    {
//        i++;
//        flag = false;
//    }


// }
// while(i<str.length)

// if(flag == false)
//    {
//     alert("Your given character is not found");
//    }

// }

// var str = prompt("Enter String").toLowerCase();
// var s = prompt("Enter character to find its index in your string").toLowerCase();
// IndexOf(s,str);

//6.

// function removeVowels()

// {

//     var str = prompt("Enter String to remove all vowels from it");

//     var i = 0;
//    var finalstr = "";

//   do
//   {
//     if(str.toLowerCase().charCodeAt(i) != 97 && str.toLowerCase().charCodeAt(i) != 101 && str.toLowerCase().charCodeAt(i) != 105 && str.toLowerCase().charCodeAt(i) != 111 && str.toLowerCase().charCodeAt(i) != 118)
//     {
//     finalstr += str[i];
//     i++;
//     }
//     else
//     {
//         i++;
//     }
//   }
//   while(i < str.length)



//     alert("Final String is " + finalstr);


// }

// removeVowels();

//7.

// function VowelsCounts()
// {
//     var vowelstring = prompt("Enter String");
//    //Pleases read this application and give me gratuity
//     var count = 0,flag = false;
//    var i = 0;
//     do 
//     {

//     if(vowelstring.toLowerCase().charCodeAt(i) == 97 || vowelstring.toLowerCase().charCodeAt(i) == 101 || vowelstring.toLowerCase().charCodeAt(i) == 105 || vowelstring.toLowerCase().charCodeAt(i) == 111 || vowelstring.toLowerCase().charCodeAt(i) == 118)
//     {
//        flag = true;
//     }
//     else
//     {
//         flag = false;

//     }
//     switch (flag) {

//         case true:

//              i++;
//              if (vowelstring.toLowerCase().charCodeAt(i) == 97 || vowelstring.toLowerCase().charCodeAt(i) == 101 || vowelstring.toLowerCase().charCodeAt(i) == 105 || vowelstring.toLowerCase().charCodeAt(i) == 111 || vowelstring.toLowerCase().charCodeAt(i) == 118)
//             {
//             count++; 
//             i++;
//             continue;
//             }
//         default:
//             i++;
//             continue;
//     }


// }
// while(i<vowelstring.length)

// alert(count);
// }

// VowelsCounts();

//8.


//9.


//10.





/***************Chap 43 till 48 ********/
//1,2 Done on HTMl 

//3.
function RemoveRow() {


  var td = event.target.parentNode;
  var tr = td.parentNode; // the row to be removed
  tr.parentNode.removeChild(tr);

}

//4.
function ChangeImage(id, src) {
  debugger;
  var img = document.getElementById(id);
  img.src = src;
}
//5.

function IncCounter(id) {
  debugger;

  var counter = document.getElementById("counter").innerHTML;
  var count = counter;

  count++;


  document.getElementById("counter").innerHTML = count;

}

function DecCounter(id) {
  debugger;

  var counter = document.getElementById("counter").innerHTML;
  var count = counter;
  count--;


  document.getElementById("counter").innerHTML = count;

}

/***************Chap 49 till 52 ********/



//1.


function ShowValues() {
  debugger;

  // let form = document.getElementById('signup');
  // let email = form.elements['email'];
  // let name = form.elements['Name'];
  // let fname = form.elements['fname'];

  // document.getElementById("email").innerHTML = email.value;
  //  document.getElementById("name").innerHTML = name.value;
  //  document.getElementById("fname").innerHTML = fname.value; 

  document.getElementById("email").innerHTML = document.getElementById("formemail").value;
  document.getElementById("name").innerHTML = document.getElementById("formName").value;
  document.getElementById("fname").innerHTML = document.getElementById("formFname").value;
}

//2.
function readmore() {
  debugger;
  var text = document.getElementById("text").innerHTML;
  var pera = document.getElementById("pera");
  var peraText = document.getElementById("peraText");
  pera.style.visibility = "visible";
  pera.innerHTML = peraText.innerHTML;
  text = pera.innerHTML;
}

//3.


function SaveValues() {
  debugger;
  var table = document.getElementById("table");
  var tr = document.createElement("tr");
  var tdtextIndex = document.createElement("td");
  var tdtextName = document.createElement("td");
  var tdtextClass = document.createElement("td");
  var tddel = document.createElement("td");
  var tdedit = document.createElement("td");
  var inpIndex = document.getElementById("index");
  var inpName = document.getElementById("FirstName");
  var inpClass = document.getElementById("ClassName");
  var tdtextNodeIndex = document.createTextNode(inpIndex.value);
  var tdtextNodeName = document.createTextNode(inpName.value);
  var tdtextNodeClass = document.createTextNode(inpClass.value);
  tdtextIndex.appendChild(tdtextNodeIndex)
  tdtextName.appendChild(tdtextNodeName)
  tdtextClass.appendChild(tdtextNodeClass)
  var del = document.createElement("button");
  var deltextnode = document.createTextNode("Delete");
  del.appendChild(deltextnode);
  tddel.appendChild(del)
  var edit = document.createElement("button");
  var edittextnode = document.createTextNode("Edit");
  edit.appendChild(edittextnode);
  tdedit.appendChild(edit)
  tr.appendChild(tdtextIndex);
  tr.appendChild(tdtextName);
  tr.appendChild(tdtextClass);
  tr.appendChild(tddel);
  tr.appendChild(tdedit);
  table.appendChild(tr);
  tdedit.setAttribute("onclick","editValues(this)")
  tddel.setAttribute("onclick","deleteValues(this)")
  tr.setAttribute("id","UpdatedRow")
  inpIndex.value = "";
  inpName.value = "";
  inpClass.value = "";

}


function editValues(e)
{

  document.getElementById("UpdateForm").style.display="block";
  var tdval = e.parentNode;
  var inpIndex = tdval.firstChild.innerHTML;
  var inpName = tdval.childNodes[1].innerHTML;
  var inpClass = tdval.childNodes[2].innerHTML;
  
   var upinpIndex = document.getElementById("upindex");
   var upInpName = document.getElementById("upFirstName");
   var upInpClass = document.getElementById("upClassName");

   upinpIndex.value = inpIndex;
   upInpName.value = inpName;
   upInpClass.value = inpClass;
  
   var updatebtn = document.createElement("button");
   var updatetextnode = document.createTextNode("Update");
   updatebtn.appendChild(updatetextnode);
   updatebtn.setAttribute("onclick","UpdateValues(this)")
   updatebtn.setAttribute("id","updbtn");
   console.log(updatebtn);
   tdval.childNodes[4].style.display="none";
   tdval.appendChild(updatebtn);

  document.getElementById("register").style.display="none";

}

function deleteValues(e)
{
  
  var tr = e.parentNode; // the row to be removed
  tr.parentNode.removeChild(tr);
}

function UpdateValues(e)
{
  debugger;
  var upinpIndex = document.getElementById("upindex");
  var upInpName = document.getElementById("upFirstName");
  var upInpClass = document.getElementById("upClassName");
  
  
  var tdval = e.parentNode;
  tdval.firstChild.innerHTML = upinpIndex.value;
  tdval.childNodes[1].innerHTML = upInpName.value;
  tdval.childNodes[2].innerHTML = upInpClass.value;
 
  document.getElementById("register").style.display="block";
  document.getElementById("UpdateForm").style.display="none";
  tdval.childNodes[5].style.display="none";
 
  tdval.childNodes[4].style.display="block";
 
}




/***************Chap 58-67 **************/
//Q1 Parts

//1 

document.write("DOM Chap 58-67");
document.write("<br/><br/><br/>");
var form_content = document.getElementById("form-content");
document.write("Element is " + form_content.nodeName);

//2

document.write("<br/><br/><br/>");
debugger;
var childContents = form_content.childNodes;
document.write("Child Elements are ");
for(var i=0; i<childContents.length; i++)
{

document.write(form_content.childNodes[i].nodeName)

}

//3
document.write("<br/><br/><br/>");
var showRender = document.getElementsByClassName("render");
for(var i=0;i<showRender.length;i++)
{
  document.write(showRender[i].innerHTML);
}



//4.


var firstname = document.getElementById("first-name");
firstname.value = "Mazhar";

//5.

var lastname = document.getElementById("last-name");
lastname.value = "Mehdi";

var email = document.getElementById("email");
email.value = "mazharmanasiya4@gmail.com";


//Q2 parts

//1
document.write("<br/><br/><br/>");
document.write("Node type element having id “form-content” is "  + form_content.nodeType);

//2.
document.write("<br/>");
var lastName = document.getElementById("lastName");
document.write("Node type of element having id “lastName”  is "  + lastName.nodeType);
for(var i=0;i<lastName.childNodes.length;i++)
{
  document.write(" Node type of its child Node is " + lastName.childNodes[i].nodeType);
}


//3

lastName.childNodes[0].nodeValue = "Family";
document.write("<br/><br/><br/>");
for(var i=0;i<lastName.childNodes.length;i++)
{
  document.write("Update childNode is " + lastName.childNodes[i].nodeValue);
}

//4.
document.write("<br/><br/><br/>");
var main_content = document.getElementById("main-content");
document.write("First Child is " + main_content.firstChild.nodeName);
document.write("Last Child " + main_content.lastChild.nodeName);



//5.
document.write("<br/><br/><br/>");
document.write("Previous sibling " + lastName.previousSibling.nodeName);
document.write("<br/><br/>");
document.write("next sibling " + lastName.nextSibling.nodeName);


//6.
document.write("<br/><br/><br/>");
document.write("Parent Node " + email.parentNode.nodeName);
document.write("<br/>");
document.write("Node Type" + email.nodeType);
