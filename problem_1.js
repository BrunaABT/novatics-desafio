// 1. Array Manipulation

let input = [8, 5, 10, 5, 2, 4, -4, 3, 7, 0, 9];

let array_manipulation = (a) => {
  let b = [];

  // removing duplicates
  for (let i = 0; i < a.length; i++) {
    if (b.indexOf(a[i]) === -1) {
      // testing if type is number and if number is integer
      if (typeof a[i] == "number" && Number.isInteger(a[i]) == true) {
        b.push(a[i]);
      }
    }
  }

  // putting in numerical order with sort and compare
  let c = b.sort((d, e) => {
    return d - e;
  });

  return c;
};

console.log(array_manipulation(input));
