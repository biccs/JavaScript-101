//(1)@biccsdev
//JavaScript Variables
//Useful for reutilizing and structuring code, to give functionality
// to classes, etc.
//There are 2 types:

//Declarative  Functions Structure
// "function" - reserved word
// "myFunc()" - represents any given name that represents the function,
// inside parenthesis should be the parameters if any
// "console.log()" - method for printing stuff to the console
function myFunct(country) {
  console.log("Hello World from " + country);
}

//Functions as Expressions
// "var" - reserved word for declaring variables with no scope
// "myFunc" - variable name
// "function" - reserved word for declaring a function it may or may not
// include parameters inside the parenthesis
// "return" - reserved word for functions to return a result if any
var myFunc = function () {
  return "Hello World as a Expression";
};

//Testing

//We just call this function as it is, because
// it already contains a method to handle the function value
myFunct("Mexico");

//Notice we call each function in a different way as
// expression function returns a string, it need a method
// to do something with its return value.
console.log(myFunc());
