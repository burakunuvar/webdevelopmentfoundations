// jshint esversion : 8

// reference type 
// As a diffence to other JS Types ; each object creates its own box in the memory.
//  all other types are primitive : 1. Number 2. String 3. Boolean 4. Undefined 5. Null

let object1 = {value :1};
let object2 = object1; // references to where object1 is
let object3 = {value :1};

object1===object2 // true
object1===object3 // false

let arr1=[1,2,3];
let arr2=arr1;
let arr3=[].concat(arr1);

[] === [] ; //false
[1] === [1]; // false


let obj1 ={a:"a",b:"b",c:"c"};
let obj2 = obj1;
let obj3 = Object.assign({},obj1);
let obj4 = {...obj1};


let obj1 ={a:"a",b:"b",c:{deep:"deepclone"}};
let obj2 = obj1;
let obj3 = Object.assign({},obj1); //shallow cloning
let obj4 = {...obj1};//shallow cloning
let obj5 = JSON.parse((JSON.stringify(obj1))); // superclone


// Context vs Scope
// scope lives within curly brackets of a function

function bb (){
  // child scope
  var b = "bbbbb";
  console.log(b);
}
console.log(b);

//context tells where we're within the object1

this === window // the keyword this refers to object environemnt we're in

function a(){
  var a = "aaaaa";
  console.log(this);
} // this is still the window object here, window & this are the same

let obj = {
  b: function(){
    var b = "bbbb";
    console.log(this);
  },
}; // obj & this are same here


let obj2 = {
  name:"concept with this" ,
  c(){
    console.log(this);
  },
  // name:"concept with this"
};

// Instantiation

class Player{
  constructor(nameArg,typeArg){
    this.name=nameArg;
    this.type=typeArg;
    console.log("PLAYER" , this);
  }
  introduce(){
    console.log(`Hi I am ${this.name}, I am a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(nameArg,typeArg,levelArg){
    // console.log(this); // will give error
    super(nameArg,typeArg);  // runs the construction function in player
    this.sound = "BOOH WOOH";
    this.level = levelArg;
    console.log("WIZARD" , this); // will work
  }
  play(){
    console.log(`${this.sound}, I am a ${this.type}`);
  }
}

const wizard1= new Wizard ("wizard1","monster",5);
const wizard2= new Wizard ("wizard2","witch",8);

// CLASSICAL INHERITANCE  :

function PlayerOne(name,level){
  this.name = name;
  this.level = level;
  this.intro=function(){
    console.log(`${this.name}, I am a ${this.level}`);
  };
}

let p1f = new PlayerOne("burak",10);

PlayerOne.prototype.makeVoice = function(){
  console.log("ACTION!!!");
};

let p2f = new PlayerOne("pinar",20);

const p1= new PlayerOne("burak",5 );

p1.singSong = function(){
  console.log("SONG TIME !!!");
};

const w1= new PlayerOne("w1","monster");

w1.play = function(){
  console.log(`${this.sound}, I am a ${this.type}`);
};


class PlayerOne{
  constructor(name,level) {
    this.name = name;
    this.level = level; 
  }
  intro (){
    console.log(`${this.name}, I am a ${this.level}`);
  };
}
let p1f = new PlayerOne("burak",10);

PlayerOne.prototype.makeVoice = function(){
  console.log("ACTION!!!");
};

let p2f = new PlayerOne("pinar",20);

// class Player{
//   constructor(nameArg,typeArg){
//     this.name=nameArg;
//     this.type=typeArg;
//     console.log("PLAYER" , this);
//   }
//   introduce(){
//     console.log(`Hi I am ${this.name}, I am a ${this.type}`);
//   }
// }



let p1f = new PlayerOne("burak",10);

PlayerOne.prototype.makeVoice = function(){
  console.log("ACTION!!!");
};

let p2f = new PlayerOne("pinar",20);


/// reminder on Constructor Function

function BellBoy(nameArguement,ageArguement,permitArguement,languagesArguement) {
      this.name = nameArguement ;
      this.age = ageArguement ;
      this.permit = permitArguement ;
      this.languages = languagesArguement ;
      this.clean = function(){
          alert("bb 1") ;
      }
  }

let BellBoy1 = new BellBoy("a",20,true,"french") ;

let BellBoy2 ={
      name : "b" ,
      age : 22 ,
      permit : false ,
      languages : ["english" , "french" , "aaa"] ,
      clean : function(){
          console.log("bb2");
      },
  }


// exercise :


class Animal {
  constructor(name,type,color){
    this.name = name;
    this.type = type ;
    this.color = color; 
  }
}

class Mamal extends Animal {
  constructor(name,type,color){
    super(name, type, color)
  }
    sound() {
    console.log(`Moooo I'm ${this.name} and I'm a ${this.color} ${this.type}`);
  }
}

const cow = new Mamal('Shelly', 'cow', 'brown');