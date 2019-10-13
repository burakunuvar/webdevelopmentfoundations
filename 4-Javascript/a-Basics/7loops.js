var letters = ["a","b","c","d","e"];

for (i=0; i<letters.length;i++){
  console.log("letter " + i + " is " + letters[i]);
}

var i=0;
while(i<letters.length){
  console.log("letter " + i + " is " + letters[i]);
  i++;
}

counter=10;

do {
  console.log(counter);
  counter-- ;
} while(counter > 8);

// array.forEach(function(){})

var letters = ["a","b","c","d","e"];
letters.forEach(function(item){
  console.log(item);
});
letters.forEach(function(item,index){
  console.log(item,index);
});

// array.forEach(fName)

var nums= [1,2,3,4,5];
function takeSquare(num,i){
  console.log("index is " + i + " and the number is " + num);
  console.log("square is " + num*num);
}

nums.forEach(takeSquare);
