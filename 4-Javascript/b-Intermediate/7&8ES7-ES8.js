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
//(5) ["user1", "user2", "user3", "user4", "user5"]


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
