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
