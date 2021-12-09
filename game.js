//..........................Whack-A-Cat-Game......................................//

//all variables that decalare querySelectors with connect the classes from the html
const allThatCandy = document.querySelectorAll('.candy');
const scoreBoard = document.querySelector('.cat-candy-score');
const cuteCat = document.querySelectorAll('.cat');
let lastHole;
let timeUp = false;
let score = 0;

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomCandy(allThatCandy) {
  const idx = Math.floor(Math.random() * allThatCandy.length);
  const candy = allThatCandy[idx];
  if (candy === lastHole) {
    //console.log('oh dear thats the same one eek');
    return randomCandy(allThatCandy);
  }
  lastHole = candy;
  return candy;
}

function popUp() {
  const time = randomTime(200, 1000);
  const candyHeaven = randomCandy(allThatCandy);
  candyHeaven.classList.add('up');
  setTimeout(() => {
      candyHeaven.classList.remove('up');
    if (!timeUp) popUp();
  }, time);
}

function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  popUp();
  setTimeout(() => timeUp = true, 10000)
}

function bonkInThatCandy(e) {
  if(!e.isTrusted) return; 
  score++;
  this.parentNode.classList.remove('up');
  scoreBoard.textContent = score;
}

cuteCat.forEach(cat => cat.addEventListener('click', bonkInThatCandy));