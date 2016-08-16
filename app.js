/* Design a guessing game about you that involves FIVE yes/no questions. Be creative and fun and whimsical. Or not. It's up to you! It's your project!
•The questions in the guessing game must require a mix of yes/no answers, and user input must accept either y/n or yes/no responses, with either  .toUpperCase()  or  .toLowerCase()  used to validate the user input and accommodate users entering all-caps Y/N or YES/NO answers, too.
•Useful and descriptive  console.log()  messages in the JS are well written and correctly displaying to the browser console for each question of the guessing game.
•Use CSS to style your page as you see fit, to the level of abilities in CSS that you currently have
•Add, Commit, Push process is being followed; evident in GitHub that commits are made regularly, and with good commit messages.
Remember to submit this link on Canvas so that your work can be graded */

'use strict';
var user = prompt('Hello there!! Would you like to play a game today?');
console.log('Are you going to play the game ', +user);
if(user.toUpperCase === 'Y' || user === 'y' || user.toUpperCase === 'YES' || user === 'yes'){
  alert('let\'s play a guessing game!');
  var num = prompt('It is a number guessing game! Tell me a maximum no I can guess for you!');
  console.log('Guessed number = ', +num);

  if(isNaN(num)){
    alert('Input is not a number');
    num = prompt('What is the maximum number I can guess for you?');
  }else{
    num = parseInt(num);

    console.log('number is: ', num);

    var randomnumber = Math.floor((Math.random() * num) + 1);
    var guessedNum = prompt('What is the number You have only one guess!!');
    console.log('guessed number= ', +guessedNum);
    if(randomnumber != guessedNum){
      alert('Sorry Number is ' + randomnumber + ' !!');
    }else if (randomnumber === guessedNum){
      alert('Yeee you are BOND of nuber guessing game!! good job!');
    };
  };
} else if (user.toUpperCase === 'N' || user === 'n' || user.toUpperCase === 'NO' || user === 'no') {
  alert('Let me know when you are interested to play.. see you soon!!');
}else{
  alert('Not a defined input!!');
};
