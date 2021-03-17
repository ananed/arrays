// 2.1 Sort an array
const unsortedList = [3, 4, 1, 5, 45, 9, 4];

// HINT: replace null with unsortedList.sort()
const sortedList = unsortedList.sort(function(a,b){
  return a - b;
});

// 2.2 Sort lists of numbers
const unsortedNumbers = [3, 4, 1, 5, 45, 9, 4];

function compareNumbers(a, b) {
  return a - b;
}

// HINT: replace null with unsortedList.sort()
const sortedNumbers = unsortedNumbers.sort(compareNumbers);

// 2.3 Filter an array with a custom filter function
const foodList = ["salami_pizza", "vegan_pasta", "pulled_pork", "vegan_burger"];

// Task: Modify this function to return only vegan food
function veganFilter(food) {
  return food.includes('vegan_')// TODO: Modify this line
}

const veganFood = foodList.filter(veganFilter); // custom filter function

// 2.4 Use forEach to iterate over an array
const carList = ["red_ford","blue_ford","green_ferrari","red_toyota","yellow_tesla",];
const redCarList = [];

// TODO: Modify this function to push the red cars in the redCarList
function extractRedCars(car) {
  if (car.includes("red_")) {
    redCarList.push(car);
  }
}

carList.forEach(extractRedCars);

// 2.5 Use .map to create a new array
const carsListMap = ["ford", "mercedes", "ferrari", "toyota", "tesla"];
let blueCarList = [];

// Task: Modify this function to add to all the cars the prefix "blue_"
function makeCarsBlue(car) {
  blueCarList = carsListMap.map(function (car) {
    return "blue_" + car;
  });
}

carsListMap.map(makeCarsBlue);

// 2.6 Use .reduce to create a new string from an array
const wordList = ["I", "am", "a", "rockstar", "!"];

// Task: Modify this function build a sentence
function sentenceBuilder(sentence, word) {
  return sentence + " " + word;
};

const sentence = wordList.reduce(sentenceBuilder, ""); // notice the second argument is the initial value

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
    one: sortedList,
    two: sortedNumbers,
    three: veganFood,
    four: redCarList,
    five: blueCarList,
    six: sentence,
  };
};
