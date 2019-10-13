
 https://dorey.github.io/JavaScript-Equality-Table/
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness

1 == "1";
1 === "1";

Object.is(-0,+0)
Object.is(NaN, NaN)

console.log(NaN === NaN) ;
console.log(Object.is(NaN,NaN))  ;

console.log(-0 === +0)
console.log(Object.is(-0,+0)) ;