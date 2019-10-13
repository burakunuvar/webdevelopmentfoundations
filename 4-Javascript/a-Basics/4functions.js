//jshint esversion:6

alert; // function
alert(); // calling a function
alert("arguments"); // calling a function with arguments

// Function Declaration

function sayHello(){
  console.log("function sayHello is called");
  alert("function sayHello is called");
} // no comma required

sayHello();


// Function Expression
var sayBye = function(){
  console.log("function sayBye is called");
  alert("function sayBye is called - EXPRESSION");
};

var sayBye2 = function optionalNameHere (){
  console.log("function sayBye is called");
  alert("function sayBye is called - EXPRESSION");
};

function requiredNameHere (){
  console.log("function sayBye is called - DECLARATION");
  alert("function sayBye is called");
}

var sayBye3 = requiredNameHere ; // with no calling or trigger "()"


var sayByeToo = ()=>{
  console.log("function sayByeToo is called");
  alert("function sayByeToo is called");
};

sayBye();

sayByeToo();

// In an expression, function name is optional
var sayHelloToo = function sHT(){
  console.log("function sayHelloToo is called");
  alert("function sayHelloToo is called");
}; //comma required

sayHelloToo();

// Arguments

function multiply(a,b){
  return a*b;
}

var funcMultiply =function multiply(a,b){
  return a*b;
};

alert("Declaration SUCCESS: " + multiply(5,10));

alert("Expression SUCCESS: " + funcMultiply(7,11));
