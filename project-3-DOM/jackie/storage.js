// deletes ALL storage
localStorage.clear();
// removes ONE item from storage
localStorage.removeItem('yourKeyName');

const password = "123";

// this checks if stored in browser
let user = localStorage.getItem("item");

console.log("user", user);

// check if we are logged in or not 
if (user) {
    alert("you are logged in!");

} else {
    const name = prompt("what is your name?");
    localStorage.setItem("yourKeyName", username);
}



