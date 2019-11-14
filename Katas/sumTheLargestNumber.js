let sumLargestNumbers = function(data) {
  // Put your solution here
  if (Array.isArray(data)) {
    let temp = 0;
    for (let i = 0; i < 2; i++) {
      temp += Math.max(...data);
      data.splice(data.indexOf(temp), 1);
    }

    return temp;
  }
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
