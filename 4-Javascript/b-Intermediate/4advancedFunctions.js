//jshint esversion:6

// PART1
// functions are small universes with their own scope(child)
//whatever happens in that universe only matters to itself
// alt1 : Declaration
function first () {
  var greet = "Hi, DECLARATION" ;
  function second() {
    alert(greet);
  }
  return second;
}
var newFunc = first() ; // returns a function
newFunc();

// alt2 : Expression
var altFuncPrep = function first () {
  var greet = "Hi, EXPRESSION" ;
  function second() {
    alert(greet);
  }
  return second;
}; // doesn't retrun a function yet

altFunc = altFuncPrep(); // returns a function

// alt3 : arrow function
const first2 = () => {
  var greet = "Hi, arrow function EXPRESSION" ;
  const second2=()=> {
    alert(greet);
  };
  return second;
};

var newFunc = first() ; // returns a function
newFunc();


// Part 2 : CLOSURES
// After execution, functions remember the references to variables
// child scope has always access to parent scope, visa versa is not correct

// All alternatives below will not remember "greet"

const second = () => {
  alert(greet);
};

var closureFuncAlt1 = second ;

var closureFuncAlt2Prep = const second = () => {
  alert(greet);
};

var closureFuncAlt2 = ()=>{
  alert(greet);
};

var closureFuncAlt3 = function secondOptinalName () {
  alert(greet);
};


// Part 3 : CURRYING

// used for taking arguments one at a time instead of multiple

// multiple arguements
const mult1 = function(a,b){
  return a*b ;
};

const mult2= (a,b)=> a*b;

//one at a time
const curriedMultOuterLoop = function(a){
  const curriedMultInner  = function(b){
    return a*b;
  };
  return curriedMultInner;
};

const curriedMultEasyWay = (a)=> (b)=> a*b ;

const multiplyBy5 = curriedMultEasyWay(5);

// Part 4 : COMPOSE
// act of putting two functions together to form a third function
// with the output of one function as the input of other

const compose = (f,g) => (a) => f(g(a));

const addOne = (num) => num+1;
const multByTen = (num) => num*10;

compose(addOne,multByTen)


// AVOID SIDE EFFECTS & FUNCTIONAL PURITY

// remove side effects!
var a ="a";
function updateA (){
  // child scope
  a = "UPDATEDaaaaa"; // side effect
  var a = "UPDATEDaaaaa"; // not a side effect 
  console.log(a); //side effect
}

// purity : always return a value, don't use console.log
// deterministic : returns same value for same arguements
// This means, that given the same input, the function will always return the same output.
