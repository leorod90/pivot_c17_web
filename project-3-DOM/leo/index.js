console.log("Hello");

const color = "red";
// color = "blue";
let number = 9;

function sayHello(parameter) {
   console.log("Hello, " + parameter + "!");
}

sayHello("Leo");
sayHello("Jasmine");

function addTwo(placeHolderOne, placeHolderTwo){
  console.log("placeHolderOne", placeHolderOne);
  console.log("placeHolderTwo", placeHolderTwo)
}

addTwo(11, 3); 

const personOne = {
  name: "leo",
  age: 35,
}

const personTwo = {
  name: "james",
  age: 13,
}

function printPerson(placeholder){
  console.log(placeholder.name + " is " + placeholder.age + " years old.");
}

printPerson(personOne) // console.log(personOne.name + " is " + personOne.age + " years old.")
printPerson(personTwo) // console.log(personTwo.name + " is " + personTwo.age + " years old.")