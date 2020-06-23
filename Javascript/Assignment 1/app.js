/*************************
 * 
 *  Name : Mazhar Mehdi
 * 
 */

 /************************************************** Chapter 1 ******************************/

// // Q1. Write a script to greet your website visitor using JS alert box. 

// /************Answer ***********/
 alert('Hi, Welcome to JS land')

// // Q2.  Write a script to display following message on your web page: 

// /************Answer ***********/
 alert('Error! Please Enter a valid password')

// // Q3  Write a script to display following message on your web page: (Hint : Use line break)

// /************Answer ***********/

 alert('Welcome to JS Land'+'\n'+ 'Happy Coding!')

// // Q4  Write a script to display following messages in sequence: 

// /************Answer ***********/

 alert('Welcome to JS Land')
 alert('Happy Coding!')

// // Q5 Generate the following message through browser’s developer console: 

// /************Answer ***********/

 alert('Hello... I can run JS through my web browser console')

// // Q6 and Q7

// // Done in index.html




// /************************************************** Chapter 2 ************************************************/

// // Q1 . Declare a variable called username. 

 var username;

// // Q2 Declare a variable called myName & assign to it a string that represents your Full Name

 var myName = 'Mazhar Mehdi';

// // Q3 Write script to a) Declare a JS variable, titled message. b) Assign “Hello World” to variable message c) Display the message in alert box.

 var message = 'Hello World';
 alert(message)

// // Q4. Write a script to save student’s bio data in JS variables and show the data in alert boxes. 
 
  var Name = 'John Doe';
  var Age = '15 years Old';
  var courseName = 'Certified Web And Mobile App Development'

  alert(Name)
  alert(Age)
  alert(courseName)

//  // Q5.  Write a script to display the following alert using one JS variable

  var display = 'PIZZA' + '\n' + 'PIZZ' + '\n' + 'PIZ' + '\n' + 'PI' + '\n' + 'P' + '\n';
  alert(display)

//  //Q6 .Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com). Show the blow mentioned message in an alert box.(Hint: use string concatenation) 

  var email = 'mazharmanasiya4@gmail.com';
  alert('My Email Address is' + ' ' + email)

//  // Q7 Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box

  var book = 'A smarter way to learn JavaScript';
  alert('I am trying to learn from the Book' + ' ' +  book)

//  //Q8 Write a script to display this in browser through JS 

  document.write("Yah ! I can write HTML content through Javascript")

//  //Q9 Store following string in a variable and show in alert and browser through JS

  var str = '▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬';
  alert(str)



// /************************************************** Chapter 3 ************************************************/

// // Q1 Declare a variable called age & assign to it your age. Show your age in an alert box. 
 
 var age = 24;
 alert('I am'+ ' ' + age + ' years Old')

// // Q2 Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”. 

 var track = 14;
 alert('You have visited this site'+ ' ' + track + ' ' + 'times')

// Q3 Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser: 
 
  var birthYear = 1995
  document.write('My Birthyear is' + ' ' , birthYear + '<br/>' + 'Data type of my declared variable is number')

 
 //Q4 A visitor visits an online clothing store www.xyzClothing.com .
 // Write a script to store in variables the following information: a. Visitor’s name b. Product title c. Quantity i.e. how many products a visitor wants to order 
 // Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”. 

 var Name = 'Mazhar';
  var productTitle = 'Mens T-shirt(s)'
  var qty = 12;

  document.write('<br/><br/>' + '<b>' + Name + '</b>' + ' ' + 'ordered' + ' ' + '<b>' + qty + ' ' + productTitle  + '</b>' + ' ' + 'on XYZ Clothing store');

// /************************************************** Chapter 4 ************************************************/

//Q1. Declare 3 variables in one statement

 var varOne = 1,varTwo = 2,varThree = 9;
 alert(varTwo);
//Q2. Declare 5 legal & 5 illegal variable names.

//Legal 
 var userResponse;
 var userResponseTime;
 var _response;
 var $response;
 var a2;

//Illegal
 //var user Response;
 //var 1userResponseTime;
// var .response;
// var +response;
// var 2a;

// Q3 Display this in your browser
//a) A heading stating “Rules for naming JS variables”
//b) Variable names can only contain ______, ______,______ and ______.For example $my_1stVariable
//c) Variables must begin with a ______, ______ or_____. For example $name, _name or name
//d) Variable names are case _________
//e) Variable names should not be JS _________

 document.write('<br/><h2>Rules for naming JS variables</h2><br/>');
 document.write('<br/>Variable names can only contain numbers, $ and _ .For example $my_1stVariable<br/>');
 document.write('<br/>Variables must begin with a letter, $ or_. For example $name, _name or name<br/>');
 document.write('<br/>Variable names are case sensitive<br/>');
 document.write('<br/>Variable names should not be JS keywords<br/>');


// /************************************************** Chapter 5 ************************************************/


//Q1 Write a program that take two numbers & add them in a new variable. Show the result in your browser.

 var num1 = parseInt(prompt("Enter Number 1"));
 var num2 = parseInt(prompt("Enter Number 2"));
 var sum = num1 + num2;
 document.write("<br/>Result of Summation of two numbers is " +sum + "<br/>");

// Q2. Repeat task1 for subtraction, multiplication, division & modulus

 var num1 = parseInt(prompt("Enter Number 1"));
 var num2 = parseInt(prompt("Enter Number 2"));
 var sub = num1 - num2;
  document.write("<br/>Result of Subtraction of two numbers is " +sub + "<br/>");

 
 var num1 = parseInt(prompt("Enter Number 1"));
 var num2 = parseInt(prompt("Enter Number 2"));
 var mul = num1 * num2;
  document.write("<br/>Result of mutiplication of two numbers is " +mul + "<br/>");

  var num1 = parseInt(prompt("Enter Number 1"));
 var num2 = parseInt(prompt("Enter Number 2"));
 var div = num1 / num2;
  document.write("<br/>Result of divsion of two numbers is " +div + "<br/>");

 
var num1 = parseInt(prompt("Enter Number 1"));
var num2 = parseInt(prompt("Enter Number 2"));
var mod = num1 % num2;
 document.write("Result of modulus of two numbers is " +mod +"<br/>");

// Q3.Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value by 3.
// l. Output : “The remainder is : 0”.


var a;
document.write("<br/>Value after variable declaration is:" + a + "<br/>");
a = 5;
document.write("<br/>Initial Value :" + a + "<br/>");
a++;
document.write("<br/>Value after increment is :" + a + "<br/>");
a += 7;
document.write("<br/>Value after addition is :" + a + "<br/>");
a--;
document.write("<br/>Value after decrement is :" + a + "<br/>");
var rem = a/3;
document.write("<br/>The remainder is :" + rem + "<br/>");

// Q4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:

var price = 600;
price = price * 5;
document.write("<br/>Total Cost to buy 5 tickets to a movie is " + "<b>" + price + "</b>" + " PKR <br/>");

// Q5. Write a script to display multiplication table of any number in your browser. E.g
var table = parseInt(prompt("Enter table youwant to print"));
document.write('<h1>Table of ' + table + '</h1>');
for (var i=1;i<11;i++)
document.write('<p>'+ table + '*' + i + '=' + table*i + '</p>');

//Q6 The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”

var celTemp = 25;
document.write('<br/>' + celTemp + '<sup>o</sup>C' + ' is '   + ((celTemp *  9/ 5) + 32) + '<sup>o</sup>F'+'<br/>');
var farTemp = 70;
document.write('<br/>' + farTemp + '<sup>o</sup>F' + ' is ' + ((farTemp - 32) * 5 / 9) + '<sup>o</sup>C' + '<br/>');

// Q7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables

// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

var item1Price = 234;
var item2Price = 23;
var item1OQty = 3;
var item2OQty = 2;
var shipCharges = 100;

document.write('<br/><h2>Shopping Cart</h2><br/>');
document.write('<br/>Price of Item 1 : ' + item1Price + '<br/>');
document.write('<br/> Price of Item 2 : ' + item2Price +'<br/>');
document.write('<br/>Ordered Quantity of Item 1 : ' + item1OQty +'<br/>');
document.write('<br/>Ordered Quantity of Item 2 : ' + item2OQty +'<br/>');
document.write('<br/>Shipping charges : ' + shipCharges +'<br/>');
document.write('<br/><br/>Total Cost of your Order : ' + ((item1Price * item1OQty) + (item2Price * item2OQty) + shipCharges) +'<br/>');


//Q8. Store total marks & marks obtained by a student in 2 variables. 
//Compute the percentage & show the result in your browser

var totMarks = 500;
var obtainedMarks = 390;
document.write('<h1> Marks Sheet <h1> '+'<br/><br/>');
document.write('Total Marks : ' + totMarks + '<br/>');
document.write('Obtained Marks : ' + obtainedMarks + '<br/>');
document.write('Percentage : ' + totMarks/obtainedMarks * 100 + '%');

// Q9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)


var USDollars = 10;
var SaudiRiyals = 25;
document.write('<h1>CURRENCY IN PKR</h1><br/>');
document.write('Total Currency in PKR : ' + ((USDollars * 104.80) + (SaudiRiyals * 28))+ '<br/><br/>');

// Q10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression


var number = 20;
document.write((number + 5) * (10 / 2));


// // Q11. The Age Calculator: Forgot how old someone is?
// // Calculate it!
// // a. Store the current year in a variable.
// // b. Store their birth year in a variable.
// // c. Calculate their 2 possible ages based on the stored
// // values.
// // Output them to the screen like so: “They are either NN or NN
// // years old”.

document.write('<h1>Age Calculator</h1>');
var currentYear = 2020;
var birthYear = 1995;
var calcUlate = currentYear - birthYear;
document.write('Your Age is ' + calcUlate + '<br/>');

// // Q12. The Geometrizer: Calculate properties of a circle.
// // a. Store a radius into a variable.
// // b. Calculate the circumference based on the radius, and
// // output “The circumference is NN”.
// // (Hint : Circumference of a circle = 2 π r , π = 3.142)
// // Calculate the area based on the radius, and output “The
// // area is NN”. (Hint : Area of a circle = π r2, π = 3.142)


document.write('<h1>The Geometrizer</h1>');
var radius = 20;
document.write('Radius of Circle is '+ radius + '<br/>');
document.write('The circumference is '+ (2 * 3.142 * radius) + '<br/>');
document.write('The area is '+ (3.142 * radius * radius) + '<br/>');


// // Q13. The Lifetime Supply Calculator: Ever wonder how
// // much a “lifetime supply” of your favorite snack is?
// // Wonder no more.
// // a. Store your favorite snack into a variable
// // b. Store your current age into a variable.
// // c. Store a maximum age into a variable.
// // d. Store an estimated amount per day (as a number).
// // e. Calculate how many would you eat total for the rest of
// // your life.
// // Output the result to the screen like so: “You will need
// // NNNN to last you until the ripe old age of NN”

document.write('<h1>The Geometrizer</h1><br/>');
var favSnack = 'chocolate chip';
var currentAge = 24;
var maxAge = 70;
var snackAmount = 3;
document.write('Favourite Snack : '+ favSnack + '<br/>');
document.write('Current Age : '+ currentAge + '<br/>');
document.write('Estimated Max Age : '+ maxAge + '<br/>');
document.write('You will need  ' + ((maxAge-currentAge)*snackAmount) + ' ' + favSnack + ' to last you until the ripe old age of ' + maxAge + '<br/><br/>');


// // /************************************************** Chapter 6-9 ************************************************/


// // Q1. Write a program to take a number in a variable, do the
// // required arithmetic to display the following result in your browser:

document.write('Result:<br/>');
var a = parseInt(prompt("Enter Number"));
document.write('The value of a is :' +a+ '<br/><br/>');


document.write('The value of ++a is :'+  ++a  + '<br/>');
document.write('Now the value of a is :' + a + '<br/><br/>');

document.write('The value of a++ is :'+  a++  + '<br/>');
document.write('Now the value of a is :' + a + '<br/><br/>');

document.write('The value of --a is :'+  --a  + '<br/>');
document.write('Now the value of a is :' + a + '<br/><br/>');

document.write('The value of a-- is :'+  a--  + '<br/>');
document.write('Now the value of a is :' + a + '<br/><br/>');

// // Q2. What will be the output in variables a, b & result after
// // execution of the following script:
// // var a = 2, b = 1;
// // var result = --a - --b + ++b + b--;
// // Explain the output at each stage:
// // --a;
// // --a - --b;
// // --a - --b + ++b;
// // --a - --b + ++b + b--;


// //Part one :
  var a = 2, b = 1;
  var result = --a - --b + ++b + b--;
   //  Result : 1 -  0  +  1 +  1 = 3
//   //a = 1, b = 0
 document.write('a is : 1 <br/>');
 document.write('b is : 0 <br/>');
 document.write('Output value of result after above script is executed : 3 <br/><br/>');
 

// //Part two :
 a = 2, b = 1;
 --a;  // result = 1   a = 1, b = 1
  document.write('a is : ' +a+ '<br/>');
 document.write('b is :' +b+ '<br/>');
 document.write('Output value of result at this stage is : 1 <br/><br/>');

   a = 2, b = 1;
  --a - --b; // result =  1 - 0 = 1   a = 1 , b= 0 
  document.write('a is : ' +a+ '<br/>');
 document.write('b is :' +b+ '<br/>');
 document.write('Output value of result at this stage is : 1 <br/><br/>');

 a = 2, b = 1;
   --a - --b + ++b; // result  =  1 -  0 +  1 = 2    a =  1, b = 1
  document.write('a is : ' +a+ '<br/>');
 document.write('b is :' +b+ '<br/>');
 document.write('Output value of result at this stage is: 2 <br/><br/>');

// a = 2, b = 1;
  --a - --b + ++b + b--;  //result =   1 - 0 + 1 + 1 = 3      a = 1, b = 0
  document.write('a is : ' +a+ '<br/>');
  document.write('b is :' +b+ '<br/>');
  document.write('Output value of result at this stage is : 3 <br/><br/>');


//  3. Write a program that takes input a name from user & greet the user.
   var name = prompt("Enter your name");
   document.write("<h2>Hello " + name + " ! </h2>")

//4 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

var inp = prompt("Enter number");
debugger;
console.log(inp);
if(inp == "")
{
    inp = 5;
    document.write('<h1>Table of ' + parseInt(inp) + '</h1>');
    for (var i=1;i<11;i++)
    document.write('<p>'+ inp + '*' + i + '=' + inp*i + '</p>');
  
}

else
{

    document.write('<h1>Table of ' + parseInt(inp) + '</h1>');
    for (var i=1;i<11;i++)
    document.write('<p>'+ parseInt(inp) + '*' + i + '=' + parseInt(inp)*i + '</p>');
 

    
}

// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)
// var sub1Marks = parseInt(prompt("Enter Marks for Subject 1: "));
// var sub2Marks = parseInt(prompt("Enter Marks for Subject 1: "));
// var sub3Marks = parseInt(prompt("Enter Marks for Subject 1: "));
// var totalMarks = 100;
// // var totalMarks = sub1Marks + sub2Marks + sub3Marks;
// // var per = (totalMarks/totalMarks) * 100;

document.write("<table><tr><th>Subject</th>" + " " + "<th>Total Marks</th>" + " " + "<th>Obtained Marks</th>" + " " + " <th>Percentage</th></tr><br/></table>");
document.write("<tr><td>English</td>" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "<td>" + totalMarks +"</td>" +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "<td>" + sub1Marks+ "</td>" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "<td>" +((sub1Marks/totalMarks) * 100)+ "</td>" + "</tr><br/>");
document.write("<tr><td>Maths</td>" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "<td>" + totalMarks +"</td>" +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "<td>" + sub2Marks+ "</td>" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "<td>" +((sub2Marks/totalMarks) * 100)+ "</td>" + "</tr><br/>");
document.write("<tr><td>Urdu</td>" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "<td>" + totalMarks +"</td>" +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "<td>" + sub3Marks+ "</td>" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "<td>" +((sub3Marks/totalMarks) * 100)+ "</td>" + "</tr><br/>");
document.write("<tr><td></td>" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "<td>" + (3*totalMarks) +"</td>" +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "<td>" + (sub1Marks + sub2Marks + sub3Marks) + "</td>" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "<td>" +((sub1Marks+sub2Marks+sub3Marks)/(3*totalMarks) * 100)+ "</td>" + "</tr>");



// // /************************************************** Chapter 9-11 ************************************************/

// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

var city = prompt("Enter City : ");
if (city.toLowerCase() == "karachi")
{
    document.write("Welcome to city of Lights <br/>");
}

// // 2. Write a program to take “gender” as input from user. If the
// // user is male, give the message: Good Morning Sir. If the
// // user is female, give the message: Good Morning Ma’am.

var gender = prompt("Enter Gender");
if(gender.toLowerCase() == "male")
{
    document.write(" Good Morning Sir <br/>");

}
else
{  document.write("Good Morning Ma’am <br/>");

}

// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:

var color = prompt("Enter Color");
if(color.toLowerCase() == "yellow")
{
document.write("<tr><td>"+color+"</td>" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "<td></td>" +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "<td></td>" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "<td>" + " Ready to Move " + "</td>" + "</tr><br/>");
}
else if(color.toLowerCase() == "red")
{
    document.write("<tr><td>"+color+"</td>" + "&nbsp;&nbsp;&nbsp;&nbsp;" + "<td></td>" +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "<td></td>" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "<td>" + " Must Stop " + "</td>" + "</tr><br/>");
}
else
{
    document.write("<tr><td>"+color+"</td>" + "&nbsp;&nbsp;&nbsp;&nbsp;" + "<td></td>" +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "<td></td>" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "<td>" + " Move Now " + "</td>" + "</tr><br/>");
}

// 4. Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”
    

var remFuel = parseFloat(prompt("Enter remaining fuel in (litres)"));
if(remFuel < 0.25)
{
    document.write("Please refill the fuel in your car");
}


// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs

 var a = 4;
 if (++a === 5){
 alert("given condition for variable a is true"); //output : Alert displayed
 }


 var b = 82;
 if (b++ === 83){
 alert("given condition for variable b is true");  //output : Alert not displayed
 }


var c = 12;
if (c++ === 13){
alert("condition 1 is true");  //output : Alert not  displayed

}



if (c === 13){
alert("condition 2 is true");   //output : Alert displayed
}

if (++c < 14){
alert("condition 3 is true"); //output : Alert not displayed
}
if(c === 14){
alert("condition 4 is true"); //output : Alert displayed
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");  //output : Alert displayed
}
 if (true){
alert("True"); //output : Alert displayed
}
if (false){ alert("False"); //output : Alert not displayed
}

 if("car" < "cat"){
    alert("car is smaller than cat"); //output : Alert  displayed
    }
    
// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:



var Marks1 = parseInt(prompt("Enter Subject 1 Marks :"));
var Marks2 = parseInt(prompt("Enter Subject 2 Marks :"));
var Marks3 = parseInt(prompt("Enter Subject 3 Marks :"));
var totMarks = parseInt(prompt("Enter Total Marks :"));
var marksObtained = Marks1 + Marks2 + Marks3;
var percent = (marksObtained/totMarks * 100);
var grade = percent >= 80 ? 'A-one' : percent >= 70 ? 'A' :  percent >= 60 ? 'B' : 'Fail';
var remarks = percent >= 80 ? 'Excellent' : percent >= 70 ? 'Good' :  percent >= 60 ? 'You need to improve' : 'Sorry';
document.write("<h1>Marksheet</h1><br/>");
document.write("Total Marks : " + totMarks + "<br/>");
document.write("Marks Obtained : " + marksObtained + "<br/>");
document.write("Percentage : " + percent + "<br/>");
document.write("Grade : " + grade + "<br/>");
document.write("Remarks : " + remarks + "<br/>");


// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

var secretNumber = 7;
console.log(secretNumber);
var userInp = prompt("Guess the secret number between 1 to 10");
if(userInp === secretNumber)
{
  document.write("Bingo! Correct answer");
}
else if(++userInp === secretNumber)
{
    document.write("Close enough to the correct answer");
}
else
{
    document.write("Sorry! Incorrect answer");

}

// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

var number = parseInt(prompt("Enter Number"));
if(number %3 === 0)
{
    document.write("the number is divisible by 3");
}
else
{
    document.write("the number is not divisible by 3");

}

// 9. Write a program that checks whether the given input is an
// even number or an odd number

var number = parseInt(prompt("Enter Number"));
if(number %2 === 0)
{
    document.write("This is Even Number");
}
else
{
    document.write("This is Odd Number ");

}

// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool

var temp = parseFloat(prompt("Enter temperature"));
if(temp > 40)
{
  document.write("It is too hot outside.");
}
else if( temp > 30 && temp <= 40 )
{
    document.write("The Weather today is Normal.");

}
else if( temp > 20 && temp <= 30 )
{
    document.write("Today’s Weather is cool.");

}
else
{
    document.write("OMG! Today’s weather is so Cool");

}

// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.


var firstNumber = parseFloat(prompt("Enter First Number"));
var secondNumber = parseFloat(prompt("Enter Second Number"));
var Operator = prompt("Enter Operator from (+, -, *, /, %)");
var result;
if(Operator == "+")
{ 
    result = firstNumber + secondNumber;

}
else if(Operator == "-")
{
    result = firstNumber - secondNumber;
}
else if(Operator == "*")
{
    result = firstNumber * secondNumber;
}

else if(Operator == "/")
{

    result = firstNumber / secondNumber;
}

else if(Operator == "%")
{
    result = firstNumber % secondNumber;
}
else 
{
   alert("Invalid Operator");
}

document.write("Your result is " + result );


// // /************************************************** Chapter 12-13 ************************************************/

// Q1 Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

var chr = prompt("Enter a single character");
if(chr.charCodeAt(0) >= 48 &&  chr.charCodeAt(0) <=57)
{
    document.write("Character is Number");

}
else if(chr.charCodeAt(0) >= 97 &&  chr.charCodeAt(0) <=122)
{
    document.write("Character is Lower Case letter");
}

else if(chr.charCodeAt(0) >= 65 &&  chr.charCodeAt(0) <=90)
{
    document.write("Character is Upper Case letter");
}
else
{
    document.write("Character is neither a number, Lower case or Upper Case letter");
}


// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

var num1 = parseInt("Enter first Integer");
var num2 = parseInt("Enter Second Integer");
if(num1 > num2)
{
    document.write("Largest Integer is " +  num1);
}
else if(num2 > num1)
{
    document.write("Largest Integer is " +  num2);

}
else
{
    document.write("Both Integers are equal");
}

// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.



// // /************************************************** Chapter 14-16 ************************************************/

// 1. Declare an empty array using JS literal notation to store
// student names in future.

var arr = [];

// 2. Declare an empty array using JS object notation to store
// student names in future.
var stdArr = ['Adil','Mazhar','Mehdi'];

// 3. Declare and initialize a strings array.


// // /************************************************** Chapter 17-20 ************************************************/

// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

var mulArr = [['Name','Ahmed'],['FatherName','Jameel'],['DOB','20-10-1994']];
console.log(mulArr);

// 2. Declare and initialize a multidimensional array
// representing the following matrix:


