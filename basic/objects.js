//(3)@biccsdev
//JavaScript Objects
//Used for abstracting ideas into code
//Objects have attributes (variables) and/or functionality (functions)

//Objects Structure
// "var" - variable reserved word
// "object"  - name of the object
// {key:value} - curly braces states a variable is an object, default value is null
//Objects can store other objects, arrays and functions
// "this.key" - indicates a value of the current object
var car = {
  brand: "Porsche",
  model: "911",
  year: 2018,
  description: function () {
    console.log("*This model is the best for tunning. -" + this.model);
  },
};

//Access objects's values
// object.value
console.log("Brand: " + car.brand);
console.log("Model: " + car.model);
console.log("Year: " + car.year);

//Access object's function
// object.functionName()
car.description();

//** Deprecated?
//Object Constructor Function
//using "this" reserved word to refer to the function instance
function cars(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
}

//Generate new object with Object Constructor Function
//using "new" keyword to create a new instance of the object
// from the constructor function, passing the value for the object as the parameters.
var newCar = new cars("Tesla", "Cybertruck", 2023);
console.log(`*New car ${newCar}`);

//** RUN on terminal with 'node objects.js' **
