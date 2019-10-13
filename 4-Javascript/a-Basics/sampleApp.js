var user1 ={
  username: "user1",
  password: "pass",
} ;

var user2 ={
  username: "user2",
  password: "pass",
} ;

var user3 ={
  username: "user3",
  password: "pass",
} ;

var userDatabase = [user1,user2,user3];


var userNamePrompt = prompt("your username: ") ;
var userPassPrompt = prompt("your password: ") ;

function isUserValid(Name,Pass){
  userDatabase.forEach(function(user){
    // console.log(user,userNamePrompt,userPassPrompt);
    if(user.username === userNamePrompt && user.password === userPassPrompt){
      console.log("LOG IN: SUCCESS");
      return true;
    }
    console.log("LOG IN: FAILURE");
    return false;
  });
}

// isUserValid(userNamePrompt,userPassPrompt);

function signIn (Name,Pass){
  if(isUserValid(Name,Pass)){
    console.log("SUCCESS");
  }else{
    console.log("FAILURE");
  }
}

signIn(userNamePrompt,userPassPrompt);
