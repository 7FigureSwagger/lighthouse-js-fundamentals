const conditionalSum = function(values, condition) {
  // Your code here
  if (condition === "even") {
    let temp = values.filter(value => value % 2 == 0);
    let tempTotal = 0;
    for(let i = 0; i < temp.length; i++){
      tempTotal += temp[i];
    }
    return tempTotal;
  } else if (condition === "odd") {
    let temp = values.filter(value => value % 2 != 0);
    let tempTotal = 0;
    for(let i = 0; i < temp.length; i++){
      tempTotal += temp[i];
    }
    return tempTotal;
  } else {
    console.log("Condition is not valid.");
  }
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
