// var a  = "kawish"
// a = "jjj"
// console.log(a);


// let welcome = ()=>
//    "hello world"

// console.log(welcome());


// let sum = (...args) => {
//   let sum = 0;
//   for (const i of args) {
//     sum += i;
//   }
//   console.log(sum);
// };

// sum(2, 3, 4);

// function surm(name,...ags) {
//   let sum = 0;
//   console.log(arguments);
//   for (const i in arguments) {
   
//      sum += arguments[i];
      
    
//   }
//   console.log(`name is ${name}  ${sum}`);
  
// }
// let arr = [1,2,3,4]
// sum("kawih zia",...arr)

// let arr1 = [1,2,3,4]
// // let arr2 = [...arr1]
// let arr2 = [5,6,7,8]
// // arr1.push(5)
// let arr3 = [...arr1,...arr2]
// console.log(arr3);

// let obj1 = {
//   "name" :"kawish"
// }
// let obj2 = {
//   "age":25
// }

// let obj3 = {...obj1,...obj2}
// console.log(obj3);

// ======obj literal=========
// let namee  = "kawish"
// let course = "web Develpment"
// let n = "student"
// let obj = {
//   namee,
//   course,
//   [n + "name"]:"kawihs",
//   "detail show"(){
//     return `this ${this.studentname} course is ${this.course}`
//   }
// }
// console.log(obj);
// console.log(obj["detail show"]());

//object literal

// let fname  = "kawish "
// let lname  = "zia"
// let course = "web dev"

// function student(fname,lname,course) {
//   let fullname = `${fname} ${lname}`
//   return {fullname,course}
//   }
// let s   = student(fname,lname,course)

// console.log( s.fullname
//  );

// function student(fname,lname,course) {
//   let fullname = `${fname} ${lname}`
//   return console.log(
//    {fullname,course});
// }


// student(fname,lname,course);


// array distuctring


// let user=["kawish",22,["male","karachi"]]
// let [name,age = 20,[gender,city]]=user
// console.log(name);
// console.log(age);
// console.log(gender);
// console.log(city);
// let user=["kawish",22,["male","karachi"]]
// let [name,...args]=user
// console.log(name);
// console.log(args);
// console.log(gender);
// console.log(city);



// use distuctring in func

// function user([name,age,city]) {
// console.log(name);
// console.log(age);
// console.log(city);

//   }

//   user(["kawish",29,"karachi"])



// function user() {
//   return  ["kawish",29,"karachi"]
 
  
//     }
  
//     let [namee,age,city] = user()
//     console.log(city);
    

// object distructing
// let user = {
//   name :"kawish",
//   age:29
// }

// let{name : n,age:a} = user
// console.log(n);
// console.log(a);


// OOP in JS


// class hello{
//    constructor(name,age){
//     this.studentName  = name; 
//     this.studentAge  = age; 
//     console.log("this is cunstructor");
    
//   }
//   hello(){
//     console.log(
//     `this ${this.studentName} and this age is ${this.studentAge}`);
//   }
//   static newMess(){
//     console.log("this is static method");
    
//   }

// }

// let a = new hello("kawish ",34);
// // a.name = "kawish"
// a.hello()
// hello.newMess()



// ==== inheritance======

// class employee{
//   constructor(name){
//     this.empName = name
    
//     console.log("this is normal func nma " + name);
    
//   }
//   info(){
//     console.log("emplye name is" + this.empName);
    
//   }
// }

// class manager extends employee{

//   constructor(name){
//     super(name)
//     console.log("this also cunstructorx");
    
//   }
//   info(){
//     super.info()
//     console.log("manger name is " + this.empName);
    
//   }
// }

// let a  = new manager("kawish")
// a.info()



// class employee{
//   constructor(name,age,salary){
//     this.empName = name
//     this.empAge = age
//     this.empSalary = salary
    
//     // console.log("this is normal func emp  " + name);
   
    
//   }
//   info(){
//     console.log("emplye name is" + this.empName);
//     document.write(`<h3>emp Details</h3><br/>this emp name is ${this.empName}<br/>
//       this emp age is ${this.empAge}<br/>
//       this emp salry is ${this.empSalary}`)
//   }
// }

// class manager extends employee{

// info(){
//   let ca =200;
//   let ba = 300;
//   let totalSalary = this.empSalary + ca + ba
//   document.write(`<h3>manager Details</h3><br/>this emp name is 
//     ${this.empName}<br/>
//     this emp age is ${this.empAge}<br/>
//     this emp salry is ${totalSalary}`)
// }

 
// }

// let a  = new manager("kawish",22,2000)
// let b  = new employee("kawish",19,2000)
// a.info()
// b.info()

// js modules==================================

//  export let name  = "kawish zia";
//  function hello(name) { 
//   // console.log(`hello world  ${name}`);
//   return console.log(
//    `hello ${name}`);
  
//  }

//   class test{
//   constructor(){
//     console.log("this class works");
    
//   }
//  }

//  export {name,test}


// export default function () {
//   console.log("helo this is default func");
  
//   }


// ================================================promise=============================
// let compelte = false;
// let prom = new Promise(function (resolve,reject) {
//   if (compelte) {
//     resolve("i am fulfiles")
//   }else{
//     reject("im not ")
//   }

//   });


//   console.log(prom);



// function prom(a,b) {  
  
  
//   return  new Promise(function (resolve,reject) {
//     let c = a/b
//   console.log("please wait i am fetching data");
//   setTimeout(() => {
//     if (a,b) {
//       resolve(c)
//     }else{
//       reject("im not ")
//     }
//   }, 1000);


//   });
// }

// // let onfullfilment = (result)=>{
// //   console.log(result);
  
// // }
// // let onrejection = (err)=>{
// //   console.log(err);
  
// // }
// prom(5,4).then( (result)=>{
//   console.log(result)}).catch((err)=>{
//     console.log(err)})




// function prom() {  
  
  
//   return  new Promise(function (resolve,reject) {
   
//   console.log("please wait i am fetching data");
//   setTimeout(() => {
//     $.get("https://jsonplaceholder.typicode.com/todos/1", 
//       function (data) {
//         resolve(data);
        
//       }
      
//     ).fail(err => {
//       reject("failed to load")
//     })
//   }, 1000);


//   });
// }


// prom().then( (result)=>{
//   console.log(result)}).catch((err)=>{
//     console.log(err)})


    


// let p1 = new Promise(
//   function (succes,failure) {
//     setTimeout(() => {
// console.log("this is our first promise");
//       succes(10)
//     }, 1 * 1000);
//     }
// )

// let p2 = new Promise(
//   function (succes,failure) {
//     setTimeout(() => {
// console.log("this is our second promise");
//       succes(10)
//     }, 2 * 1000);
//     }
// )

// let p3 = new Promise(
//   function (succes,failure) {
//     setTimeout(() => {
// console.log("this is our third promise");
//       succes(10)
//     }, 3 * 1000);
//     }
// )
// var total =0;

// Promise.all([p1,p2,p3]).then((res =>{
//   for (const i in res) {

//     total += res[i];
      
    
//   }
//   console.log(total);
  
// })).catch(err =>{
//   console.log(err);
  
// })










// let promiseCall = 
//   function (data,message) {
//    return function (succes,failure) {
//     setTimeout(() => {
//       console.log(`the ${message} promise is our first promise `);
//             succes(data)
//           }, data * 100);
//      }
//     }


// let p1 = new Promise( promiseCall(10,"first"))
// let p2 = new Promise( promiseCall(20,"second"))
// let p3 = new Promise( promiseCall(30,"third"))
// let p4 = new Promise( function (succes,failure) {
//   failure("this promise is rejected")
//   })


// var total = 0;

// Promise.all([p1,p2,p3,p4]).then((res =>{
//   for (const i in res) {

//     total += res[i];
      
    
//   }
//   console.log(total);
  
// })).catch(err =>{
//   console.log(err);
  
// })




//========================ajax===================
// const loadData = ()=>{
// var xhhtp  = new XMLHttpRequest();
// xhhtp.onreadystatechange = function () {
//   if (this.readyState === 4 && this.status === 200) {
//     $("#demo").html(this.responseText);
//     // console.log(this.responseText);
    
//   } else {
    
//   }
//   }
//   x 
  
//   xhhtp.open('GET',"./text.txt",true)
//   xhhtp.send();
// }


// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function () {
//   if (this.readyState === 4 ) {
//     console.log(this.responseText);
    
//   } 
//   }
// xhttp.open('GET',"https://jsonplaceholder.typicode.com/todos/1")
// xhttp.send()


// ================fetch()/////////////


// fetch('https://jsonplaceholder.typicode.com/todos').then((resolve) => resolve.json()).then((data) => {console.log(data)
//   for (const i in data)

//   //  console.log(data[i].userId);
//   document.write(`user id is : ${data[i].id}</br>user title :${data[i].title}`)   
    
    
  
// }).catch((error) => console.log("we cant fethch data"))
// fetch("student_data.json").then((resolve)=>resolve.json()).then((data)=>console.log(data)).catch((err)=>console.log("thera a problem"))

// `
// document.write(`<input type="text" id="title" />
//   <button id="btn">submit</button>
// `)
// $("#btn").click(function (e) { 
//   e.preventDefault();
  

// var data = {
//   title: $('#title').val(),
//   body: 'bar',
//   userId: 1,
// }

// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify(data),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json))



// });


// ========================Async Await/////////////////////////

// async function test() {
//   return "hello"
//   }
//   test().then((succes)=>  console.log(
//     succes) )
 

// let test = async () =>  "hello"
  
//   test().then((succes)=>  console.log(
//     succes) )


// let test  = async() =>{
// console.log("message 2");
// const response = await fetch('./student_data.json')
// console.log("message 3")
// let student  = await response.json()
// return student

// }
// console.log("message 1");
// let a = test();
// console.log("message 5");

// console.log(a);




// let test  = async() =>{
//   const response = await fetch('./student_data.json')
//   let student  = await response.json()
//   return student
  
//   }
//    test().then((res)=> console.log(res)).catch((err)=> console.log(err))
 
// ?======================================short form

// let test  = async() =>{
//   return (await fetch('./student_data.json')).json()
  
//   }
//    test().then((res)=> console.log(res)).catch((err)=> console.log(err))
/// through try cath handlin
// let test  = async() =>{
// try {
//     const response = await fetch('./student_data.json')
//     let student  = await response.json()
//     return student
    
//   } catch (error) {
// }
//   console.log("thers a error")
// }

//    test().then((res)=> console.log(res))

//====================================js Symbol/////////////////////////
// let x = Symbol("Hello");
// let y = Symbol("Hello")

// console.log(typeof x)
// alert(x.toString())
// alert(x.description)
// console.log(x == y);

// using symob in obj
// let age= Symbol("age")

// let user = {
//   name:"kawish",
// [age]: 25,


// }

// console.log(user);

//please user squre bracket for calling symbol

// let age= Symbol("age")

// let user = {
//   name:"kawish"


// }
// user[age] = 15

// console.log(user[age]);

//maek sure symbol key skip in loop and json
// let age= Symbol("age")

// let user = {
//   name:"kawish"


// }
// user[age] = 15
// user["gender"] = "male"
// // for (const key in user) {
// // //  console.log(key);//is skip the symob val
// // }

// console.log(JSON.stringify(user)); //json alos skip symbol if you want to convert use description property or conver into string 

//=====================================================js itrators
// syntax
// this is array itrator you can control your array on your hand 
// let x  = [1,2,3] 
// let y = x[Symbol.iterator]()
// y.next()
// y.next()
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log(y.next())

//using for while loop
// let x  = [1,2,3] 
// let y = x[Symbol.iterator]()
// let iter = y.next()
// while(!iter.done){
//   console.log(iter.value);
//   iter = y.next()
  
// }


//=====================make your custom itrator///////
// function Itrator(arr) { 
//   let initalVal = 0;
//   return{
//     next(){return initalVal < arr.length
//        ?{value:arr[initalVal++],done:false}
//        :{done:true}
  
//   }
//   }
//  }




// let x = [1,2,3,4]
// let num = Itrator(x)

// console.log(num.next().value);
// console.log(num.next().value);
// console.log(num.next().value);
// console.log(num.next().value);
// console.log(num.next());


//=============================================================== JS Genrators
// function *genrator() { 
//   yield("hello1")
//   yield("hello2")
//  }
//  let g = genrator()
//  console.log(g.next());
//  console.log(g.next());
//  console.log(g.next());

// yield using for of loop
// for (const values of g) {
//   console.log(values);
  
// }
//  console.log(g);

// for continously genrator val

// function *genrator() { 
//  let num = 300;
//  while(true)
//   yield num++
  
//  }
 
//  let g = genrator()

// //  console.log(g.next());
// //  console.log(g.next());
// //  console.log(g.next());
// //  console.log(g.next());
// // ===============isong through loop
// for (const val of g) {
//   if (val  > 350) break ;
    
//     console.log(val);
  
  
// }


// new tarkia 
// function *genrator() {
//   let result = [yield,yield,yield]
//   console.log(`this is result val ${result}`);
  
//   }
//   let g = genrator()
//   g.next()
//   g.next(500)
//   g.next(600)
//   g.next(700)

//==================for multiple type of data pass like array
// function *genrator() {
//  yield 123
//  yield* ["php","java","python"]

  
//   }
//   let g = genrator()
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());


//=================genrators using spread operator
// function *genrator() {
//   yield 123
//   yield "php"
//   yield "java"
//   yield "python"
 
   
//    }
//    let g = genrator()
//  console.log(g.next());
//  console.log(g.return("ending nowww"));
//  console.log([...g]);



 
 
//=======================================JS Strict====================================
// "use strict";
// var a = 10;
// console.log(a);

// //with func
// function test(x,g,c) {
//   console.log(x,g,x);
  
// }
// test(10,20,30)


// with block scope

// a = 10 //this not gives error

// function demo() {
//   "use strict"
//   var b = 0 //but this give
//   console.log(b);
  
//   }
//   demo()

//======================================try catch js======================

// try {
//   console.log("this is our first try");
//   dj()
//   console.log("this is our last try");
  
// } catch (error) {
//   console.log("this is our first error");
//   console.log(error);
// }
/// try catch working suncronulsy

// try {
//   setTimeout(() => {
//     sfds()
//   }, 1000);
// } catch (error) {
//   console.log("this not give an err");
  
// }

//but if you use try cath in settime out so this gives proper err

// setTimeout(() => {
//   try {
//   sfds()} catch (error) {
//     console.log("this  give an err");
//     console.log(error);
    
//   }
//   }, 1000);

//three type to see eroor message no 1 message no 2 name and num 3 stack give both message or stack


// try {
//   afssaF()
// } catch (error) {
//   console.log(error.name);
//   console.log(error.message);
//   console.log(error.stack);
  
// }

  

// try {
//   bal()
// } catch (error) {
//   if (error instanceof ReferenceError) {
//     console.log("Refernece");
    
//   } else if(error instanceof TypeError) {
//     console.log("type Erro");
    

//   }
//   else{
//     console.log(error);
    
//   }
// }

// try catch error using JSON

// try {
//   let json  = '{"class":"12th"}'
//   let user  = JSON.parse(json)
//   // console.log(user.name);
//   if(!user.name){
//     throw new Error("hers name is unavilable");
    
//   }
  
  
// } catch (error) {
//   console.log(error);
  
// }finally{
//   console.log("finally run ho ga error ho ya na ho");
  
// }

//=============================ajax
// $.ajax({
//   // type: "GET", // by defaul set on get
//   url: "https://jsonplaceholder.typicode.com/todos",
//   // data: "data",
//   dataType: "Json",
//   success: function (response, status) {
//     // Log the response as a pretty formatted string
//     console.log(JSON.stringify(response, null, 2)); 

//     // Show the status (e.g., "success", "notmodified", etc.)
//     alert(status);  
// }
// });

$.ajax({
  type: "post",
  url: "https://jsonplaceholder.typicode.com/posts",
  data: {
    "name":"kawihs"
  },
  dataType: "json",
  success: function (response,succes) {
    console.log(response);
    console.log(succes);
    
    
  }
});
