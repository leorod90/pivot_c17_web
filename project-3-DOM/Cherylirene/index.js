console.log("hello");

const color = "yellow";
let number = 8;


function sayHello(name) {
    console.log("Hello" + name);
}

sayHello("Ceecee");

function addTwo(number1, number2) {
    console.log(number1 + number2);
};

addTwo(20, 5);
addTwo(5, 7);

const personOne = {
    name: "leo",
    age: 35,
}


const personTwo = {
    name: "Michael",
    age: 32,
}


function printPerson(object) {
    console.log(object.name + " is " + object.age + " years old.");
}
 printPerson(personOne) 
printPerson(personTwo)
