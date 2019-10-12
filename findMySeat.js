let row = 0;
let seatCount = 100;
let temp = 0;

for(let i = 0; i <= 20; i++) {
  temp = 0;
  for(let i = 0; i < seatCount; i++) {
    console.log(row + '-' + temp);
    temp += 1;
  };
  row += 1;
};