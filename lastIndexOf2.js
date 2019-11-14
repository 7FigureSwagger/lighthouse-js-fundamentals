function lastIndexOf(array, target){
  let temp = 0;
  array.forEach(function(element){
    //let temp = 0;
    //console.log(element, 'elemt');
    if(element === target){
      temp = element;
    }
    console.log(element, 'elemnt');
    console.log(temp, 'temp');
  })

  return temp;
};

console.log(lastIndexOf([0, 1, 4, 1, 2], 1), 'should be ' + 3);
