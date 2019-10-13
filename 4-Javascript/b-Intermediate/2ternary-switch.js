// ternary operator :
// condition ? expr 1 : expr 2

function isUserValid(bool) {
  return bool;
}

var answer = isUserValid(true) ? "allowed" : "denied";

function condition() {
  if (isUserValid(true)) {
    return "allowed";
  } else {
    return "denied";
  }
}

var answer2 = condition();


function moveCommand(direction) {
  var action;
  switch (direction) {
    case "right":
      action = "r";
      break;
    case "left":
      action = "l";
      break;
    case "forward":
      action = "f";
      break;
    case "back":
      action = "b";
      break;
    default:
      action="null";
  }
  return action;
}
