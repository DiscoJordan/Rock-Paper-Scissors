const startBtn = document.getElementById("start");
const newGame = document.getElementById("newGame");
const form = document.getElementById("form");
const menu = document.getElementById("menu");
const game = document.getElementById("game");

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const myRock = document.getElementById("myRock");
const myPaper = document.getElementById("myPaper");
const myScissors = document.getElementById("myScissors");
const hisRock = document.getElementById("hisRock");
const hisPaper = document.getElementById("hisPaper");
const hisScissors = document.getElementById("hisScissors");

const battlePictures = document.getElementById("battlePictures");
const pictures = document.getElementById("pictures");
const container = document.getElementById("container");
const gameWindow = document.getElementById("gameWindow");
let gameTitle = document.createElement("h2");
let gameRound = document.createElement("h2");
let gameScore = document.createElement("h2");
let choose = document.createElement("h2");

let round = 1;
let myWins = 0;
let myLosts = 0;

let startNewGame = () => {
  const nickname = document.getElementById("nickname").value.toUpperCase();
  menu.style.display = "none";
  game.style.display = "flex";
  gameRound.textContent = `ROUND ${round}`;
  game.prepend(gameRound);
  gameTitle.textContent = `${nickname} VS ARTIFICIAL PAPER`;
  game.prepend(gameTitle);
  rock.addEventListener("click", function () {
    battle("rock");
    pictures.style.display = "none";
  });
  paper.addEventListener("click", function () {
    battle("paper");
    pictures.style.display = "none";
  });
  scissors.addEventListener("click", function () {
    battle("scissors");
    pictures.style.display = "none";
    
  });
  setTimeout(() => {
    playRound();
    container.style.justifyContent = "start";
    game.style.padding = "4em";
  }, 500);
};

let playRound = () => {
    gameRound.textContent = `ROUND ${round}`;
  pictures.style.display = "flex";
  choose.textContent = `Choose:`;
  choose.style.textAlign = `center`;
  gameWindow.prepend(choose);
  
};

let battle = (hand) => {
  
  hisPaper.style.display = "none";
  hisRock.style.display = "none";
  hisScissors.style.display = "none";
  myPaper.style.display = "none";
  myRock.style.display = "none";
  myScissors.style.display = "none";

  choose.textContent = ``;
  let random = Math.floor(Math.random() * 3 + 1);
  let hisHand;

  battlePictures.style.display = "flex";

  if (hand === "rock") {
    myRock.style.display = "flex";
  } else if (hand === "paper") {
    myPaper.style.display = "flex";
  } else if (hand === "scissors") {
    myScissors.style.display = "flex";
  }
  if (random === 1) {
    hisRock.style.display = "flex";
    hisHand = "rock";
  } else if (random === 2) {
    hisPaper.style.display = "flex";
    hisHand = "paper";
  } else if (random === 3) {
    hisScissors.style.display = "flex";
    hisHand = "scissors";
  }
  
  if (hand === hisHand) {
    choose.textContent = `DRAW`;
  } else if (
    (hand === "rock" && hisHand === "scissors") ||
    (hand === "paper" && hisHand === "rock") ||
    (hand === "scissors" && hisHand === "paper")
  ) {
    choose.textContent = `WIN`;
    myWins++;
  } else {
    choose.textContent = `LOSE`;
    myLosts++;
  }
  round++;
  
  gameScore.textContent = `${myWins}:${myLosts}`;
  game.append(gameScore);

  setTimeout(() => {
    battlePictures.style.display = `none`;
    hisPaper.style.display = "none";
    hisRock.style.display = "none";
    hisScissors.style.display = "none";
    myPaper.style.display = "none";
    myRock.style.display = "none";
    myScissors.style.display = "none";

    if (myLosts ===3 || myWins ===3) { 
        newGame.style.display = 'flex'
      
    } else {
        playRound();
    }
  }, 2000);
};

form.addEventListener("submit", function (event) {
  event.preventDefault();
  startNewGame();
});
