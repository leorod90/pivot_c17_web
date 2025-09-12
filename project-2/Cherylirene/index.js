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


    //LOGIN WHEN EMPTY
    if (usernameInput == "") {
        alert("Field cannot be empty!");
    }
    //LOGIN WHEN WRONG INFO
    else if (usernameInput !== LOGIN_USERNAME) {
        const changeUsernameRed = usernameId.style.borderColor = "red"
    }

    //LOGIN WHEN CORRECT INFO
    else if (LOGIN_USERNAME == usernameValue) {
        messageEl.innerText = "Welcome " + LOGIN_USERNAME;
    }
    console.log(usernameInput);
}
