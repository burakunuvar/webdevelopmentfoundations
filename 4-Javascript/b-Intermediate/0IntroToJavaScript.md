A. JavaScript Types
----------------
1. Number
2. String
3. Boolean
4. Undefined
5. Null
6. Symbol
7. Object

**=>** Items of "undefined objects" might be updated whereas those of "null" can't

B. JavaScript Comparisons
---------------------
* !==
* ===
* \>=
* <=
* \>
* <

C.JavaScript Variables
---------------------
- var
- let
- const

**=>** *Variables can't start with numbers or symbols( except for '$' and '_'); they need to start with a letter*

**=>** *a fragment of code that produces a value is called an expression, and each expression ends with a ';'*


D.JavaScript Conditionals
---------------------
- if
- else
- else if
- ternary operator
```
 condition ? expr 1 : expr 2
```

- switch


E.JavaScript Logical Operators
------------------------------
* or : ||
* and : &&
* not !

F.JavaScript Functions
------------------------------

* Function Declaration :

```
function name(){}
```

* Function Expression :

**=>** *ends with ";", functions are variables*

```
var fName = function() {}

var fName = function name() {}
```

**=>** *They're used interchangeably but Parameters are generic (a,b) whereas arguments are specific (4,5)*

```
function multiply(a,b){
  return a*b;
}
multiply(4,5)

```

- return

- => (arrow function) ; new with ECMA6

G.JavaScript Data Structures
------------------------------

* array
* objects

**=>** *array is in deed a special type of object*

**=>** *a function inside an object is called a method*

```
function thisIsAFunction(){}
var obj = {
  thisIsAMethod : function(){}
}
thisIsAFunction()
obj.thisIsAMethod()

```

**=>** *calling or invoking a function*

```
fName()
fName(arg1, arg2)
```

H.JavaScript Looping
--------------------
* for
* while
* do
* forEach

JavaScript on Webpage
----------------------
**=>** *recommended to be used at the end of the html file for the webpage to be uploaded before waiting for the execution of all functions*

```
<script type="text/javascript" src="folderName/script.js"> ... </script>
```

**=>** [JS Keywords](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords)

Scope
------
**=>** *scope : variable access what variables do I have access to when a code is running*

**=>** root scope = window , child scope = functions

- Note 1: variables defined in window are visible by the functions who share the same parent

- Note 2 : variables defined within a function live within a function, can't be accessed by parent objects

- Note 3: JS file starts reading variables from child scope first, then proceeds with parent if not found.

ES5 - ES6
---------

- ECMA == JavaScript (*ECMAScript is a Standard for scripting languages. Languages like Javascript are based on the ECMAScript standard. ECMA Standard is based on several originating technologies, the most well known being JavaScript (Netscape) and JScript (Microsoft). ECMA means European Computer Manufacturer's Association*)

- [Strict Mode](https://www.w3schools.com/js/js_strict.asp)
```
"use strict"
```

- [Babel of JS](https://babeljs.io/)

**=>**  with "var" , a scope is created only within a function, not in an if statement whereas with let ,a scope is also created within if statement, or any curly brackets

**=>** const can't be updated, no new value can be assigned

- Hint 1 : prefer using "let" instead of "var"
- Hint 2 : prefer using "const" for functions

- **=>** [*Template Literals - strings*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

Advanced Functions
---------

**=>**  functions are small universes with their own scope(child) ; whatever happens in that universe only matters to itself

**=>**  Closure means After execution, functions remember the references to variables; child scope has always access to parent scope, visa versa is not correct

**=>**  Currying is used for taking arguments one at a time instead of multiple

**=>** Compose act of putting two functions together to form a third function
 with the output of one function as the input of other

**=>** AVOID SIDE EFFECTS :
 - purity : always return a value, don't use console.log
 - deterministic : returns same value for same arguements
 - This means, that given the same input, the function will always return the same output.


Advanced Arrays
---------
**=>** MAP, FILTER, REDUCE
 - forEach loops through array and does what the function asks
 - just side effects , returns nth
 - map loops through array and returns a value
 - no side effects , returns sth

 Advanced Objects
 ---------

- As a diffence to other JS Types ; each object creates its own box in the memory.
- scope lives within curly brackets of a function vs context tells where we're within the object1

Advanced Loops
---------
**=>** iteration with arrays vs enumerating with objects
 - properties of objects are called enumeral ; they're not iterable
 - arrays and strings are iterable
