
var a = 5 ;
var b = 6 ;
b = a; 
b++; //6


let object1 = {value1:1, value2:2};
let object2 = object1; // references to where object1 is
object2.value1 = 10 // updates both
// same for arrays
let arr1 = [1,2,3,4,5];
let arr2=arr1;
arr2.push("12345"); // updates both
let newArr = [].concat(arr1); // creates a new array with a new reference

let obj1 ={a:"a",b:"b",c:"c"};
let obj2 = obj1;
let obj3 = Object.assign({},obj1);
let obj4 = {...obj1};

let obj1 ={a:"a",b:"b",c:{deep:"deepclone"}};
let obj2 = obj1;
let obj3 = Object.assign({},obj1); //shallow cloning
let obj4 = {...obj1};//shallow cloning
let obj5 = JSON.parse((JSON.stringify(obj1))); // superclone


