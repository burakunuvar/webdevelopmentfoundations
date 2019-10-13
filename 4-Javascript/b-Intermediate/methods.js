// jshint esversion: 6
var comments = {} ;
comments.data = ["a", "b" , "c" , "d"] ;
function printArray(arr) {
    arr.forEach(function(item){
        console.log(item) ;
    } ) ;
}

// alternative way of doing this :

comments.print = function () {
    this.data.forEach(function(item){
        console.log(item) ;
    } ) ;
};


// lets build the object from scratch
var comments = {
    data : ["a", "b" , "c" , "d"] ,
    print : function(){
        this.data.forEach(function(item){
          console.log(item);
        })
    },
  };

// this one works
var comments = {
    data : ["a", "b" , "c" , "d"] ,
    print(){
        this.data.forEach(function(item){
          console.log(item);
        })
    },
  };

function BellBoy(name,age,permit,languages) {
      this.name = name ;
      this.age = age ;
      this.permit = permit ;
      this.languages = languages ;
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
