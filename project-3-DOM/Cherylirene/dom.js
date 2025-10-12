const button = document.getElementById("toggle");
const text = document.getElementById("text");

const addBtn = document.getElementById("addBtn");
const foodInput = document.getElementById("foodInput");
const list = document.getElementById("list");


let isRed = false;

button.addEventListener('click', function () {
    isRed = !isRed;
    console.log(isRed)
    if (isRed === true) {
        text.style.color = "red";
    } else {
        text.style.color = "black";
    }

});

let foods = [];

const foodsMemory = localStorage.getItem("foodsMemory");
if (foodsMemory) {
    foods = JSON.parse(foodsMemory);

}



// add a function to a button

addBtn.addEventListener('click', function () {
    if (foodInput.value === "") {
        alert("Please put something!");
        return; // stops the function here
    }
    foods.push(foodInput.value);
    foodInput.value = "";


    saveFoods();
    renderFoods();
});


// make our array into a list in html
function renderFoods() {
    list.innerHTML = "";

    for (let i = 0;
        i < foods.length;
        i++) {

        const element = foods[i];
        const li = document.createElement("li");
        li.textContent = element;
        list.appendChild(li);
        console.log(element);


    }
}
function saveFoods() {
    const jsonFoods = JSON.stringify(foods);
    localStorage.setItem("foodsMemory", jsonFoods);
}

renderFoods();

const clearBtn = document.getElementById("clear-storage");
console.log("Clear button found?", clearBtn);

clearBtn?.addEventListener("click", () => {
    console.log("Clearing...");
    localStorage.removeItem("foodsMemory");
    foods = [];
    list.innerHTML = "";
});
