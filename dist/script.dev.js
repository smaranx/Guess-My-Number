'use strict';
/*
document.querySelector('.message').textContent = '🎉 Correct Number !!!';
document.querySelector('.number').textContent = 15;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 25;
console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
//document.querySelector('.number').textContent = secretNumber;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when there is no guess
  if (!guess) {
    document.querySelector('.message').textContent = '🚫 No Number !!';

    // when guess is correct
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number !!';

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '36rem';
    document.querySelector('.number').textContent = secretNumber;

    // when guess is high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High !!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '💥 You lost the game !!';
      document.querySelector('.score').textContent = 0;
    }

    // when guess is low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low !!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '💥 You lost the game !!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'start guessing...';
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
});
*/

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var secretNumber = Math.trunc(Math.random() * 20) + 1;
var score = 20;
var highScore = 0;

var displayMessage = function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}; //document.querySelector('.number').textContent = secretNumber;


document.querySelector('.check').addEventListener('click', function () {
  var guess = Number(document.querySelector('.guess').value);
  console.log(guess, _typeof(guess));

  if (!guess) {
    //document.querySelector('.message').textContent = '🚫 No Number !!';
    displayMessage('🚫 No Number !!');
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too High !!' : '📉 Too Low !!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //document.querySelector('.message').textContent = '💥 You lost the game';
      displayMessage('💥 You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
  /*else if (guess > secretNumber) {
  if (score > 1) {
    document.querySelector('.message').textContent = '📈 Too High !!';
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent = '💥 You lost the game';
    document.querySelector('.score').textContent = 0;
  }
  } else if (guess < secretNumber) {
  if (score > 1) {
    document.querySelector('.message').textContent = '📉 Too Low !!';
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent = '💥 You lost the game';
    document.querySelector('.score').textContent = 0;
  }
  }*/
  else if (guess === secretNumber) {
      //document.querySelector('.message').textContent = '🎉 Correct Number !!';
      displayMessage('🎉 Correct Number !!');
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;

      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    }
});
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem'; //document.querySelector('.message').textContent = 'Start guessing...';

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = '20';
  document.querySelector('.number').textContent = '?';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.guess').value = '';
});