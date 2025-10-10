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
        text.style.color = "blue";

    }
});

let foods = []; // Or an existing array like: let myArray = ["item1", "item2"];

const foodsMemory = localStorage.getItem("foodsMemory"); {
    foods = JSON.parse(foodsMemory);
}

addBtn.addEventListener('click', function () {
    foods.push(foodInput.value);
    renderFoods();
    saveFoods();
    

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

    function saveFoods() {
        const jsonFoods = JSON.stringfly(foods);
        localStorage.setItem("foodsMemory", jsonFoods);
    }
}

renderFoods();
