var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li= document.querySelectorAll("li");

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
  li.appendChild(button);
  li.appendChild(newToDo);
  ul.appendChild(li);
  input.value = "";
  AddEventListenerForEachLi();
  AddEventListenerForEachButton();
}


AddEventListenerForEachLi();
AddEventListenerForEachButton();

function AddEventListenerForEachLi(){
	for( i=0; i<li.length; i++){
	li[i].addEventListener('click', AddlineThrough)
	}
}

function AddEventListenerForEachButton(){
	var button = document.querySelectorAll('li button');
	for( i=0; i<button.length; i++){
	button[i].addEventListener('click', RemoveItem)
	}
}

function AddlineThrough(){
	this.classList.toggle('done');
}


function RemoveItem(){
	for(var i=0; i<li.length; i++){
		this.parentNode.remove()
	}
}



//
// todoItems.forEach(function(todo) {
//   todo.addEventListener("click", function(event) {
//     console.log("li clicked");
//     console.log(event);
//     todo.classList.toggle("done");
//   });
// });
//
// deleteButtons.forEach(function(dB) {
//   dB.addEventListener("click", function(event) {
//     console.log("dB clicked");
//     console.log(event);
//     // ul.removeChild(li);
//     // // li.classList.toggle("done");
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
