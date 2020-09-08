const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

//Put your Javscript code here:

console.log(vegetarian, hawaiian, pepperoni, pizzaPrice)

alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian}, ${pepperoni}.`)

let orderName = prompt("Enter the name of the pizza you want to order today.")

if (orderName !== vegetarian && orderName !== hawaiian && orderName !== pepperoni) {
  alert("Select a pizza from the menu")
  orderName = prompt("Enter the name of the pizza you want to order today.")
}

const orderQuantity = prompt(`How many of ${orderName} do you want?`)

const orderTotal = orderQuantity * pizzaPrice

let cookingTime

if (orderQuantity <= 2) {
  cookingTime = "10 minutes"
} else if (orderQuantity <= 5) {
  cookingTime = "15 minutes"
} else {
  cookingTime = "20 minutes"
}

alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The pizzas will take ${cookingTime}.`)

