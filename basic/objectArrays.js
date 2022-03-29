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
var filteredProducts = product.filter(function (element) {
  return element.stock > 30;
});
console.log(filteredProducts);

//**MAP
//Helps iterate and manipulate elements of ARRAY
//Create new array, doesn't modify original
// ".map( function( element ) { //logic });"
//Return a new array of the names of the elements of the old array
var newProducts = product.map(function (element) {
  return element.name;
});
console.log(newProducts);

//** RUN on terminal with 'node objectArrays.js' **
