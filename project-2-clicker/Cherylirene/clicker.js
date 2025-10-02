 const h1Element = document.getElementById("header");
      const btnElement = document.getElementById("button");
      const pElement = document.getElementById("paragraph");
      const countElement = document.getElementById("count");
       const countBtnElement = document.getElementById("count-btn");
       
       h1Element.style.color = "red";
 pElement.style.color = "green";
btnElement.addEventListener("click", myFunction);
countBtnElement.addEventListener("click", myFunction);




 
let countAmount = 0;

function myFunction() {
  document.getElementById("paragraph").innerHTML = "Hello World";
document.getElementById("count").innerHTML = countAmount;
countAmount += 1;}

        // const pElement = document.getElementById("paragraph");
        
        // const userInput = prompt("What is your name?");
        // pElement.innerText = "Hello" + userInput;
       