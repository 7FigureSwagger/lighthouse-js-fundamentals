/*
 * Programming Quiz: Factorials (4-7)
 */

// your code goes here
let numb = 12;
let solution = numb;
for(let i = numb; i > 1; i--){
    
    solution = (solution * (numb - 1));
    console.log(solution);
    numb--;
    /*console.log('\"' + i + '\"');*/
};
console.log(solution);