const password = "123";


let user = localStorage.getItem("user");
console.log("user", user);

if (user !==null) {
    alert("you are logged in!");
    
} else{
const userName = prompt("What is your name?")

localStorage.setItem("user", "userName");
}