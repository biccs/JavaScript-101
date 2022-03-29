//(0)@biccsdev
//JavaScript Variables
//Useful for reutilizing and structuring code, to give functionality
// to classes, etc.
//There are 2 types:

//** Testing function declaration using Hoisting

//We just call this function as it is, because
// it already contains a method to handle the function value
myFunct("Mexico");

//Function Declaration Structure
// "function" - reserved word
// "myFunc()" - represents any given name that represents the function,
// inside parenthesis should be the parameters if any
// "console.log()" - method for printing stuff to the console
function myFunct(country) {
  console.log("Hello World from " + country);
}

//Function Expression
// "var" - reserved word for declaring variables with no scope
// "myFunc" - variable name
// "function" - reserved word for declaring a function it may or may not
// include parameters inside the parenthesis
// "return" - reserved word for functions to return a result if any
var myFunc = function () {
  return "Hello World as a Expression";
};

//** MAIN DIFFERENCES **
//We can call Function Declarations before declared in code as example above,
// thanks to a concept called Hoisting.
//With Function Expression we have to declare the function first and then call it.

//Notice we call each function in a different way as
// expression function returns a string, it need a method
// to do something with its return value.
console.log(myFunc());


//** Switch function
// used managing different possible outcomes
// without the need of many if else statements.
let value = 2;

switch (value) {
  case 1:
    console.log(value);
    break;
  case 2:
    console.log(value);
  case 3:
    console.log(value);
    break;
  case 4:
    console.log(value);
    break;
  case 5:
    console.log(value);
  default:
    console.log("error");
}

//** RUN on terminal with 'node variables.js' **
