let howManyHundreds = function (num) {
  let temp;
  if(num > 99) {
    //console.log(num);
    num = num - (num % 100);
    num /= 100;
    return num;
  } else {
    temp = 0;
    return temp;
  };
};

//console.log(howManyHundreds(10000));

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);