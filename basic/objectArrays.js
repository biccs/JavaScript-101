//(4)@biccsdev
//JavaScript Object Arrays
//Allows us to store multiple instances of objects within the
// same data structure.

//OBJECT ARRAY STRUCTURE
//var objectsArray = [{name:"name1", age: 22}, {name:"name2", age: 23}];
var product = [
  { name: "Cocacola", price: 12, stock: 20 },
  { name: "Tostitos", price: 14, stock: 55 },
  { name: "Hoodie", price: 399, stock: 32 },
  { name: "Headphones", price: 199, stock: 5 },
];

//Iterate over Object Arrays

//**FILTER
//Create new object from array upon conditions and/or logic
// ".filter( function ( elemetToFilter ) { //conditions/logic } )"
//- Validates whether something is true or false, takes the
// "elementToFilter" as helper variable and excecutes a piece of
// code for each iteration over the array
//- It doesnt modify the original array
//- Creates/Stores the value in new array
//Creates new array from condition met
var filteredProducts = product.filter(function (element) {
  return element.stock > 30;
});
console.log(filteredProducts);

//**MAP
//Helps iterate and manipulate elements of ARRAY
//Creates new array from elements of old array, doesn't modify original
// ".map( function( element ) { //logic });"
//Returns a new array of the names of the elements of the old array
var newProducts = product.map(function (element) {
  return element.name;
});
console.log(newProducts);

//**FIND
//Validates through a condition if an element exists or not and does something after
//Creates new array, doesn't modify original
//Returns the first object it finds
//If it finds the object, returns it, if not doesn't return anything
// ".find(function(element){//Condition/logic})"
//Returns an object only if condition met
var foundProduct = product.find(function (element) {
  return element.name === "Cocacola";
});
console.log(foundProduct);

//**FOREACH
//Iterates through array to retrieve or manipulate information as a copy
//Doesn't modify the original array
//Doesn't create a new array
// ".forEach( function( element ) { //Code });"
product.forEach(function (element) {
  console.log(`- Product name: ${element.name}`);
});

//**SOME
//Returns a true or false validation upon elements meeting certain criteria
//Doesn't generate any array
// ".some(function(element){//Validation})"
//Returns True or False if there is any element whose price is equal or below 14.
var validatedProduct = product.some(function (element) {
  return element.price <= 14;
});
console.log(validatedProduct);

//** RUN on terminal with 'node objectArrays.js' **
