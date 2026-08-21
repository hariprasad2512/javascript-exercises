const convertToCelsius = function(tempInFahrenheit) {
  return Number(((tempInFahrenheit - 32) * (5/9)).toFixed(1));
};

const convertToFahrenheit = function(tempInCelsius) {
  return Number(((9/5) * tempInCelsius + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
