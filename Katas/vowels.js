let numberOfVowels = function(data) {
  // Put your solution here
  let temp = data.split('');
  let counter = 0;
  for(let i = 0; i < temp.length; i++){
    if(temp[i] === 'a' || temp[i] === 'e' || temp[i] === 'i' || temp[i] === 'o' || temp[i] === 'u'){
      //console.log(temp[i]);
      counter++;
    }
  }
  return counter;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));