var button = document.getElementById("enter");
var deleteButtons = document.getElementsByClassName("delete");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var todoItems = document.querySelectorAll(".todo");
var deleteButtons = document.querySelectorAll(".todo");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

todoItems.forEach(function(todo) {
  todo.addEventListener("click", function() {
    console.log("li clicked");
    todo.classList.toggle("done");
  });
});
//
// deleteButtons.forEach(function(dB) {
//   dB.addEventListener("click", function() {
//     console.log("dB clicked");
//     ul.removeChild(li);
//     // li.classList.toggle("done");
//   });
// });



// var button = document.getElementsByTagName("button")[0];
// button.addEventListener("click", function(){
// console.log("CLICKED!!!")
// })
// button.mouseEnter("click", function(){
// console.log("CLICKED!!!")
// })
// button.mouseLeave("click", function(){
// console.log("CLICKED!!!")
// })
//
//
// var input = document.getElementById("userinput");
// var button = document.getElementById("enter");
// var ul = document.querySelector("ul");
// button.addEventListener("click", function(){
// console.log("BUTTON CLICKED!!!");
// if(input.value.length >0 ){
// var li = document.createElement("li");
// // li.appendChild(document.createTextNode("testing"));
// li.appendChild(document.createTextNode(input.value));
// ul.appendChild(li);
// input.value = "";
// }
//  })
// input.addEventListener("keypress", function(event){
// console.log(event.keyCode, "a button pushed!!!");
//   if(input.value.length >0 && event.keyCode===13 ){
//   var li = document.createElement("li");
//   // li.appendChild(document.createTextNode("testing"));
//   li.appendChild(document.createTextNode(input.value));
//   ul.appendChild(li);
//   input.value = "";
//   }
//   })
