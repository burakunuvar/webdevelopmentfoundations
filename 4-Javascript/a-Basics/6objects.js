// object is a variable, with properties in
var user1 = {
  name:"burak",
  surname:"unuvar",
  age : "33",
  hobby : "gym",
  workPermit : true,
  certifications : ["SA Pro", "SysOps" , "Developer", " Associate"],
  intro : function(){
    console.log("this function is defined under user1 ");
  },
};

user1.occupation = "computer engineer";
user1.yearOfExperience = 10 ;


var letters = ["a","b","c"];

var letters = {
  0:"a",
  1:"b",
  2:"c"
};


// null vs Undefined
user2 = {};
var letters = [];

var userList = [user1,user2];

console.log(user["name"]);
console.log(user.name);



var emptyObject = {}; // can insert new items
var nullObject = null ; // no updates possible
