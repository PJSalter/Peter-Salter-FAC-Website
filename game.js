//..........................Whack-A-Cat-Game......................................//

//all variables that decalare querySelectors with connect the classes from the html

//selected all the cotton candy
const allThatCandy = document.querySelectorAll('.candy');
//selected the score board that will appear with the number of amount of cats you whack
const scoreBoard = document.querySelector('.cat-candy-score');
//selected all the cats 
const cuteCat = document.querySelectorAll('.cat');
let lastCotton;
let timeUp = false;
let score = 0;

//picks a random time in milliseconds from min to max
function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

//writing a function that picks a random whole for the cat to pop up from
//this takes in a whole list of cotton candy
//places in an array of 0 - 5 giving a length of six candies and randomly picking a candy from what the cat jumps out of

function randomCandy(allThatCandy) {
  const idx = Math.floor(Math.random() * allThatCandy.length);
  const candy = allThatCandy[idx];
  if (candy === lastCotton) {
    //console.log('oh dear thats the same one eek');
    return randomCandy(allThatCandy);
  }
  //having it saved as a reference to the candy that got chosen from last time
  lastCotton = candy;
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