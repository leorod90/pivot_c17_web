
// ----------------
const loginBtn = document.getElementById("login-btn");


// const changePasswordRed = passwordId.style.borderColor = "red"
const messageEl = document.getElementById("message");
// -----------------
const LOGIN_USERNAME = "coty";
const LOGIN_PASSWORD = "123"

const login = () => {
    const usernameId = document.getElementById("username");
    const usernameInput = passwordId.value;
    const passwordId = document.getElementById("password");
    const passwordValue = passwordId.value; // THIS LINE ADD VALUE
    // LOGIN WHEN EMPTY
    if (usernameInput == "" || passwordInput == ""} {
        alert("Field cannot be empty!");
      }
    //   LOGIN WHEN WRONG INFO or the password is wrong
     else if (usernameInput !== 123) {
    const changeUsernameRed = usernameId.style.borderColor = "red"
}
// LOGIN WHEN CORRECT INFO
else if (usernameInput == LOGIN_USERNAME) {
    messageEl.innerText = "Welcome " + LOGIN_USERNAME;
}
console.log(usernameInput);}


loginBtn.addEventListener("click", login)
