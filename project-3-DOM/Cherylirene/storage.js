//deletes ALL storage
localStorage.clear();
const password = "123";

let user = 
localStorage.getItem("user");
console.log("user", user);

// check if we are logged in or not
//if else equals options

if (user) {
    alert("you are logged in!");
} else {
   const name = prompt("What is your name?")

    localStorage.setItem("yourKeyName", Username);

}