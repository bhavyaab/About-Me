'use strict';
var count = 0;

var user = prompt('Hello there!! Would you like to play a game today?');
console.log('Are you going to play the game ', +user);
count++;

if(user.toUpperCase === 'Y' || user === 'y' || user.toUpperCase === 'YES' || user === 'yes')
{
  alert('let\'s play a guessing game!');
  var num = prompt('It is a number guessing game! Tell me a maximum no I can guess for you!');  //User input number
  console.log('Guessed number = ', num);

  if(isNaN(num)){                             // error catcher if user input a valu which is not a number.
    alert('Input is not a number');
    num = prompt('What is the maximum number I can guess for you?');
  }else{
    num = parseInt(num);
    console.log('number is: ', num);
    var randomnumber = Math.floor((Math.random() * num) + 1);              //varriable number assigned to random number to be guessed.

    var guessedNum = prompt('What is the number You have only one guess!!');        //takes input for user guess
    console.log('guessed number= ', guessedNum);

    if(randomnumber != guessedNum){
      alert('Sorry Number is ' + randomnumber + ' !!');
      }else if (randomnumber === guessedNum){
        alert('Yeee you are BOND of nuber guessing game!! good job!');
       };
    };
} else if (user.toUpperCase === 'N' || user === 'n' || user.toUpperCase === 'NO' || user === 'no')
   {
     alert('Let me know when you are interested to play.. see you soon!!');     //'for' and 'while' structures for your sixth and seventh questions
     }else{
     alert('Not a defined input!!');
     };

var counter;

for(i = 0; i < 4; i++) {
var places[i] = prompt('Name your three faviorite vacation places!');
console.log(places[i]);
};

while(!counter){
  prompt(places[Math.floor((Math.random() * 4) + 1)] + ' is also my faviorite place!!')
  counter = true;
};
