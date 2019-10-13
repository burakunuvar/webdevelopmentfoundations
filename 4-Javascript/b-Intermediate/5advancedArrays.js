// jshint esversion:6

// advanced arrays
const arr = [1,2,10,16];
let arr10 =[];
const arr2 =[] ;

const newArray=arr.forEach((num,index)=>{
  // console.log("number: " + num);
  // console.log("index: " + index);
  arr10[index]= num*10;
  }
);

const newArray2=arr.forEach((num,index)=>{
  // console.log("number: " + num);
  // console.log("index: " + index);
  arr2.push(num*2);
  }
);

// map

const mapArray1= arr.map((num)=>{
  return num*3;
});
// forEach loops through array and does what the function asks
// just side effects , returns nth
// map loops through array and returns a value
// no side effects , returns sth

const mapArray2= arr.map(num=>num*3);
// if there is only one parameter inside function, no () needed
// if there is only one single line returning a value, no {} needed

// filter

const filterArray= arr.filter(num=>num>5);
const filterArray2= arr.filter(num=>num<5);

const filterArray3= arr.filter(function(num){
  return num==10;
});

// reduce

const reduceArraySum = arr.reduce((accumulator,num)=>{
  return accumulator + num ;
},0);

const reduceArraySum2 = arr.reduce(function(a,b){
  return a + b;
},0);


const array = [1,2,3,4,5];

const arrayFactorial = array.reduce((acc,num)=>{
  return acc*num;
},1);


/// exercises :

// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

const arrayFELoop= [] ;
array.forEach(obj=>{
    obj.items.forEach(item=>{
    item = item +"!!!";
    arrayFELoop.push(item);
  });
})

    obj.items.forEach(item=>{
        item = item +"!!!";
    }) 
})

//Create an array using forEach that has all the usernames with a "!" to each of the usernames

const arrayFE = [] ;
array.forEach((obj)=>{
    obj.username =  obj.username +"!";
    array1.push(obj);
})

//Create an array using map that has all the usernames with a "? to each of the usernames

const arrayMap = array.map(obj=>{
    obj.username =  obj.username +"?";
    return obj;
})

//Filter the array to only include users who are on team: red

const arrayFilter = array.filter(obj=>{
  return obj.team =="red";
})

//Find out the total score of all users using reduce

const arrayReduce= array.reduce((acc,obj)=>{
  return acc + obj.score ;
},0)

// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
  console.log(num, i);
  alert(num);
  return num * 2;
})

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.

