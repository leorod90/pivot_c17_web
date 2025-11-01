const listEl = document.getElementById("list");
const foods = ["lasagna", "pizza",  "pasta"];
const addfoodElement = document.getElementById("add-food");
const foodInputElement = document.getElementById("Food-input");
console.log(foods[0]);
console.log(foods[1]);
console.log(foods[2]);



// notes for loop in javaScript 



    addfoodElement.addEventListener("click", function() {
        foods.push(foodInputElement.value);
        showFood();
    });

    function showFood (){
listEl.innerHTML = "";

for (let i = 0; i < foods.length; i++) {
  
  // create and empty <li></li>
 let liVar = document.createElement("li");
 liVar.innerText = foods[i];
 //add the <li></li> into the <ul></ul>
 listEl.appendChild(liVar);
}
    };
