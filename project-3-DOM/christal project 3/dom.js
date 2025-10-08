const button = document.getElementById("toggle");
const text = document.getElementById("text");

const foodIput = document.getElementById("foodInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");


let isRed = false;

button.addEventListener('click', function(){
    isRed = !isRed; // ! means opposite
    if(isRed === true) {
       text.style.color = "black";
    }
});

let foods = [];

addBtn.addEventListener('click', function() {
  foods.push(foodInput.value)
  console.log(foods)
  renderFoods()
});

function renderFoods() { 
    list.innerHTML ="";
    
    for (
     let position = 0;
     position < foodIput.clientHeight;
     posotion++
  ) {
    const element = foods [position];
    const li = document.createElement("li");
    li.textContent = element;
    list.appendChild(li);
  }
}