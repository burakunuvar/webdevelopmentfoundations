var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li= document.querySelectorAll("li");
var subButton = document.querySelectorAll('.delete');

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

function inputLength() {
  return input.value.length;
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


function createListElement() {
  var li = document.createElement("li");
  var newToDo = document.createTextNode(input.value);
  var button = document.createElement('button');
  button.innerHTML = "done?";
  li.appendChild(newToDo);
  li.appendChild(button);
  ul.appendChild(li);
  input.value = "";
  li.forEach(function(todo) {
    todo.addEventListener("click", function() {
      this.classList.toggle("done");
      console.log("li clicked!");
    });
  });
  subButton.forEach(function(dB) {
    dB.addEventListener("click", function() {
      console.log("dB clicked");
      console.log("subButton clicked");
    });
  });
}


li.forEach(function(todo) {
  todo.addEventListener("click", function() {
    todo.classList.toggle("done");
    console.log("li clicked!");
  });
});

subButton.forEach(function(dB) {
  dB.addEventListener("click", function() {
    console.log("dB clicked");
    // console.log(dB.parentNode);
    dB.parentNode.remove();
  });
});


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
