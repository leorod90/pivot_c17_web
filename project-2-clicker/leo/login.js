const emailEl = document.getElementById("email");
const passwordEl = document.getElementById("password");
const loginEl = document.getElementById("login-btn");
const welcomeEl = document.getElementById("welcome-txt");

loginEl.addEventListener("click", function(){
  if (emailEl.value == "test" && passwordEl.value == "123") {
    welcomeEl.innerText = "Hello Leo";
  } else {
    alert("wrong information")
  }

});

// function() {}