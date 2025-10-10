// deletes ALL storage
localStorage.clear();
// removes ONE item from storage
localStorage.removeItem('yourKeyName');

// this checks if stored in browser
let user = localStorage.getItem("yourKeyName");

console.log("user", user);

// check if we are logged in or not
if (user) {
  alert("you are logged in!");
} else {
  const userName = prompt("What is your name?");

  localStorage.setItem("yourKeyName", userName);
}

// COME BACK AT 7