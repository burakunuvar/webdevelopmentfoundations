A. JavaScript Types
----------------
1. Number
2. String
3. Boolean
4. Undefined
5. Null
6. Symbol
7. Object

**=>** [*Template Literals*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

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



D.JavaScript Logical Operators
------------------------------
* or : ||
* and : &&
* not !

E.JavaScript Functions
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
F.JavaScript Data Structures
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

F.JavaScript Looping
------------------------------
* for
* while
* do
* forEach

JavaScript on Webpage
------------------------------
**=>** *recommended to be used at the end of the html file for the webpage to be uploaded before waiting for the execution of all functions*

```
<script type="text/javascript" src="folderName/script.js"> ... </script>
```

**=>** [JS Keywords](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords)
