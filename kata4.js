const instructorWithLongestName = function (instructors) {

  let longest = {};
  let max = 0;

  instructors.forEach(function (item, index, array) {
    if (item.name.length > max) {
      max = item.name.length;
      longest = item;
    }
  })

  return longest;
};

console.log(instructorWithLongestName([
  { name: "Samuel", course: "iOS" },
  { name: "Jeremiah", course: "Web" },
  { name: "Ophilia", course: "Web" },
  { name: "Donald", course: "Web" }
]));

console.log(instructorWithLongestName([
  { name: "Matthew", course: "Web" },
  { name: "David", course: "iOS" },
  { name: "Domascus", course: "Web" }
]));
