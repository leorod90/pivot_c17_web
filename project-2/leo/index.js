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

  // LOGIN WHEN EMPTY
  if (usernameInput == "") {
    alert("Field cannot be empty!");
  }
  // LOGIN WHEN WRONG INFO
  else if (usernameInput !== LOGIN_USERNAME) {
    const changeUsernameRed = usernameId.style.borderColor = "red"
  }
  // LOGIN WHEN CORRECT INFO
  else if (usernameInput == LOGIN_USERNAME) {
    messageEl.innerText = "Welcome " + LOGIN_USERNAME;
  }

  console.log(usernameInput);
}
 
loginBtn.addEventListener("click", login)