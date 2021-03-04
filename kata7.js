const checkAir = function (samples, threshold) {

  let factor = 0;
  let sum = 0;

  samples.forEach(function (item, index, array) {
    if (item === 'dirty') {
      sum++;
    }
  });

  factor = (sum / samples.length);

  return factor >= threshold ? "Polluted" : "Clean";
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))
