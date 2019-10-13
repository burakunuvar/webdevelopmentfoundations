// jshint esversion: 8
// New with ES7:

// .includes

"hellooo".includes("o");

var str ="burak";

var arr = ["burak","pinar","burcu"];

arr.includes("burak");

// exponential

const square = (num)=> num**2;
const cube =(num)=>num**3;

// New with ES8:

'thisIsEndOfAString'.padStart(25); // puths space at the beginning
'abc'.padStart(10); // puts space at the end
// number in () refers to total chars

"this is beginning of a string".padEnd(25);

// trainling comma, is useful for future updates

const fun = (a,b,c,d,) =>{
  console.log(a);
};

// values and entries are added to Keywords

let obj = {
  user1 : "burak",
  user2 : "burcu",
  user3 : "pinar",
  user4 : "nilufer",
  user5: "aydin",
};

Object.keys(obj);
//(5) ["user1", "user2", "user3", "user4", "user5"]

Object.keys(obj).forEach((user,i)=>{
  console.log("***user***", user);
  console.log("alt1: ");
  console.log(obj[user]);
  // console.log("alt2: ");
  // console.log(obj.user);
});


Object.values(obj);
// => [ 'burak', 'burcu', 'pinar', 'nilufer', 'aydin' ]


Object.entries(obj);

let myArray =Object.entries(obj);

myArray.forEach(item=>{
  console.log(item);
});

let myMappedArray = myArray.map(item=>{
  return item;
});

let myUpdatedrray2 = myArray.map(item=>{
  return item[1]+item[0].replace("user","");
});



/// exercises :


// Solve the below problems:

// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

dragons.includes('John') // false

// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

dragons.filter(name => name.includes('John')) // ['Johnathan']

// #3) Create a function that calulates the power of 100 of a number entered as a parameter
const power100 = (num) => num**100;

// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result.

power100(10000) // Infinity



// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'

// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);


turtle = turtle.padStart(8);
rabbit = rabbit.padStart(8);


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');

'     ||<- Start line'
'🐢======='
'       🐇'


// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
Object.entries(obj).map(value => value.join(" ")).join(' ')
// to this:
'my name is Rudolf the raindeer'



