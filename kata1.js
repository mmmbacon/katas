const sumLargestNumbers = function (data) {

  let max = 0;
  let second = 0;
  
  if (data.length >= 2) {
    data.forEach(function (item, index, array) {

      if (item > max) {
        second = max;
        max = item;
      }
    });
    return second + max;
  } else {
    return null;
  }

};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
