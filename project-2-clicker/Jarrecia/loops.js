const listEl = document.getElementById("list")
const FoodInputEl = document.getElementById("add-food")
const addfoodEl = document.getElementById("add-food")
const foods = [ "Pizza", "Burger", "Pasta" ];







function showfood() {
    for (let i = 0; i < foods.length; i++) {
  let liEl = document.createElement("li");
  liEl.innerText =foods[i];
  listEl.appendChild(liEl);
}
  // code to be executed
}
showfood()

element.addEventListener("click", myFunction);