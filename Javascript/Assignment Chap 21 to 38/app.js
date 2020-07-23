/***************************Chap 21-25 **********************/

// 1.
var firstName = prompt("Enter your first name");
var secondName = prompt("Enter your last name");
var fullName =  firstName + secondName;
document.write("Welcome "+ "<b>" + fullName + " ! " + "</b>" + "</br>");

// //2.
var phone = prompt("Enter your favourite mobile phone model : ");
document.write("My Favourite Mobile phone model is " + phone + "</br>");
document.write("Length of the String is " + phone.length + "</br>");

//3.
var string = prompt("Enter String");
document.write("Index of 'n' :" + string.toLowerCase().indexOf('n',0) + "</br>");

// // 4.
var string = prompt("Enter String");
document.write("Last Index of 'l' : " + string.toLowerCase().lastIndexOf('l') + "</br>");

// 5. var string = prompt("Enter String");
document.write("Character at 3rd Index is : " + string.toLowerCase().slice(3,4) + "</br>");

//6.
var firstName = prompt("Enter your first name");
var secondName = prompt("Enter your last name");
var fullName = "";
document.write("Welcome "+ "<b>" + fullName.concat(firstName," ", secondName ," ! ") + "</b>" + "</br>");

//7.
var city = prompt("Enter CIty");
document.write("City : ",city + "</br>"););
var replacecity = city.replace('Hyder','Islam');
document.write("After Replacement : ", replacecity + "</br>");

//8.
var message = "Ali and Sami are best friends. They play cricket and football together";
var replaceessage = message.replace('&','and');
document.write("After Replacement : ", replaceessage + "</br>");

//9.
var string = prompt("Enter string of Numbers");
var converttoInt = parseInt(string);
document.write("Value : " + string + "</br>");
document.write("Type : " + "string" + "</br>");
document.write("Value : " + converttoInt + "</br>");
document.write("Type : " + "Number" + "</br>");

//10.
var userinp = prompt("Enter some thing");
document.write("User Input : ",userinp + "</br>");
document.write("Title Case : ",userinp.toUpperCase()+ "</br>");

//11.
var userinp = prompt("Enter some thing");
document.write("User Input : ",userinp + "</br>");
document.write("Title Case : ", userinp.charAt(0).toUpperCase().concat(userinp.substring(1)) + "</br>");

//12.
var num = 35.36;
replaceNumber = num.toString().substring(0,2).concat(num.toString().substring(3,5));
document.write(replaceNumber);

//13.
var userinp = prompt("Enter your username");
if(userinp.includes(String.fromCharCode(33)) || userinp.includes(String.fromCharCode(44)) || userinp.includes(String.fromCharCode(46)) || userinp.includes(String.fromCharCode(64)))
{
    
    alert("Please Enter Valid Username");
}


//14.
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var usersearch = prompt("Enter to search");
var flag = false,index = 0;
debugger;
for(var i=0;i<A.length;i++)
{
if(usersearch.toLowerCase() === A[i])
{
     flag = true;
     index = i;
     break;
}
else
{
    flag = false;

}

}

if(flag === true)
{
    document.write(usersearch + " is <b> Available </b> at index " +  index + " in our bakery");
}
else{
    document.write("We ar sorry " + usersearch + " is <b> not Available </b> in our bakery");
}

//15.
debugger
var password = prompt("Enter password");
if((password.slice(0,1) >= String.fromCharCode(48)) && (password.slice(0,1) <= String.fromCharCode(57)))
{

    alert("Password cannot start with a number");
    alert("Please enter valid password");
}
else if (password.length < 6)
{
    alert("Password must at least 6 characters long");
    alert("Please enter valid password");
}

else
{

    for(var i=0;i<password.length;i++)
{
    
    if(((password.charAt(i) < String.fromCharCode(48)) || (password.charAt(i)  > String.fromCharCode(56)))  && ((password.charAt(i) < String.fromCharCode(65)) || (password.charAt(i) > String.fromCharCode(90))) && (password.charAt(i) < String.fromCharCode(97) || password.charAt(i)  > String.fromCharCode(122)))
{
    alert(" Password should contain alphabets and numbers");
    alert("Please enter valid password");
}

}
}


//16.
var university = "University of Karachi";


    var re = ",";
    var arr = university.split(re);


document.write(arr);



/***************************** Chap 26-30 ***************************************/

//1.
var num = parseFloat(prompt("Enter Positive Point Floating Number"));
document.write("number : "+num + "<br/>" );
document.write("round off value : "+Math.round(num) + "<br/>");
document.write("floor value : "+Math.floor(num) + "<br/>");
document.write("ceil value : "+Math.ceil(num) + "<br/>");

// //2.
var num = parseFloat(prompt("Enter Naegative Point Floating Number"));
document.write("number : "+num );
document.write("round off value : "+Math.round(num) + "<br/>");
document.write("floor value : "+Math.floor(num) + "<br/>");
document.write("ceil value : "+Math.ceil(num) + "<br/>");

// //3.
 var absolute = parseFloat(prompt("Enter Number"));
 document.write("The absolute value of "+num + "is : " + Math.abs(absolute) + "<br/>");


// //4.

 document.write("Random dice Value : "+Math.floor((Math.random()* 6) + 1) + "<br/>" );
 document.write("Random  dice Value : "+Math.floor((Math.random()* 6) + 1) + "<br/>");


//5.
var randomValue = Math.floor((Math.random()*2)+1);

document.write(+randomValue + "<br/>")
if(randomValue == 1)
{
    document.write("random coin value : Tails <br/>");
}
else

{
    document.write("random coin value : Heads <br/>");
}


//6.
document.write("Random Number between 1 and 100 : "+Math.floor((Math.random()* 100) + 1) + "<br/>" );

//7.
var weight = prompt("Enter your weight in kilograms");


if(weight.toLowerCase().indexOf("k") != -1)
{
weight = weight.slice(0,weight.toLowerCase().indexOf("k"));
//+ weight.slice(weight.toLowerCase().indexOf("k"),weight.toLowerCase().indexOf("s")+ 1);

}
else
{
    weight = weight.slice(0);
    
}
document.write("Weight of user is : " +weight + " Kilograms <br/>");


//8.
var secretnumber = Math.floor((Math.random()*10) + 1);
var input = parseInt(prompt("Enter your number only between 1 to 10 "));
if(input == secretnumber)
{

    alert("Congratulations");

}

else
{
    alert("Try Again")
}
/***************************** Chap 31-34 ***************************************/

//1.
var currDate = new Date();
document.write(currDate + "</br>");

//2.
var month_name=new Array(12);
month_name[0]="January"
month_name[1]="February"
month_name[2]="March"
month_name[3]="April"
month_name[4]="May"
month_name[5]="June"
month_name[6]="July"
month_name[7]="August"
month_name[8]="September"
month_name[9]="October"
month_name[10]="November"
month_name[11]="December"


document.write("Current Month : " + month_name[currDate.getMonth()]);


//3.
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

document.write("Today is " + dayNames[currDate.getDay()].slice(0,3));


//4.

if(currDate.getDay() === 0 || currDate.getDay() === 6)
{
    document.write("Its Fun Day");
}

5.

if(currDate.getDate() < 16)
{
    document.write("First fifteen days of the month");
}
else
{
    document.write("Last Days of the month");
}

//6.

var millsSince = d.getTime();
var minutes = (millsSince / (1000 * 60 * 60));
document.write("Current Data : " + currDate);
document.write("Elapsed MilliSeconds since Jan 1 1970 : " + millsSince);
document.write("Elapsed Minutes since Jan 1 1970 : " + minutes);

7

var hours = currDate.getHours();
if(hours >= 12)
{
    document.write("Its PM");

}
else
{
    
    document.write("Its AM");
}


8

var laterdate = new Date(new Date().getFullYear(), 11, 31)
document.write(laterdate);

9.
var msDiff =  new Date().getTime() - new Date("June 18, 2015").getTime();
var daysTillDoom = Math.floor(msDiff / (1000 * 60 * 60 * 24));
alert(daysTillDoom + " Days Passed Since 1st Ramzan");


10.
var msDiff = new Date("December 5, 2015").getTime() -  new Date(2015, 0, 1).getTime();
var SecondsTillDoom = Math.floor(msDiff / (1000 * 60 ));
alert(SecondsTillDoom + " Seconds Passed Since Beginning of 2015");


11.
var currDatetime = new Date();
var newDatetime = currDatetime.setHours(currDatetime.getHours()+1);
alert("Current Date : " + currDatetime);
var oldDatetime = new Date();
alert("One Hour Ago it was : " + oldDatetime);

12
var formalDate = new Date();
var getyear = formalDate.getFullYear();
formalDate.setFullYear(getyear - 100);
alert("Current Date : " + new Date());
alert("100 years back date was : " + formalDate);

13.
var age = parseInt(prompt("Enter your age in numbers"));
var fullYear = new Date().getFullYear();
var birthyear = Math.floor(fullYear - age);
document.write("Your birth Year is : "+ birthyear);

/***************************** Chap 35-38 ***************************************/
//
1
function telldatetime()
{ 
    var datetime = new Date();
    document.write(datetime);

}
//telldatetime();
//2.
function greet()
{
var firstname = prompt("Enter your first name");
var lastname = prompt("Enter your last name"); 
document.write("Hello "+ firstname + " " + lastname);
}

// //3.
function add()
{
    var firstNum = parseFloat(prompt("Enter your first number"));
    var secondNum = parseFloat(prompt("Enter your Second number"));
    var result = firstNum + secondNum;
    return result;
}
var res = add();
document.write("<br/>" + res + "<br/>") ;
// //4.

function calculator(num1,num2,operator)
{

    
    switch(operator)
    {
    case "+":
        
    var result = num1  + num2;
   return result;
   break;

    case "-":
        
        var result = num1 - num2;
        return result;
       break;
    
    case "*":
        
        var result = num1 * num2;
        return result;
        break;

        case "/":
        
            var result = num1  / num2;
            return result;
            break;
            case "%":
        
                var result = num1  % num2;
                return result;
                break;
            
        
    default:

         document.write("<br/> Invalid Operator <br/>");
       
      
        }

      
    }


document.write(calculator(2,3,"/"));

//5.

function square(number)
{

    var square = number * number;
    return square;
}

//6.
function Factorial(num)
{

  
    if(num < 0)
    {
        return -1;
    }
   else if(num == 0)
    {
        return 1;

    }
    else
    {
      return num * Factorial(num -1);
    }
    

    
    

}
var num = parseInt(prompt("Enter factorial Number you want to calculate : "));
var fac = Factorial(num);
alert(fac);


// // 7.
function counting(num1,num2)
{
    for(var i=num1;i<=num2;i++)
    {
        document.write("<br/>" + i);

    }

}

var num1 = parseInt(prompt("Enter First Number to start counting"));
var num2 = parseInt(prompt("Enter Second Number till counting will continue"));
counting(num1,num2);


//8.

function hypothenuse()
{
var perpend = parseFloat(prompt("Enter perpendicular value"));
var base = parseFloat(prompt("Enter Base value"));
var hypothenusesq = square(perpend) + square(base);
return hypothenusesq;
}

function square(val)
{

  var result = (val*val);
  return result;

}

document.write(hypothenuse());


//9.
function area(length,breadth)
{
var area =  length * breadth;
return area;

}
1//
area(1,3);

//2
var le = parseFloat(prompt("Enter Length :"));
var br = parseFloat(prompt("Enter Breadth :"));
area(le,br);