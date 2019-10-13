
// functions are defined under "window"
function scope(){
  console.log("scope ");
}
scope();
window.scope() ;


// variables defined in window are visible by the functions who share the same parent
// variables defined within a function live within a function, can`t be accessed by parent

// root scope = window
var a = "aaaaa" ;

function bb (){
  // child scope
  var b = "bbbbb";
  console.log(a);
  console.log(b);
}

console.log(b);
// b is not defined


function updateA (){
  // child scope
  var a = "UPDATEDaaaaa";
  console.log(a);
}
// "a" is a new variable within updateA child scope, so the window.a will not be affected.

function updateA (){
  // child scope
  a = "UPDATEDaaaaa";
  console.log(a);
}
//// "a" is the existing variable within parent scope, so the window.a will be updated.


///hoisting :

var a = "aaaaa" ;

function bb (){
  // child scope
  console.log(a);
  var b = "bbbbb";
  console.log(b);
  var a="hoisting will make this undefined within this universe";
}
