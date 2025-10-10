const button = document.getElementById("toggle");
const text = document.getElementById("text");
// -------
const foodInput = document.getElementById("foodInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");

// state, stores information
let isRed = false;

button.addEventListener('click', function () {
  isRed = !isRed; // '!' mean opposite

  if (isRed === true) { // (isRed) 
    text.style.color = "red";
  } else {
    // if its false
    text.style.color = "black";
  }
});

// TO DO LIST

// state
let foods = [];
// get and check if foodsMemory exist
const foodsMemory = localStorage.getItem("foodsMemory");
if (foodsMemory) {
  foods = JSON.parse(foodsMemory);
}

// add a function to a button
addBtn.addEventListener('click', function () {
  foods.push(foodInput.value);
  saveFoods();
  renderFoods();
});

// make our array into a list in html
function renderFoods() {
  list.innerHTML = "";

  for (
    let position = 0;
    position < foods.length;
    position++
  ) {
    const element = foods[position]; // get the current element
    const li = document.createElement("li"); // create a <li></li>
    li.textContent = element; // fill <li></li> with current element
    list.appendChild(li); // add to ul
  }
}

function saveFoods(){
  const jsonFoods = JSON.stringify(foods);
  localStorage.setItem("foodsMemory", jsonFoods);
}

renderFoods();