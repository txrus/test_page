'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function() {
  const guess = Number(document.querySelector('.guess').value);

  //when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = "⛔ No number !";

    // when player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = "🎉 Correct Number!";
    document.querySelector('.number').textContent = secretNumber;
    //ex. DOM css
    document.querySelector('body').style.backgroundColor = "#60b347";
    document.querySelector('.number').style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }


    // when guess is too high
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = "📈 Too high"
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('message').textContent = "You Died 💀";
    }
    //when guess is too low
  } else if (guess < secretNumber) {

    if (score > 0) {
      document.querySelector('.message').textContent = "📉 Too low"
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = "You Died 💀"
    }
  }

});

////////////////////////////////////
// Coding Challenge # 1

function refreshPage() {
  window.location.reload();
}

document.querySelector('.again').addEventListener('click', function() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.highscore').textContent = highscore;
  document.querySelector('body').style.backgroundColor = "#222";
  document.querySelector('.score').textContent = '20';
  document.querySelector('.message').textContent = 'Start guessing . . .';

});
