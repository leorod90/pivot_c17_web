
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
if(foodsMemory){
    foods = JSON.parse(foodsMemory);

}




// add a function to a button

addBtn.addEventListener('click', function () {
    foods.push(foodInput.value);
    console.log(foods);
    saveFoods();
    renderFoods();
});


// make our array into a list in html
function renderFoods() {
    list.innerHTML = "";

    for (let i = 0;
        i < foods.length;
        i++) {

        const element = foods[i];//get the current element
        const li = document.createElement("li");//create a <li></li>
        li.textContent = element; //fill <li></li> with current element
        list.appendChild(li); // add to ul
        console.log(element);


    }
}
function saveFoods(){
    const jsonFoods = JSON.stringify(foods);
    localStorage.setItem("foodsMemory", jsonFoods);
}

renderFoods();