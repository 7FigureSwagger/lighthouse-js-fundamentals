
let studentAge = 12;

const whichSchool = function(age) {
  if(age < 13){
    return 'Elementary School';
  } else if(age >= 13 && age <= 18) {
    return 'High School';
  } else {
    return 'Lighthouse Labs';
  }
}

let schoolChoice = whichSchool(studentAge);
console.log(schoolChoice);