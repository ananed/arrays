// 1.1 Create a new EMPTY array
const emptyList = []; 

// 1.2 Create a list of different dishes
// HINT: The list should contain at least the folowwing five dishes
// "Pizza", "Burger", "Pasta", "Salad", "Rice&Tofu"
const foodList = ["Pizza","Burger","Pasta","Salad","Rice&Tofu"]; // change this line

// 1.3 Use push to add elements to an array
// HINT: Push adds elements at the end of the array
const veganList = [];


// Example:
veganList.push("Salad");

// Task 1.3.2: Push into the veganList the folowing: "TofuBurger"

veganList.push("TofuBurger");

// Task 1.3.1: Push into the veganList the folowing: "Vegan Pizza" and "Vegan Cheese Plate"

veganList.push("Vegan Pizza","Vegan Cheese Plate");

// 1.4 Use pop to remove elements from an array
// HINT: Push adds elements at the end of the array
const carList = ["BMW", "Mercedes", "Toyota"]; // change this line
carList.pop("Toyota");
// Remove the last car by calling: carList.pop()

// 1.5 Combine two array with concat
const americanCars = ["Ford", "Tesla"];
const germanCars = ["BMW", "Mercedes"];

americanCars.concat(germanCars);
// Use concat to add the cars to the full car list
const fullCarList = americanCars.concat(germanCars); // americanCars.concat(...)

// HINT: The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

// 1.6 Combine three arrays with concat
const italianFood = ["Pizza", "Pasta"];
const germanFood = ["Wrust", "Sauerbraten"];
const spanishFood = ["Tortilla", "Paella"];
const combinadaLista=italianFood.concat(germanFood);
combinadaLista.concat(spanishFood);

// TODO: Build the full european food list
const europeanFood = combinadaLista.concat(spanishFood);; // italianFood.concat( ... )

// ------- THE END ------------------------------------
/*
   _____          _   __          ___ _   _     _____                            
  / ____|        | |  \ \        / (_) | | |   |  __ \                           
 | |     ___   __| | __\ \  /\  / / _| |_| |__ | |  | |_ __ __ _  __ _  ___  ___ 
 | |    / _ \ / _` |/ _ \ \/  \/ / | | __| '_ \| |  | | '__/ _` |/ _` |/ _ \/ __|
 | |___| (_) | (_| |  __/\  /\  /  | | |_| | | | |__| | | | (_| | (_| | (_) \__ \
  \_____\___/ \__,_|\___| \/  \/   |_|\__|_| |_|_____/|_|  \__,_|\__, |\___/|___/
                                                                  __/ |          
                                                                 |___/           
*/

// DO NOT TOUCH THIS CODE
module.exports = function testWrapper() {
  return {
    one: emptyList,
    two: foodList,
    three: veganList,
    four: carList,
    five: fullCarList,
    six: europeanFood,
  };
};
