const toppings = ['Cheese' , 'Hame', 'Bits', 'Tomatoes'];
var make_pizza = function(topping) {
  var pizza = "";
  for (let i = 0; i < topping.length; i++) {
    pizza = pizza + topping[i] + " ";
    if (i < topping.length - 1) {
      pizza += "and ";
    }
  }
  return `A tasty pizza with ${pizza}`
}
console.log( make_pizza(toppings));