
console.log("hello");

const color = "blue";
let number = 42;
//let; lets you reassign
//const you cant change

console.log("Color:", color);
console.log("Number:", number);


function sayHello(name) {
  console.log("Hello " + name);
}

sayHello("christal");
sayHello("kenise");
sayHello("demond");


function addTwo(num1, num2) {
  const sum = num1 + num2;
  console.log(sum);
}

// Use the function twice
addTwo(5, 3);   // This will log 8
addTwo(10, 7);  // This will log 17


const personOne = {
    name: "christal",
    age:34,
}

const personTwo = {
    name: "karen",
    age:24,
}


function printPerson (object) {
    console.log(object.name + " is  "+ object.age + " years old.")
}

printPerson(personOne) // console.log(personOne.age + "years old.")
printPerson(personTwo)// console.log(personTwo.age + "years old.")