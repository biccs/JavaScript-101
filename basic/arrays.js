//(1)@biccsdev
//JavaScript Arrays
//Data Structures based on the Object element
//it can contain multiple objects of different types.

//Array Structure
// "let" - reserved word stating it's scope
// "array" - name of the variable
// "[]" - square brackets used to represent the array, it
// may or may not have value, if not value = undefined.
let array = [1, "Value 2", 3.0];

//Print whole array
console.log("- Original Array: " + array);

//Get element length
console.log("- Array Length: " + array.length);

//Access array elements
//By Index [#] - position of element within array
console.log("- Array element at position 0: " + array[0]);

//Mutate array
//Add elements to array
//"array" - name of the array
//"push()" - native function name to add element at the end of array
let push = array.push("Manzana");
console.log("** Pushed value to array");

//"unshift()" - native function name to add element at the beginning of the array
let unshift = array.unshift("Victor");
console.log("** Unshifted value to array");

//Print to console current array state
console.log("- Modified array state: " + array);

//Delete elements from array
//"array" - name of the array
//"pop()" - native function name to delete the last element of the array,
// if parameter given it deletes the element that matches.
array.pop();
console.log("** Poped value from array");

//"shift()" - helps us delete an element at the beginning of the array.
array.shift();
console.log("** Shifted value from array");

//Retrieve the position of an element
//"indexOf()" - where the parameter is the element to look for
var element = array.indexOf("Value 2");

//Tests
console.log("- Element 'Value 2' retrieved index: " + element);
console.log("- Last state of array: " + array);

//** RUN on terminal with 'node arrays.js' **
