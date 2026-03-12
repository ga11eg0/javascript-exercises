const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	result = arr.reduce((total,value) => total+value,0);
  return result;
};

const multiply = function(arr) {
  result = arr.reduce((total,value) => total*= value,1);
  return result;
};

const power = function(base,expo) {
	return base**expo;
};

const factorial = function(number) {
	facto = 1;
  for (i = 1; i <= number;i++){
    facto *= i;
  };
  return facto;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
