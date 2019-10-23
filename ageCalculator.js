
let ageCalculator = function (name, yearOfBirth, currentYear){
  let temp = (currentYear - yearOfBirth);
  return name + ' is '+ temp + ' years old.';
};


console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));
console.log(ageCalculator("Ali", 1992, 2019));