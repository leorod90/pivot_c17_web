const button = document.getElementById("toggle");
const text = document.getElementById("text");
const addBtn = document.getElementById("Add");
const foodInput = document.getElementById("foodInput");
const list = document.getElementById("list");

let isRed = false;

button.addEventListener('click', function () {
    isRed = !isRed;
    console.log(isRed)
    if (isRed) {
        text.style.color = "red";
    } else {
        text.style.color = "black";

    }
});

let foods = []; // Or an existing array like: let myArray = ["item1", "item2"];

  addBtn.addEventListener('click', function () {


    foods.push(foodInput.value)

});

function renderFoods() {
    list.innerHTML = "";

    for (let i = 0; i < foods.length; i++

    ) {
        const element = foods[i];
        const li = document.createElement("li");
        li.textContent = element;
        list.appendChild(li);

    }
}
