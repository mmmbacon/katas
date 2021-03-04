const numberOfVowels = function (data) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let sum = 0;
  let array = data.split("");

  array.forEach(function (item, index, array) {
    vowels.forEach(function (i, x, a) {
      if (item === i) {
        sum++;
      }
    })
  });

  return sum;

};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
