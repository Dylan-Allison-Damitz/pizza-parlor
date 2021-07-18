# Uncle Maynard's Bayou Pie
A simple website for Uncle Maynard's Bayou Pie that allows the user to build a custom pizza by selecting toppings and size
#### By _**Dylan Allison-Damitz**_

## Technologies Used

* HTML
* Bootstrap
* Object-oriented JavaScript
* JQuery

## Description

This website shows off the power of object-oriented JavaScript using Uncle Maynard's Bayou Pie as the medium. This site allows a user to select between three different "pie setups," each setup delivering a selection of choice Bayou ingredients sure to please the entire family. The user also has the ability to choose their size (I recommend the "Date Night" size). This project uses object-oriented JavaScript, complete with a constructor and a prototype method within the code. 

## Setup/Installation Requirements

* Navigate to GitHub.com and search for profile "Dylan-Allison-Damitz"
* Once you've navigated to "Dylan-Allison-Damitz" select repository named "pizza-parlor"
* Inside of "pizza-parlor," click on the green "CODE" badge on the right side of the page and then copy the code by clicking on the clipboard icon
* Once the code has been copied to your clipboard, navigate to your terminal and type command "cd ~" to return to your local drive. Next, navigate to your desktop by typing "cd desktop"
* Once succesfully at your desktop in command terminal, you'll clone a copy of the project to your desktop by typing in terminal "git clone" and then copying https://github.com/Dylan-Allison-Damitz/pizza-parlor.git from your clipboard exactly one space after "git clone" in your command terminal
* When your terminal command line says "git clone https://github.com/Dylan-Allison-Damitz/pizza-parlor.git" hit enter to copy the project to your desktop
* Navigate to your desktop and click on the folder titled "pizza-parlor" to open up the directory. Double-click on the file titled "index.html," which will launch the portfolio webpage on your default browser

## Testing Process

*Describe: Pizza();

*Test: "It should contain attributes/values for size, toppings, and price"
Expect: Pizza() {
  this.toppings = toppings;
  this.size = size;
  this.price = 0;
}

*Test: "Pizza should contain a prototype method to calculate user price based on toppings and size"
Expect: Pizza.prototype.userPrice = function(toppings, size)

*Test: "The userPrice prototype should add preset values to this.price based on user selection"
Expect: (userPrice("Childrens").toEqual(this.price += 23))

*Test: "userPrice should return the updated selections to this.price"
Expect: (userPrice("Childrens", "Greasy Bob's swamp souffle").toEqual(this.price 33))

## Known Bugs

* No known bugs at this time

## License

MIT

Copyright (c) 2021 Dylan Allison-Damitz

## Contact Information

dylandamitz@gmail.com