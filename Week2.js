let name = "Pizza Place";
let numberOfToppings = 10;
console.log(typeof name, typeof numberOfToppings);
console.log(name, numberOfToppings);
let review = console.log(
  `I love ${name} as it offers ${numberOfToppings} toppings.`
);

if (numberOfToppings < 10) {
  console.log("Quality not quantity.");
} else {
  console.log("A whole lot of pizza.");
}

for (numberOfToppings = 0; numberOfToppings <= 10; numberOfToppings += 2) {
  console.log(numberOfToppings);
}