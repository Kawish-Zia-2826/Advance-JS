var a  = "kawish"
a = "jjj"
console.log(a);


let welcome = ()=>
   "hello world"

console.log(welcome());


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

let fname  = "kawish "
let lname  = "zia"
let course = "web dev"

function student(fname,lname,course) {
  let fullname = `${fname} ${lname}`
  return {fullname,course}
  }
let s   = student(fname,lname,course)

console.log( s.fullname
 );