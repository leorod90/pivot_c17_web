const listEl = document.getElementById("list");
const foodInputEl = document.getElementById("food-input");
const addFoodEl = document.getElementById("add-food");

const foods = [
  "Pizza", "Burger", "Sushi", "Pasta", "Tacos",
  "Ice Cream", "Fried Chicken", "Salad",
];

function showFood() {
  listEl.innerHTML = "";

  for (let index = 0; index < foods.length; index++) {
    // create an empty <li></li>
    let liEl = document.createElement("li");
    // fill the <li></li> with the current item
    liEl.innerText = foods[index];
    // add the <li></li> into the <ul></ul>
    listEl.appendChild(liEl);
  }
}

addFoodEl.addEventListener("click", function () {
  // push adds to the array
  foods.push(foodInputEl.value);
  showFood();
});

showFood();