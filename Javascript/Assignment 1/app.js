// /************************************************** Chapter 1 ******************************/

// // Q1. Write a script to greet your website visitor using JS alert box. 

// /************Answer ***********/
// alert('Hi, Welcome to JS land')

// // Q2.  Write a script to display following message on your web page: 

// /************Answer ***********/
// alert('Error! Please Enter a valid password')

// // Q3  Write a script to display following message on your web page: (Hint : Use line break)

// /************Answer ***********/

// alert('Welcome to JS Land'+'\n'+ 'Happy Coding!')

// // Q4  Write a script to display following messages in sequence: 

// /************Answer ***********/

// alert('Welcome to JS Land')
// alert('Happy Coding!')

// // Q5 Generate the following message through browser’s developer console: 

// /************Answer ***********/

// alert('Hello... I can run JS through my web browser console')

// // Q6 and Q7

// // Done in index.html




// /************************************************** Chapter 2 ************************************************/

// // Q1 . Declare a variable called username. 

// var username;

// // Q2 Declare a variable called myName & assign to it a string that represents your Full Name

// var myName = 'Mazhar Mehdi';

// // Q3 Write script to a) Declare a JS variable, titled message. b) Assign “Hello World” to variable message c) Display the message in alert box.

// var message = 'Hello World';
// alert(message)

// // Q4. Write a script to save student’s bio data in JS variables and show the data in alert boxes. 
 
//  var Name = 'John Doe';
//  var Age = '15 years Old';
//  var courseName = 'Certified Web And Mobile App Development'

//  alert(Name)
//  alert(Age)
//  alert(courseName)

//  // Q5.  Write a script to display the following alert using one JS variable

//  var display = 'PIZZA' + '\n' + 'PIZZ' + '\n' + 'PIZ' + '\n' + 'PI' + '\n' + 'P' + '\n';
//  alert(display)

//  //Q6 .Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com). Show the blow mentioned message in an alert box.(Hint: use string concatenation) 

//  var email = 'mazharmanasiya4@gmail.com';
//  alert('My Email Address is' + ' ' + email)

//  // Q7 Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box

//  var book = 'A smarter way to learn JavaScript';
//  alert('I am trying to learn from the Book' + ' ' +  book)

//  //Q8 Write a script to display this in browser through JS 

//  document.write("Yah ! I can write HTML content through Javascript")

//  //Q9 Store following string in a variable and show in alert and browser through JS

//  var str = '▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬';
//  alert(str)



// /************************************************** Chapter 3 ************************************************/

// // Q1 Declare a variable called age & assign to it your age. Show your age in an alert box. 
 
// var age = 24;
// alert('I am'+ ' ' + age + ' years Old')

// // Q2 Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”. 

// var track = 14;
// alert('You have visited this site'+ ' ' + track + ' ' + 'times')

// Q3 Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser: 
 
//  var birthYear = 1995
//  document.write('My Birthyear is' + ' ' , birthYear + '<br/>' + 'Data type of my declared variable is number')

 
 //Q4 A visitor visits an online clothing store www.xyzClothing.com .
 // Write a script to store in variables the following information: a. Visitor’s name b. Product title c. Quantity i.e. how many products a visitor wants to order 
 // Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”. 

//  var Name = 'Mazhar';
//  var productTitle = 'Mens T-shirt(s)'
//  var qty = 12;

//  document.write('<br/><br/>' + '<b>' + Name + '</b>' + ' ' + 'ordered' + ' ' + '<b>' + qty + ' ' + productTitle  + '</b>' + ' ' + 'on XYZ Clothing store');

// /************************************************** Chapter 4 ************************************************/

//Q1. Declare 3 variables in one statement

// var varOne = 1,varTwo = 2,varThree = 9;
// alert(varTwo);
//Q2. Declare 5 legal & 5 illegal variable names.

//Legal 
// var userResponse;
// var userResponseTime;
// var _response;
// var $response;
// var a2;

//Illegal
// var user Response;
// var 1userResponseTime;
// var .response;
// var +response;
// var 2a;

// Q3 Display this in your browser
//a) A heading stating “Rules for naming JS variables”
//b) Variable names can only contain ______, ______,______ and ______.For example $my_1stVariable
//c) Variables must begin with a ______, ______ or_____. For example $name, _name or name
//d) Variable names are case _________
//e) Variable names should not be JS _________

// document.write('<br/><h2>Rules for naming JS variables</h2><br/>');
// document.write('<br/>Variable names can only contain numbers, $ and _ .For example $my_1stVariable<br/>');
// document.write('<br/>Variables must begin with a letter, $ or_. For example $name, _name or name<br/>');
// document.write('<br/>Variable names are case sensitive<br/>');
// document.write('<br/>Variable names should not be JS keywords<br/>');


// /************************************************** Chapter 5 ************************************************/


//Q1 Write a program that take two numbers & add them in a new variable. Show the result in your browser.

// var num1 = parseInt(prompt("Enter Number 1"));
// var num2 = parseInt(prompt("Enter Number 2"));
// var sum = num1 + num2;
// document.write("<br/>Result of Summation of two numbers is " +sum + "<br/>");

// Q2. Repeat task1 for subtraction, multiplication, division & modulus

// var num1 = parseInt(prompt("Enter Number 1"));
// var num2 = parseInt(prompt("Enter Number 2"));
// var sub = num1 - num2;
//  document.write("<br/>Result of Subtraction of two numbers is " +sub + "<br/>");

 
// var num1 = parseInt(prompt("Enter Number 1"));
// var num2 = parseInt(prompt("Enter Number 2"));
// var mul = num1 * num2;
//  document.write("<br/>Result of mutiplication of two numbers is " +mul + "<br/>");

 
// var num1 = parseInt(prompt("Enter Number 1"));
// var num2 = parseInt(prompt("Enter Number 2"));
// var div = num1 / num2;
//  document.write("<br/>Result of divsion of two numbers is " +div + "<br/>");

 
// var num1 = parseInt(prompt("Enter Number 1"));
// var num2 = parseInt(prompt("Enter Number 2"));
// var mod = num1 % num2;
//  document.write("Result of modulus of two numbers is " +mod +"<br/>");

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


// var a;
// document.write("<br/>Value after variable declaration is:" + a + "<br/>");
// a = 5;
// document.write("<br/>Initial Value :" + a + "<br/>");
// a++;
// document.write("<br/>Value after increment is :" + a + "<br/>");
// a += 7;
// document.write("<br/>Value after addition is :" + a + "<br/>");
// a--;
// document.write("<br/>Value after decrement is :" + a + "<br/>");
// var rem = a/3;
// document.write("<br/>The remainder is :" + rem + "<br/>");

// Q4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:

// var price = 600;
// price = price * 5;
// document.write("<br/>Total Cost to buy 5 tickets to a movie is " + "<b>" + price + "</b>" + " PKR <br/>");

// Q5. Write a script to display multiplication table of any number in your browser. E.g
// var table = parseInt(prompt("Enter table youwant to print"));
// document.write('<h1>Table of ' + table + '</h1>');
// for (var i=1;i<11;i++)
// document.write('<p>'+ table + '*' + i + '=' + table*i + '</p>');

//Q6 The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”

// var celTemp = 25;
// document.write('<br/>' + celTemp + '<sup>o</sup>C' + ' is '   + ((celTemp *  9/ 5) + 32) + '<sup>o</sup>F'+'<br/>');
// var farTemp = 70;
// document.write('<br/>' + farTemp + '<sup>o</sup>F' + ' is ' + ((farTemp - 32) * 5 / 9) + '<sup>o</sup>C' + '<br/>');

// Q7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables

// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

// var item1Price = 234;
// var item2Price = 23;
// var item1OQty = 3;
// var item2OQty = 2;
// var shipCharges = 100;

// document.write('<br/><h2>Shopping Cart</h2><br/>');
// document.write('<br/>Price of Item 1 : ' + item1Price + '<br/>');
// document.write('<br/> Price of Item 2 : ' + item2Price +'<br/>');
// document.write('<br/>Ordered Quantity of Item 1 : ' + item1OQty +'<br/>');
// document.write('<br/>Ordered Quantity of Item 2 : ' + item2OQty +'<br/>');
// document.write('<br/>Shipping charges : ' + shipCharges +'<br/>');
// document.write('<br/><br/>Total Cost of your Order : ' + ((item1Price * item1OQty) + (item2Price * item2OQty) + shipCharges) +'<br/>');


//8. Store total marks & marks obtained by a student in 2 variables. 
//Compute the percentage & show the result in your browser

// var totMarks = 500;
// var obtainedMarks = 390;
//document.write('<h1> Marks Sheet <h1> '+'<br/><br/>');
// document.write('Total Marks : ' + totMarks + '<br/>');
// document.write('Obtained Marks : ' + obtainedMarks + '<br/>');
// document.write('Percentage : ' + totMarks/obtainedMarks * 100 + '%');

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

