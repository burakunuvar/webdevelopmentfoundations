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
