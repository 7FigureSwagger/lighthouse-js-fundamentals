/*
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length
function buildTriangle(num){
  let lines = num;
  function makeLine(length) {
    var line = "";
      for (var j = 1; j <= length; j++) { 
        line += "* ";
        console.log(line);
      };
      return line + "\n";  
  };
  //console.log(lines);
  let outPut = makeLine(lines);
  return outPut;
};
// your code goes here.  Make sure you call makeLine() in your own code.


// test your code by uncommenting the following line
console.log(buildTriangle(10));