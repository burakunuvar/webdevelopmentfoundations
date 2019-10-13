// exports.handler = (event, context, callback) => {
//     // TODO implement
//     const response = {
//         statusCode: 200,
//         body: JSON.stringify('Hello from Lambda!'),
//     };
//     callback(null, response);
// };



function callBack1(){
    console.log("i am callBack1") ;
}

document.addEventListener("keydown", callBack1);

function callBack2(key){
    console.log( key ) ;
}

document.addEventListener("keydown", callBack2);

document.addEventListener("keydown", function(event) {
  console.log(event);
});

document.addEventListener("keydown", function(event) {
  console.log(event);
});

function anotherAddEventListener(typeOfEvent, callback) {
    var eventThatHappened = {
        type : "keypress" ,
        key : "p" ,
        duration : 2 ,
    }
    if (eventThatHappened.type === typeOfEvent) {
       callback(eventThatHappened) ;
    }
}

anotherAddEventListener("keypress", function(event){
    console.log(event) ;
    }) ;

function anotherAddEventListener(typeOfEvent, callback) {
    var eventThatHappened = {
        type : "keypress" ,
        key : "p" ,
        duration : 2 ,
    }
    if (eventThatHappened.type === typeOfEvent) {
       callback3(eventThatHappened) ;
    }
}

s
function callback3(event){
    console.log(event) ;
}

anotherAddEventListener("keypress", function(event){
    console.log(event) ;
    }) ;


anotherAddEventListener("keypress", callback3) ;


function anotherAddEventListener(typeOfEvent, callback) {
    var eventThatHappened = {
        type : "keypress" ,
        key : "p" ,
        duration : 2 ,
    }
    if (eventThatHappened.type === typeOfEvent) {
       callback(eventThatHappened) ;
    }
}


function callback(event){
    console.log(event) ;
}


anotherAddEventListener("keypress", callback) ;

debugger;
anotherAddEventListener("keypress", callback) ;




function higherOrder(typeOfEvent, callback) {

    var event = {
        req : "request" ,
        res : "response" ,
    }
    callback(event.req,event.res) ;

}

function calledBackH(req,res){
    console.log(req);
    console.log(res) ;
}

debugger;
higherOrder("aaa",calledBackH);
