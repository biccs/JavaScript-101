//(2)@biccsdev
//JavaScript Loops
//Loops allows us to iterate and continuosly run code
// given certain conditions.

//FOR LOOPS
//Allows iteration under certain conditions
// for ( condition 1; condition 2; condition 3){}
// "let i = 0" - States the initial value for the helper variable
// "i < array.length" - condition that indicates when to stop iterating
// "i++" - executes at the end, if condition 2 is true

let array = [1, 2, 3, 4, 5];
//Iterates over all the array values and prints one each iteration.
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

//Var Of For Loop
//Simplified version of the foor loop
// for (var 'helper' of 'variable'){}
let people = ["Victor", "Raul", "Manuel", "Cornelio"];
//Iterates through each value of the array and prints it to console along a message
for (var person of people) {
  console.log("Hello, " + person);
}

//WHILE LOOPS
//It doesnt usually have a fixed number of iterations as for loops
//Iterates as long a condition is met
//while (condition) {}
while (array.length > 0) {
  let number = array.shift();
  console.log("-- Number " + number + " deleted from array.");
}

//DO-WHILE
//Different from traditional while loops, do while
// first iteration happens before the condition is checked
// do { //code } while(condition);
//The code below only deletes the last element of an array
do {
  let deletedPerson = people.pop();
  console.log("** Deleted " + deletedPerson + " from array.");
} while (people.length == 100);

//** RUN on terminal with 'node loops.js' **
