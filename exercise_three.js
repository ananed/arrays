// 3.1 Sort products based on price
const productList = [
  {
    name: "Milk",
    price: 3
  },
  {
    name: "Banana",
    price: 14
  },
  {
    name: "Muffin",
    price: 9
  }
];

// TODO: sort the product list by price

const sortedProductList = productList.sort(function (a, b) {
  return (a.price) - (b.price);
});

// 3.2 Filter cars based on color
// TODO: Filter the red cars using a customer filter function
const carList = [
  {
    name: "Mercedes",
    color: "BLUE",
  },
  {
    name: "BMW",
    color: "RED",
  },
  {
    name: "Tesla",
    color: "BLACK",
  },
  {
    name: "Mercedes",
    color: "RED",
  },
];

const redCarList = carList.filter(function(car){
   return car.color.includes('RED');
}); // TODO: ge the red cars from all the cars list


// 3.3 Filter a range of numbers
// TODO: Filter numbers based on a range
const numberList = [1, 3, 45, 67, 75, 3, 8, 93, 4, 45, 18];

// WARNING: Do not change the function name
function rangeFilter(arr, a, b) {
  const fList = arr.filter(function (num) {
  return a <= num && num <= b;
  }); 
  return fList;// add the filtering logic here
}

const filteredList = rangeFilter(numberList, 10, 20); // should return: [18]
const anotherList = rangeFilter(numberList, 3, 80); 

// 3.4 Sum all the numbers in an array
const sumNumberList = [1, 3, 45, 67, 75, 3, 8, 93, 4, 45, 18];

// WARNING: Do not change the function name
function sumFunction(sum, element) {
  return sum + element;
}

const sum = sumNumberList.reduce(sumFunction, 0);



// ---------------------------------- THE END ------------------------------------
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
    one: sortedProductList,
    two: redCarList,
    three: rangeFilter,
    four: sumFunction
  };
};
