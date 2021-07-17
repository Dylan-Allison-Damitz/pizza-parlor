// Business Logic

function Pizza(size, toppings) {
  this.toppings = toppings;
  this.size = size;
  this.price = 0;
};

Pizza.prototype.sizePrice = function(size) {
    if(this.size == "Children") {
      this.price +=12;
    } else if(this.size == "Personal") {
      this.price +=20;
    } else if(this.size == "DateNight") {
      this.price +=50;
    }
    
    if(this.toppings == "Bob") {
      this.price += 3;
    } else if(this.toppings == "Junebug") {
      this.price +=3;
    } else if(this.toppings == "Bocephus") {
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
    
    const userPizza = new Pizza(userSize, userToppings);
    userPizza.sizePrice()
    $("#output").text(userPizza.sizePrice());
  });
});

    