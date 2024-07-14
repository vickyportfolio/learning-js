// let message = 'hello world';
// let message = 'hai world';
//we can't reuse the variable same using let but var will overwrite the value:
var message = 'hello world';
var message = 'hai world';
console.log(message, '=> hai world');

output = 'output';
console.log('globally hoisted', output);

// if we use let instead of var greetings it will throw reference error:
console.log(
  'undefined if no value provided without using variable name',
  greetings
);
var greetings;

/* 
let checkVAR = 'yes';
var checkVAR = 'no'; 
it will throw syntax error
*/

/*Rules: 
name meaningful human readable name for variable; 
don't use starting number, symbols other than $, _  
bad example:
let 113test;
let my-name;
*/

var isData = 'veliya';
if (true) {
  var isData = 'ifveliya';
}
function sayHi() {
  var isData = 'sayhiveliya';
  if (true) {
    //  let isData = 'sayhiifveliya';
    var isData = 'null';
  }
  console.log(isData);
}
sayHi();
console.log(isData);
