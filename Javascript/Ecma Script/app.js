// //EcmaScript 6
//Var is Funcion Scope

//  var foo = 'Basit'
//  function fooValue()
//  {
//    var foo = 'Mazhar';

// }
//  fooValue()
//  console.log(foo);
//  if(true)
// {
//     var foo = 'Mazhar';
// }
// console.log(foo);


//Let is Block Scope

 let foo = 'Basit'
// var foo = 'Mazhar'
// function fooValue()
// {
   //let foo = 'Mazhar';

// }
// fooValue()
// console.log(foo);
    
if(true)
{
    let foo = 'Mazhar';
}
console.log(foo)

// var name = 'Mazhar';
// var name = 'Mehdi';
// console.log(name);
  
// let name = 'Mazhar';
// name = 'Mehdi';
// console.log(name);

// const school = 'saylani';
// //school = '2';
// console.log(school);

// var schools =
// {
//     schoolName : school
// }

//let {schoolName} = schools;
//console.log(schoolName);

// console.log(schools);
// schools.schoolName = 'AKU';

// let {schoolName} = schools;
// console.log(schoolName);

//console.log(schools);

// let student = {

//     name : 'Mazhar',
//     school : 'Saylani',
//     RollNo : '4437'
// }
// console.log(student);
// student.class = "5th"
// console.log(student);


//let {name,school,RollNo} = student ;
// name = 'Mehdi';
// console.log(name);

// console.log(school);

// console.log(RollNo);

// if(true)
// {
//  var student1 = {

//     name : 'Mazhar',
//     school : 'Saylani',
//     RollNo : '4437'
//  }   
// }
// var {name,school,RollNo} = student1 ;
// console.log(name);


if(true)
{
 let student1 = {

    name : 'Mazhar',
    school : 'Saylani',
    RollNo : '4437'
 }   
}


// let {name,school,RollNo} = student1 ;
// console.log(name);

 var bool = true;
 var name = bool && 'dsd' ;
 console.log(name);

 "use strict";
num = 5;
console.log(num);
 alert(phrase);

 var phrase = "Hello";
 alert(phrase);




 
// var promise = new Promise(function(resolve,reject)
// {
// var zinger = 'Not Available';


//     if(zinger === 'Available')
//     {
//         setTimeout(()=>
//         {
//         resolve('Khiladia');
//         }
//         ,3000
// )
//     }
//     else
//     {
//         setTimeout(()=>
//         {
      
      
//         reject('Nahi Khilaya');
//     }
//     ,3000
//     )
//     }
// })


// console.log(promise)
// promise.then(function(data)
// {
//     console.log('Resolve =>', data);

// })

// .catch(function(error)
// {
//     console.log('Error =>',error);
// })



// let zinger = 'Available';
// let promise = new Promise((resolve,reject)=> 
// zinger === "Available" ? setTimeout(()=>resolve("Khiladia"),3000): setTimeout(()=>reject("Nahi Khilaya"),3000))

// console.log(promise)
// promise.then(data => console.log(" Resolve => ", data))
// .catch(error => console.log(" Error => ", error))

// let getData = () =>
// {
// let promise = new Promise((resolve,reject)=>
    
//  fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(data =>
//      resolve(data))
//   .catch(error => reject(error))
// )
// console.log(promise)
// promise
// .then((data)=>console.log("Resolve = >",data))
// .catch((error)=>console.log("Error =>",error))
// }


//  getData()


//  async function getData ()
//  {
//    let promise = new Promise((resolve,reject)=>
     
//    fetch('https://jsonplaceholder.typicode.com/todos/1')
//    .then(response => response.json())
//    .then(data =>
//       resolve(data))
//    .catch(error => reject(error))
//  )
//  console.log(promise)
//  let data = await promise
//  console.log(data)
//  // .then((data)=>console.log("Resolve = >",data))
//  // .catch((error)=>console.log("Error =>",error))
//  }
 
 
//   getData()
 

let getData = (getfirebasedata) =>
   
firebase.database().ref('students').on("child_added",(data)=> getfirebasedata(data.val()))

let getfirebasedata = (firebasedata) => console.log(firebasedata)

 getData(getfirebasedata)


 let arr = [{name:'Mazhar',age:25,rollNo:4437},{name:'Mehdi',age:45,rollNo:2237}];

 let filter = arr.filter(a=>a.age > 20)
 console.log(filter)