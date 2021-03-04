const whereCanIPark = function (spots, vehicle) {

  let x = 0;
  let y = 0;
  let coord = false;

  switch (vehicle) {
    case 'regular':
      spots.forEach(function (item) {
        item.forEach(function (item) {
          if (coord === false && (item === 'R')) {
            coord = [x, y];
          }
          x++;
        });
        x = 0;
        y++;
      });
      break;
    case 'small':
      spots.forEach(function (item) {
        item.forEach(function (item) {
          if (coord === false && (item === 'R' || item === 'S')) {
            coord = [x, y];
          }
          x++;
        });
        x = 0;
        y++;
      });
      break;
    case 'motorcycle':
      spots.forEach(function (item) {
        item.forEach(function (item) {
          if (coord === false && (item === 'R' || item === 'S' || item === 'M')) {
            coord = [x, y];
          }
          x++;
        });
        x = 0;
        y++;
      });
      break;
    default:
      coord = false;
      break;
  }

  return coord;

};

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))
