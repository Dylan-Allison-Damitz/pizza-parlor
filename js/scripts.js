// Business Logic

function Pizza(size, toppings) {
  this.toppings = toppings;
  this.size = size;
  this.price = 0;
};

Pizza.prototype.userPrice = function(size, toppings) {
    if(this.size === "Children's") {
      this.price += 23;
    } else if(this.size === "Personal") {
      this.price += 28;
    } else if(this.size === "Date Night") {
      this.price += 50;
    }
    
    if(this.toppings === "Greasy Bob's swamp souffle") {
      this.price += 10;
    } else if(this.toppings === "Aunt Junebug's Louisiana lizard pie") {
      this.price += 12;
    } else if(this.toppings === "Cousin Bocephus' Dirty Dessert Pie") {
      this.price += 15;
    };
  return this.price;
};

// UI Logic

$(document).ready(function() {
  $("form#orderPie").submit(function(event) {
    event.preventDefault();
    let userSize = $("input:radio[name=size]:checked").val();
    let userToppings = $("input:radio[name=toppings]:checked").val();
    const userPizza = new Pizza(userSize, userToppings);
    $("#output").text(userPizza.userPrice());
    $("#output2").text($("input:radio[name=size]:checked").val());
    $("#output3").text($("input:radio[name=toppings]:checked").val());
  });
});