// 1. Array Manipulation

let input = [8, 5, 5, 10, 2, 4, -4, 3, 0, 9, "100", true, 8.9];

let arrayManipulation = (array) => {
  let sortedArray = [];

  // removing duplicates
  array.forEach((item) => {
    if (!sortedArray.includes(item)) {
      // testing if type is number and if number is integer
      if (Number.isInteger(item)) {
        sortedArray.push(item);
      }
    }
  });

  // putting in numerical order with sort and compare
  return sortedArray.sort((d, e) => d - e);
};
console.log(arrayManipulation(input));
