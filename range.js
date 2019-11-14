let range = function(start, end, step) {
  let temp = [];
  if (start != "undefined" && end != "undefined" && step != "undefined") {
    if (start >= 0) {
      if (step > 0) {
        if (end >= start) {
          let i = start;
          while (i <= end) {
            temp.push(i);
            i += step;
          }
          return temp;
        } else {
          return temp;
        }
      }
    } else {
      return temp;
    }
  } else {
    return temp;
  }
};

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
