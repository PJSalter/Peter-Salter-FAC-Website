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
  //statement that explains if it ends up being the same candy
  if (candy === lastCotton) {
    //console.log('oh dear thats the same one eek');
    return randomCandy(allThatCandy);
  }
  //having it saved as a reference to the candy that got chosen from last time
  lastCotton = candy;
  //else it should not return with the same candy 
  return candy;
}

//a function that gets the cheeky cats to pop up from the candy

function popUp() {
  //gives a random time and speed
  const time = randomTime(200, 1000);
  //from a random cotton candy
  const candyHeaven = randomCandy(allThatCandy);
  //adding a class of up with triggers the css
  candyHeaven.classList.add('up');
  //after an amount of time the cats pop up, then would need to pop down with an amount of time, adding a classlist to remove up.
  setTimeout(() => {
      candyHeaven.classList.remove('up');
    if (!timeUp) popUp();
  }, time);
}

//function on starting the game

function startGame() {
  //setting the score to zero
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  //calling the function of pop up for the cats 
  popUp();
  //making the function true by speed of 1000 ms
  setTimeout(() => timeUp = true, 10000)
}

//a function that bonks the cats on the head once user clicks

function bonkInThatCandy(e) {
  if(!e.isTrusted) return; //if they fake click
  score++; // plussing one each time 
  this.parentNode.classList.remove('up');
  scoreBoard.textContent = score;
}

//taking each cat and listening for a click bonk the user clicks from if they catch them

cuteCat.forEach(cat => cat.addEventListener('click', bonkInThatCandy));