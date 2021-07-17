// Business Logic

function Pizza() {
  this.toppings = {};
  this.size = {};
  this.price = 0;
}

Pizza.prototype.totalPrice = function() {
    if(this.size === "Children") {
    this.price += 12;
    } else if(this.size === "Personal") {
    this.price += 20;
    } else if(this.size === "DateNight") {
    this.price += 50;
    } 
    if(this.toppings === "Bob") {
    this.price += 3;
    } ;
    if(this.toppings === "Junebug") {
    this.price += 5;
    }; 
    if(this.toppings === "Bocephus") {
    this.price += 7;
    };
  return this.price;
};

// UI Logic

$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    let userSize = $("input:radio[name=size]:checked").val();
    let userToppings = $("input:radio[name=toppings]:checked").val();
    let pizzaOrder = userSize + userToppings
    let userPizza = new Pizza(pizzaOrder);
    $("#output").text(userPizza.totalPrice());
    
  });
});

    