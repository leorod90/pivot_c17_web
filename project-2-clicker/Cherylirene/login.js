const EmailElement = document.getElementById("Email");

const passwordElement = document.getElementById("password");

const loginElement = document.getElementById("login-btn");

const WelcomeElement = document.getElementById("welcome-txt");

document.getElementById("login-btn").addEventListener("click", function () {
    console.log(EmailElement.value);
let password = "abc";
    
    if (EmailElement.value == "cherylirenecooper@gmail.com" && passwordElement.value  == "abc") {
        WelcomeElement.innerText = "Hello Cherylirene"; 
    } else {
        alert("Wrong information");
    }

    
});