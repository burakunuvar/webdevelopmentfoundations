//  jshint esversion: 6

const flattened =[[0,1],[2,3],[4,5]].reduce(
  (a,b) => a.concat(b),[]);

const flattened2 =[[0,1],[2,3],[4,5]].reduce(
  function (acc,item) {
    console.log("item",item);
    console.log("acc",acc);
    return acc.concat(item);
 },[]);

 const flattened3 =[[0,1],[2,3],[4,5]].reduce(
   function (acc,item) {
     debugger;
     return acc.concat(item);
  },[]);
