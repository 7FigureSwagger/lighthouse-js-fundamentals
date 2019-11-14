const instructorWithLongestName = function(instructors) {
  // Put your solution here
  //console.log(Object.keys(instructors));
  //instructors.sort();
  let temp = [];
  for(let i = 0; i < instructors.length; i++){
    //console.log(instructors[i].name.length);
    temp.push(instructors[i].name.length);
  }
  let targetIndex = temp.indexOf(Math.max(...temp));
  //return targetIndex;
  return instructors[targetIndex].name;

};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));