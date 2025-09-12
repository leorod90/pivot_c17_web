// ----------------
// const changeUsernameRed = usernameId.style.borderColor = "red"
const passwordId = document.getElementById("password");
const passwordValue = passwordId.value;
// const changePasswordRed = passwordId.style.borderColor = "red"
const messageEl = document.getElementById("message");
// -----------------
const LOGIN_USERNAME = "Ceecee";
const LOGIN_PASSWORD = "abc";
function login() {
    const usernameId = document.getElementById("username");
    const usernameInput = usernameId.value;
    console.log(username);
    const passwordId = document.getElementById("password");
    const passwordInput = passwordId.value;

    //IF USERNAME INPUT IS EMPTY OR PASSWORD INPUT IS EMPTY
    if (usernameInput == "" || passwordInput == "") {
        alert("Field cannot be empty!");
    }
    //IF USERNAME INPUT IS WRONG OR PASSWORD INPUT IS WRONG
    else if (usernameInput !== LOGIN_USERNAME || passwordInput !== "") {
        if (usernameId !== LOGIN_USERNAME) {
            const changeUsernameRed = usernameId.style.borderColor = "red"
        }
        if (passwordInput !== LOGIN_PASSWORD) {
            const changePasswordRed = passwordId.style.borderColor = "red"
        }
    }

    //LOGIN WHEN CORRECT INFO
    else if (LOGIN_USERNAME == usernameValue) {
        messageEl.innerText = "Welcome " + LOGIN_USERNAME;
    }
    console.log(usernameInput);
}
