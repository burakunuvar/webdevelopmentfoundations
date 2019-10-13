// jshint esversion : 6
const arr = ["a","b","c","d","e"] ;

for (let i=0;i<arr.length;i++){
  console.log(arr[i]);
}
arr.forEach(item=>{
  console.log(item);
});


// for of for iterating

for (item of arr ) {
  console.log(item);
}
for (item of "basket" ) {
  console.log(item);
}

for (index in arr ) {
  console.log(item);
}

// for in for objects (properties)
// properties of objects are called enumeral

const obj={
  a:1,
  b:2,
  c:3,
  d:4,
  e:5
};

for (item in obj ) {
  console.log(item);
}
