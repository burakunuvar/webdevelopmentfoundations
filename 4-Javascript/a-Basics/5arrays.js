var nums= [1,2,3,4,5];
var letters = ["a","b","c","d","e"];

var mixedArray = [1,"a",f3, undefined, true]; //performance issue

console.log(nums[0]); // index 0

console.log(letters[1]); // index 1

function f1(a,b){
  return(a+b);
}
function f2(a,b){
  return(a-b);
}
function f3(a,b){
  return(a/b);
}
function f4(a,b){
  return(a*b);
}
var myFunctions=[f1,f2,f3,f4];

var combArray = [[1,2,3,4,5],["a","b","c","d","e"]];


nums.shift() ; // removes index 0
nums.pop() ; // removes last index
nums.push(5); // add the argument as the last index of the array

letters.concat(["z","x","y"]); // doesn`t change the existing array or indexes
letters.sort();
