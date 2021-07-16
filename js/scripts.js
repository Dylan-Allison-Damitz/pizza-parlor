// Business Logic

function Pizza() {
  this.toppings = {};
  this.size = {};
  this.price = 0;
}

Pizza.prototype.totalPrice = function(size) {
  if(this.size === "Children") {
  this.price += 12;
} if(this.size === "Personal") {
  this.price += 20;
} if(this.size === "DateNight") {
  this.price += 50;
} if(this.toppings === "Bob") {
  this.price += 3;
} if(this.toppings === "Junebug") {
  this.price += 5;
} if(this.toppings === "Bocephus") {
  this.price += 7;
  }
  return this.price
}

// UI Logic
let completePizza = new Pizza (userToppings, userSize);

$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    const userToppings = $("input:radio[name=toppings]:checked").val();
    const userSize = $("input:radio[name=size]:checked").val();
  });
})