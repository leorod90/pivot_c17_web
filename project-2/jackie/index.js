
// ----------------
const loginBtn = document.getElementById("login-btn");

const passwordId = document.getElementById("password");
const passwordValue = passwordId.value; // THIS LINE ADD VALUE
// const changePasswordRed = passwordId.style.borderColor = "red"
const messageEl = document.getElementById("message");
// -----------------
const LOGIN_USERNAME = "leo";
const LOGIN_PASSWORD = "123"

const login = () => {
    const usernameId = document.getElementById("username");
    const usernameInput = usernameId.value;
    const passwordId = document.getElementById("password");
    const passwordInput = passwordId.value;

    // IF USERINPUT IS EMPTY OR PASSWORD INPUT IS EMPTY
    if (usernameInput == "" || passwordInput == "") {
        alert("Field cannot be empty!");
    }
    // IF USERNAME INPUT IS EMPTY OR PASSWORD INPUT IS WRONG
    else if (usernameInput !== LOGIN_USERNAME || passwordInput !== LOGIN_PASSWORD) {
        if (usernameInput !== LOGIN_USERNAME) {
            const changeUsernameRed = usernameId.style.borderColor = "red"
        }
        if (passwordInput !== LOGIN_PASSWORD) {

        }
    }


    // LOGIN WHEN CORRECT INFO
    else if (usernameInput == LOGIN_USERNAME) {
        messageEl.innerText = "Welcome " + LOGIN_USERNAME;
    }

    console.log(usernameInput);
}


loginBtn.addEventListener("click", login)
