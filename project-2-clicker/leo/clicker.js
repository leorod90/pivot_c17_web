   const h1Element = document.getElementById("header");
    const pElement = document.getElementById("paragraph");
    const btnElement = document.getElementById("button");

    h1Element.style.color = "red";
    pElement.style.color = "green";

    btnElement.addEventListener("click", function () {
      document.getElementById("paragraph").innerHTML = "Hello World";
    });

    // --------------
    const countElement = document.getElementById("count");
    const countBtnElement = document.getElementById("count-btn");

    let countAmount = 0;

    countBtnElement.addEventListener("click", function () {
      countAmount +=  1;
      document.getElementById("count").innerHTML = countAmount;
    });
    // const userInput = prompt("What is your name?");
    // pElement.innerText = "Hello " + userInput;