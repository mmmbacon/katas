const urlEncode = function (text) {
  let formattedString = "";
  let textArray = text.split("");

  textArray.forEach(function (item, index, array) {
    if (item === " ") {
      if (index === 0 || index === array.length - 1) {
        textArray[index] = "";
      } else {
        textArray[index] = "%20";
      }
    }
  });

  formattedString = textArray.join("");

  return formattedString;

};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
