
let toppings = ["Pineapple", "Chicken", "Jalapeno", "Onion"];
let size = ["small", "medium", "large"];
let crust = ["thin", "thick", "deep pan"];


function greetCustomer () {
  return `Welcome to Pizza House! Our toppings are: ${toppings}!`;
}

function listToppings(pizzaToppings) {
  let myToppings;
  for (var i = 0; i < pizzaToppings.length; i++) {
    if (i == 0) {
      myToppings = pizzaToppings[i];
    } else if (i == pizzaToppings.length - 1) {
      myToppings = myToppings + " and " + pizzaToppings[i];
    } else {
      myToppings = myToppings + ", " + pizzaToppings[i];
    }
  }
  return `${myToppings}`;
}

function getPizzaOrder(orderSize, orderCrust, ...orderToppings) {
  if (orderToppings.length == 0) {
    return `One ${orderSize} ${orderCrust} crust cheese pizza coming up!`
  }
   for (let topping of orderToppings) {
    if (!toppings.includes(topping)) {
        return `These toppings are not available, please order again.`
      }
   }

  return `One ${orderSize} ${orderCrust} crust pizza with ${listToppings(orderToppings)} coming up!`;
}

function preparePizza(pizza) {
 return `Cooking pizza! Size: ${pizza[0]}, Crust: ${pizza[1]}, Toppings: ${listToppings(pizza[2])}.`;
  }

function servePizza(pizza) {
  if (pizza.toppings.length == 0) {
return `One cheese pizza coming up!`
  }
    return `Order up! Here's your ${pizza.size} ${pizza.crust} crust pizza with ${listToppings(pizza.toppings)}. Enjoy!`
}



console.log(greetCustomer(toppings));

console.log(getPizzaOrder(size[2],crust[2],toppings[1], toppings[2], toppings[0], toppings[3]));

console.log(getPizzaOrder(size[2],crust[2],toppings[1], toppings[2], 'abc'));

console.log(getPizzaOrder(size[2],crust[2]));

console.log(preparePizza([size[2], crust[2], [toppings[2], toppings[1], toppings[0]]]));

let pizza = {
  size: size[2],
  crust: crust[2],
  toppings: [toppings[0], toppings[1], toppings[2]]
};
console.log(servePizza(pizza));


