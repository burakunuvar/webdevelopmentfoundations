// jshint esversion:6

// const var let
const player ="burak";
let age = 33;
var vote1 = false;
let vote2 = false;

if (age>=30){
  var vote1 = true;
  let vote2 = true;
}

// with variable , a scope is created only within a function, not in an if statement
// with let ,a scope is also created within if statement, or any curly brackets

const obj ={
  player : "burak" ,
  age :33 ,
  vote :false ,
};

obj = "sth"  ;
//gives error

obj.player = "pinar";
//possible

const player = obj.player ;
const age = obj.age;
let vote = obj.vote;

// or use DESTRUCTURING
const {playerO,ageO } = obj;
let{vote} = obj;


// Object Properties

const name ="burak unuvar";

const object = {
  [name]:'hello', // assigns dynamic value to property
  ['ray' + 'smith']: 'hihi',
  [1+2] : "?",
};

const a= "aaa";
const b= true;
const c= 5;

const newObject = {
  a:a,
  b:b,
  c:c
};

//if property of an object is same with value
const newObject2 = {
  a,
  b,
  c,
};


//Template Strings

const name="john";
const age= 35 ;

const greeting = `Hello ${name} ; you are ${age} years old `

//default arguments

function greet(name="burak",age=34){
  return `Hello ${name} ; you are ${age} years old ` ;
}

// A New Data Type : Symbol

let sym1 = Symbol();
let sym2 = Symbol("a");
let sym3 = Symbol("a");
let a = functionName;


//arrow 4functions

function add(a,b){
  return a+b;
}

const add1 = function add1 (a,b){
  return a+b;
};

const addMidForm = function (a,b){
  return a+b;
};

const addMidForm2 = (a,b)=>{
  return a+b;
};

const add2 = (a,b)=> a+b;
