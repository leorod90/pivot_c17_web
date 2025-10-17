const emailEl = document.getElementById("email");
const passwordEl = document.getElementById("password");
const loginEl = document.getElementById("login-btn");
const welcomeEl = document.getElementById("welcome-txt");


loginEl.getElementById("login-btn").addEventListener("click", function () {
    console.log(emailEl.value);
    if (emailEl.value == "test") {
        welcomeEl.innerText = "Hello Reci";
        //  block of code to be executed if the condition is true
    } else {
        alert("wrong password")
    }
})
//function() {}