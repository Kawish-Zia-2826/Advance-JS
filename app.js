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

// function sum(name,...args) {
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

 export let name  = "kawish zia";
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

