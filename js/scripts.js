function Pizza() {
  this.toppings = {};
  this.size = {};
  this.price = 0;
}

Pizza.prototype.pieSize = function(size) {
if(this.size === "Children") {
  (this.price += 12);
} else if(this.size === "Personal") {
  (this.price += 20);
} else if(this.size === "DateNight") {
  (this.price += 50);
  }
  return console.log(this.price)
};
