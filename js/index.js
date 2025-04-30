import {
  handleBackToMenu,
  handleInterfaceToStartGame,
  handleShowRules,
  handleShowUsernameInterface
} from "./eventHandlers/rules.js";


const showRulesBtn = document.getElementById('rules-btn');
const backBtn = document.getElementById('back-btn');
const usernameBtn = document.getElementById('username-btn');
const setPlayerNameBtn = document.getElementById('submit-user-name');
const allStartBtns = document.querySelectorAll('.settings__btn--start')



showRulesBtn.addEventListener('click', handleShowRules);
backBtn.addEventListener('click', handleBackToMenu);
usernameBtn.addEventListener('click', handleShowUsernameInterface);
setPlayerNameBtn.addEventListener('click', handleSetPlayerName);

allStartBtns.forEach((btn)=> btn.addEventListener('click', handleInterfaceToStartGame))







const gameWindow = document.getElementById('game-window');
const tetrisField = document.getElementById('tetris-field');
const nextTetroDisplay = document.getElementById('next-tetro');
const playerNameElement = document.getElementById('player-name');
const levelElement = document.getElementById('player-level');
const scoreElement = document.getElementById('player-score');
const pointsLeftElement = document.getElementById(
  'player-points-left-for-next-level',
);
const goalElement = document.getElementById('player-goal');
const linesElement = document.getElementById('player-filled-lines');

//______________________BUTTONS______________________//
const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');

const exitBtn = document.getElementById('exit-btn');

// const allControlBtns = [startBtn, pauseBtn, instructionsBtn, exitBtn];
// const enabledFromStartControlBtns = [startBtn, instructionsBtn, exitBtn];


const confirmNewGameBtn = document.getElementById('confirm-start-new-game');
const cancelNewGameBtn = document.getElementById('cancel-start-new-game');
const instructionsExitBtn = document.getElementById('instructions-exit-btn');

//______________WINDOWS FOR COMUNICATION WITH USER______//
const userNameWindow = document.getElementById('user-name-window');
const enteredUserName = document.getElementById('user-entered-name');
const instructionsWindow = document.getElementById('instructions');
const confirmStartNewGameWindow = document.getElementById(
  'confirm-new-game-window',
);
const withoutGameExitMessage = document.getElementById(
  'without-game-exit-message',
);
const afterStartedGameExitMessage = document.getElementById(
  'after-started-game-exit-message',
);
const gameOver = document.getElementById('game-over');
//_________________________________________________________________//

// let playField = Array(20).fill(Array(10).fill(0));

let player;
let reachedLevelInFinishedGame;
let scoredPointsInFinishedGame;
let linesInFinishedGame;

let playField = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

let playerScore = 0;
let currentLevel = 1;
let nextGoal;

let wasGameStartedBefore = false;
let isPaused = true;

let gameTimerID;
let movingCells;

let possibleLevels = {
  1: {
    pointsPerOneFilledLine: 40,
    speed: 600,
    goalForNextLevel: 200,
  },
  2: {
    pointsPerOneFilledLine: 10,
    speed: 500,
    goalForNextLevel: 600,
  },
  3: {
    pointsPerOneFilledLine: 15,
    speed: 400,
    goalForNextLevel: 1200,
  },
  4: {
    pointsPerOneFilledLine: 20,
    speed: 400,
    goalForNextLevel: 2000,
  },
  5: {
    pointsPerOneFilledLine: 25,
    speed: 300,
    goalForNextLevel: 3000,
    // goalForNextLevel: Infinity,
  },
};


export function handleSetPlayerName() {
  console.log('set name')
  pauseBtn.innerHTML = 'Pause';
  levelElement.value = currentLevel;
  reachedLevelInFinishedGame = levelElement.value;
  linesInFinishedGame = linesElement.value;
  goalElement.value = possibleLevels[currentLevel].goalForNextLevel;
  pointsLeftElement.value = possibleLevels[currentLevel].goalForNextLevel;
  // _makeControlBtnsEnabled();
  if (enteredUserName.value === '') {
    playerNameElement.value = 'Player 1';
  } else {
    playerNameElement.value = enteredUserName.value;
  }
  player = playerNameElement.value;
  userNameWindow.style.display = 'none';
  isPaused = false;
  // gameTimerID = setTimeout(startGame, possibleLevels[currentLevel].speed);
}













let figures = {
  O: [
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],

  I: [
    [1, 1, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],

  S: [
    [0, 0, 1, 1],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],

  Z: [
    [0, 1, 1, 0],
    [0, 0, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],

  L: [
    [0, 1, 0, 0],
    [0, 1, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],

  J: [
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
  ],

  T: [
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
};
let tetroColors = [
  'red',
  'blue',
  'aqua',
  'fuchsia',
  'orange',
  'greenyellow',
  'indigo',
  'darkgreen',
  'yellow',
  'deeppin',
];











// startBtn.addEventListener('click', onStartBtnClick);
// pauseBtn.addEventListener('click', onPauseBtnClick);

// instructionsExitBtn.addEventListener('click', onInstructionsExitBtnClick);
// exitBtn.addEventListener('click', onExitBtnClick);

drawFieldNewState();

let activeTetro = _getNewTetro();
let nextTetro = _getNewTetro();

document.onkeydown = function (event) {
  // event listener on event when we press some key on keyboard
  if (!isPaused) {
    if (event.key === 'ArrowUp') {
      rotateTetro();
    } else if (event.key === 'ArrowDown') {
      moveTetroDown();
    } else if (event.key === 'ArrowLeft') {
      activeTetro.x -= 1;
      if (_hasCollisions()) {
        activeTetro.x += 1;
      }
    } else if (event.key === 'ArrowRight') {
      activeTetro.x += 1;
      if (_hasCollisions()) {
        activeTetro.x -= 1;
      }
    } else if (event.key === ' ') {
      dropTetro();
    }

    updateGameState();
  }
};

//____________________________________________________________________________________________________________//
function startGame() {
  moveTetroDown();
  if (!isPaused) {
    updateGameState();
    gameTimerID = setTimeout(startGame, possibleLevels[currentLevel].speed); // we need to move our element to the lower border of Tetris
  }
}

function moveTetroDown() {
  activeTetro.y += 1;
  if (_hasCollisions()) {
    activeTetro.y -= 1;
    fixTetro();
    deleteFullLine();
    // activeTetro = _getNewTetro();
    activeTetro = nextTetro;
    if (_hasCollisions()) {
      resetGame();
      console.log('Game is over!');
    }
    nextTetro = _getNewTetro();
  }
}

function updateGameState() {
  if (!isPaused) {
    addActiveTetro();
    drawFieldNewState();
    showWhatTetroWillBeNext();
  }
}

function drawFieldNewState() {
  let field = '';

  for (let y = 0; y < playField.length; y++) {
    for (let x = 0; x < playField[y].length; x++) {
      switch (playField[y][x]) {
        case 1:
          field += '<div class="moving-cell"></div>';
          break;
        case 2:
          field += '<div class="fixed-cell"></div>';
          break;

        default:
          field += '<div class="empty-cell"></div>';
      }
    }
  }
  tetrisField.innerHTML = field;
}

function addActiveTetro() {
  _removePreviousActiveTetroPosition();

  for (let y = 0; y < activeTetro.shape.length; y++) {
    for (let x = 0; x < activeTetro.shape[y].length; x++) {
      if (activeTetro.shape[y][x] === 1) {
        playField[activeTetro.y + y][activeTetro.x + x] =
          activeTetro.shape[y][x];
      }
    }
  }
}

function showWhatTetroWillBeNext() {
  let nextTetroConstruction = '';

  for (let y = 0; y < nextTetro.shape.length; y++) {
    for (let x = 0; x < nextTetro.shape[y].length; x++) {
      if (nextTetro.shape[y][x] === 0) {
        nextTetroConstruction += '<div class="empty-cell"></div>';
      } else {
        nextTetroConstruction += _renderMovingCell(nextTetro);
      }
    }
    // nextTetroConstruction += '<br/>';
  }
  nextTetroDisplay.innerHTML = nextTetroConstruction;
}

function dropTetro() {
  for (let y = activeTetro.y; y < playField.length; y++) {
    activeTetro.y += 1;
    if (_hasCollisions()) {
      activeTetro.y -= 1;
      break;
    }
  }
}

function rotateTetro() {
  const PREVIOUS_ELEMENT_STATE = activeTetro.shape;

  activeTetro.shape = activeTetro.shape[0].map((val, index) =>
    activeTetro.shape.map(row => row[index]).reverse(),
  );
  if (_hasCollisions()) {
    activeTetro.shape = PREVIOUS_ELEMENT_STATE;
  }
}

function fixTetro() {
  //  we transform our element with moving cells into elemnt with fixed cells
  for (let y = 0; y < playField.length; y++) {
    for (let x = 0; x < playField[y].length; x++) {
      if (playField[y][x] === 1) {
        playField[y][x] = 2;
      }
    }
  }
}
let allFilledLines = [];
function deleteFullLine() {
  // we need to check if all the cells of tetris rows are  fixed cells
  let canDeleteLine = true;
  let filledLines = [];

  for (let y = 0; y < playField.length; y++) {
    for (let x = 0; x < playField[y].length; x++) {
      if (playField[y][x] !== 2) {
        canDeleteLine = false; // it is possible  delete the row if at least one its cell is not fixed cell
        continue;
      }
    }
    if (canDeleteLine) {
      playField.splice(y, 1); //  we need to delete this one row
      playField.unshift([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
      filledLines.push(y);
      allFilledLines.push(filledLines);
      linesElement.value = allFilledLines.length;
      linesInFinishedGame = linesElement.value;
    }

    canDeleteLine = true;
  }

  calculateScore(filledLines);
  calculatePointLeftForNextLevel(playerScore);
  moveToNextLevel(playerScore);
}

function _getNewTetro() {
  let newTetroColor =
    tetroColors[Math.floor(Math.random() * tetroColors.length)];
  const POSSIBLE_FIGURES = 'OISZLJT';
  const RANDOM_FIGURE_NAME = Math.floor(Math.random() * 7);
  const newElement = figures[POSSIBLE_FIGURES[RANDOM_FIGURE_NAME]];
  // const newTetroColor = tetroColors[Math.floor(Math.random() * tetroColors.length)];
  return {
    x: Math.floor((playField[0].length - newElement[0].length) / 2),
    y: 0,
    shape: newElement,
    color: newTetroColor,
  };
}
function _renderMovingCell(nextTetro) {
  return `<div class="moving-cell" style="background-color: ${nextTetro.color}"></div>`;
}
function _hasCollisions() {
  for (let y = 0; y < activeTetro.shape.length; y++) {
    for (let x = 0; x < activeTetro.shape[y].length; x++) {
      if (
        activeTetro.shape[y][x] === 1 &&
        (playField[activeTetro.y + y] === undefined ||
          playField[activeTetro.y + y][activeTetro.x + x] === undefined ||
          playField[activeTetro.y + y][activeTetro.x + x] === 2)
      ) {
        return true;
      }
    }
  }
  return false;
}
function _removePreviousActiveTetroPosition() {
  for (let y = 0; y < playField.length; y++) {
    for (let x = 0; x < playField[y].length; x++) {
      if (playField[y][x] === 1) {
        playField[y][x] = 0;
      }
    }
  }
}

function resetGame() {
  isPaused = true;
  clearTimeout(gameTimerID);
  playField = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
  // drawFieldNewState();
  // gameOver.style.display = 'block';
}

function calculateScore(lines) {
  switch (lines.length) {
    case 1:
      playerScore += possibleLevels[currentLevel].pointsPerOneFilledLine;
      break;
    case 2:
      playerScore += possibleLevels[currentLevel].pointsPerOneFilledLine * 2;
      break;
    case 3:
      playerScore += possibleLevels[currentLevel].pointsPerOneFilledLine * 3;
      break;
    case 4:
      playerScore += possibleLevels[currentLevel].pointsPerOneFilledLine * 4;
      break;
  }
  scoreElement.value = playerScore;
  scoredPointsInFinishedGame = scoreElement.value;
}

function moveToNextLevel(score) {
  if (score >= possibleLevels[currentLevel].goalForNextLevel) {
    currentLevel += 1;
    levelElement.value = currentLevel;
    reachedLevelInFinishedGame = levelElement.value;
    nextGoal = possibleLevels[currentLevel].goalForNextLevel;
    goalElement.value = nextGoal;
    calculatePointLeftForNextLevel(score);
  }
}

function calculatePointLeftForNextLevel(score) {
  let pointsLeft = possibleLevels[currentLevel].goalForNextLevel - score;
  pointsLeftElement.value = pointsLeft;
}

function _askUserName() {
  userNameWindow.style.display = 'grid';
  _makeControlBtnsDisabled();
}

function _makeControlBtnsDisabled() {
  allControlBtns.forEach(btn => {
    btn.disabled = true;
  });
}

function _makeControlBtnsEnabled() {
  if (wasGameStartedBefore === true) {
    allControlBtns.forEach(btn => {
      btn.disabled = false;
    });
  } else {
    enabledFromStartControlBtns.forEach(btn => {
      btn.disabled = false;
    });
  }
}

//_________________EVENLISTENER FUNCTIONS____________________________________________//

function onStartBtnClick() {
  if (wasGameStartedBefore === false) {
    wasGameStartedBefore = true;
    startBtn.innerHTML = 'NEW GAME';
    pauseBtn.innerHTML = 'Keep playing... ';
    _askUserName();
    submitNameBtn.addEventListener('click', onSubmitPlayerNameBtnClick);
  } else {
    confirmStartNewGameWindow.style.display = 'grid';
    pauseBtn.innerHTML = 'Keep playing... ';
    isPaused = true;
    _makeControlBtnsDisabled();
    cancelNewGameBtn.addEventListener('click', onCancelNewGameBtnClick);
  }
}



function onCancelNewGameBtnClick() {
  confirmStartNewGameWindow.style.display = 'none';
  _makeControlBtnsEnabled();
  pauseBtn.value = 'pause';
  pauseBtn.innerHTML = 'Pause';
  isPaused = false;
  gameTimerID = setTimeout(startGame, possibleLevels[currentLevel].speed);
}

function onPauseBtnClick() {
  if (wasGameStartedBefore === true) {
    if (isPaused === false) {
      pauseBtn.innerHTML = 'Keep playing... ';
      clearTimeout(gameTimerID);
    } else if (isPaused === true) {
      pauseBtn.innerHTML = 'Pause';
      gameTimerID = setTimeout(startGame, possibleLevels[currentLevel].speed);
    }
    isPaused = !isPaused;
  }
}

function onInstructionBtnClick() {
  instructionsWindow.style.display = 'grid';
  pauseBtn.innerHTML = 'Keep playing... ';
  isPaused = true;
  _makeControlBtnsDisabled();
}

function onInstructionsExitBtnClick() {
  instructionsWindow.style.display = 'none';
  pauseBtn.innerHTML = 'Pause';
  _makeControlBtnsEnabled();

  if (wasGameStartedBefore === true) {
    isPaused = false;
    gameTimerID = setTimeout(startGame, possibleLevels[currentLevel].speed);
  }
}

function onExitBtnClick() {
  gameWindow.style.display = 'none';
  if (wasGameStartedBefore === false) {
    withoutGameExitMessage.innerHTML = `
        <div><i class="fa-solid fa-face-sad-cry"></i></div>
        <div>
            <i class="fa-sharp fa-solid fa-heart-crack"></i>
            It's a pity you left game even without trying to play Tetris
            <i class="fa-sharp fa-solid fa-heart-crack"></i>
        </div>
        <div><button class="btn back-to-tetris" id='btn-back-to-tetris'><i class="fa-regular fa-face-laugh-beam"></i>Back to
                Tetris<i class="fa-regular fa-face-laugh-beam"></i></button></div>
        `;

    withoutGameExitMessage.style.display = 'block';
  } else {
    isPaused = true;

    afterStartedGameExitMessage.innerHTML = `
        <div><i class="fa-solid fa-face-smile-beam"></i></div>
        <div>Hey, ${player}, thank you for your game!</div>
        <div> You were doing fine!</div>
        <div> You have reached level ${reachedLevelInFinishedGame} and scored ${scoredPointsInFinishedGame} points by filling ${linesInFinishedGame} lines.</div>
        <div><button class="btn back-to-tetris" id="btn-back-to-tetris"><i class="fa-regular fa-face-laugh-beam"></i>Back to
                Tetris<i class="fa-regular fa-face-laugh-beam"></i></button></div>
      `;

    afterStartedGameExitMessage.style.display = 'block';
  }
  const backToTetrisBtn = document.getElementById('btn-back-to-tetris');
  backToTetrisBtn.addEventListener('click', onBackToTetrisBtnClick);
}

function onBackToTetrisBtnClick() {
  if (withoutGameExitMessage.innerHTML !== '') {
    withoutGameExitMessage.innerHTML = '';
    withoutGameExitMessage.style.display = 'none';
  } else if (afterStartedGameExitMessage.innerHTML !== '') {
    afterStartedGameExitMessage.innerHTML = '';
    afterStartedGameExitMessage.style.display = 'none';
    pauseBtn.innerHTML = 'Keep playing... ';
  }

  gameWindow.style.display = 'grid';
}

// change the color of one tetro

//______________________HOW TO CHANGE COLOR OF TETRO____________________________//

// movingCells = Array.prototype.slice.call(
//   document.getElementById('next-tetro').getElementsByClassName('moving-cell'),
// );
// for (const movingCell of movingCells) {
//   movingCell.style.backgroundColor = thisColor;
//   console.log(movingCell.style.backgroundColor);
// }
