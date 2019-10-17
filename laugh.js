/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh = function(num){
  let lol = '';
  for(let i = 0; i < num; i++){
    lol += 'ha';
  };
  return lol + '!';
}

console.log(laugh(10));
