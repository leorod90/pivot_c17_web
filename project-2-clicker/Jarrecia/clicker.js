const h1Element = document.getElementById("header");
        const pElement = document.getElementById("paragraph");
        const btnElement = document.getElementById("button");
       


        h1Element.style.color = "red";
        pElement.style.color = "purple";

        btnElement.addEventListener("click", function () {
            document.getElementById("paragraph").innerHTML = "Hello World";
        });

        const countElement = document.getElementById("header");
        const countBtnElement = document.getElementById("paragraph");

        let countAmount = 0;

        btnElement.addEventListener("click", function () {
            document.getElementById("paragraph").innerHTML = countAmount+=1;
        });


        //Const userInput = prompt("What's your name?")
        //pElement.innertext="Hello World"