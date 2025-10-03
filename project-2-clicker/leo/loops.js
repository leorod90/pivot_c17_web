const listEl = document.getElementById("list");

const foods = [
  "Pizza", "Burger", "Sushi", "Pasta", "Tacos",
  "Ice Cream", "Fried Chicken", "Salad", 
];

// notes
for (let index = 0; index < foods.length; index++) {
  // create an empty <li></li>
  let liVar = document.createElement("li");
  liVar.innerText = foods[index];
}