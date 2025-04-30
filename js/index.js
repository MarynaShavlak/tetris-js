import {
  controlButtonsBlock,
  gameEl,
  handleBackToMenu,
  handleInterfaceToStartGame,
  handleShowRules,
  handleShowUsernameInterface, levelBlock, linesBlock, playerInfoBlock, scoreEl, settingsEl,
} from "./eventHandlers/rules.js";
import {figures, possibleLevels, tetroColors} from "./gameConfig.js";
import {resetAnimations} from "./canvas/resetAnimations.js";




const showRulesBtn = document.getElementById('rules-btn');
const backBtn = document.getElementById('back-btn');
const usernameBtn = document.getElementById('username-btn');
const setPlayerNameBtn = document.getElementById('submit-user-name');
const allStartBtns = document.querySelectorAll('.settings__btn--start');

const enteredUserName = document.getElementById('user-entered-name');
const playerNameElement = document.getElementById('player-name');
export const levelOutput = levelBlock.querySelector('#player__level');
export const linesOutput = linesBlock.querySelector('#player__filled-lines');
const goalOutput = document.getElementById('player-goal');
const pointsLeftElement = document.getElementById(
    'player-points-left-for-next-level',
);






showRulesBtn.addEventListener('click', handleShowRules);
backBtn.addEventListener('click', handleBackToMenu);
usernameBtn.addEventListener('click', handleShowUsernameInterface);
setPlayerNameBtn.addEventListener('click', handleSetPlayerName);

allStartBtns.forEach((btn)=> btn.addEventListener('click', gamePusk))


function gamePusk() {
  setInitialOptions()
  handleInterfaceToStartGame();
  // onStartBtnClick();

}

function setInitialOptions() {
  levelOutput.value = currentLevel;
  reachedLevelInFinishedGame = levelOutput.value;
  linesInFinishedGame = linesOutput.value;
  goalOutput.value = possibleLevels[currentLevel].goalForNextLevel;
  pointsLeftElement.value = possibleLevels[currentLevel].goalForNextLevel;
  isPaused = false;
  if (enteredUserName.value === '') {
    playerNameElement.value = 'Player 1';
  }
}

export function handleSetPlayerName() {
  // pauseBtn.innerHTML = 'Pause';

  // // _makeControlBtnsEnabled();

    playerNameElement.value = enteredUserName.value;

  // player = playerNameElement.value;
  // userNameWindow.style.display = 'none';


  // gameTimerID = setTimeout(startGame, possibleLevels[currentLevel].speed);
}


function onStartBtnClick() {
  if (wasGameStartedBefore === false) {
    wasGameStartedBefore = true;
    startBtn.innerHTML = 'NEW GAME';
    pauseBtn.innerHTML = 'Pause';
    // _askUserName();
    // submitNameBtn.addEventListener('click', onSubmitPlayerNameBtnClick);
    startGame();
    _makeControlBtnsEnabled()
  } else {
    confirmStartNewGameWindow.classList.remove('hidden')
    pauseBtn.innerHTML = 'Continue';
    isPaused = true;
    _makeControlBtnsDisabled();
    cancelNewGameBtn.addEventListener('click', onCancelNewGameBtnClick);
  }
}


const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');
const exitBtn = document.getElementById('exit-btn');

startBtn.addEventListener('click', onStartBtnClick);
pauseBtn.addEventListener('click', onPauseBtnClick);
exitBtn.addEventListener('click', onExitBtnClick);





const allControlBtns = [startBtn, pauseBtn, exitBtn];
const enabledFromStartControlBtns = [startBtn, exitBtn];

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



const gameWindow = document.getElementById('game-window');
const tetrisField = document.getElementById('tetris-field');
const nextTetroDisplay = document.getElementById('next-tetro');

const levelElement = document.getElementById('player-level');
const scoreElement = document.getElementById('player-score');


const linesElement = document.getElementById('player-filled-lines');










const confirmNewGameBtn = document.getElementById('confirm-start-new-game');
const cancelNewGameBtn = document.getElementById('cancel-start-new-game');


//______________WINDOWS FOR COMUNICATION WITH USER______//
const userNameWindow = document.getElementById('user-name-window');

const instructionsWindow = document.getElementById('instructions');
const confirmStartNewGameWindow = document.getElementById(
  'confirm-new-game-window',
);
const exitGameModal = document.querySelector('.exit-message',);

const gameOver = document.getElementById('game-over');
//_________________________________________________________________//

// let playField = Array(20).fill(Array(10).fill(0));

export let player;
export let reachedLevelInFinishedGame;
export let scoredPointsInFinishedGame;
export let linesInFinishedGame;

export let playField = [
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

export let playerScore = 0;
export let currentLevel = 1;
export let nextGoal;

export let wasGameStartedBefore = false;
export let isPaused = true;

export let gameTimerID;
let movingCells;




// export function handleSetPlayerName() {
//   console.log('set name')
//   pauseBtn.innerHTML = 'Pause';
//   levelElement.value = currentLevel;
//   reachedLevelInFinishedGame = levelElement.value;
//   linesInFinishedGame = linesElement.value;
//   goalElement.value = possibleLevels[currentLevel].goalForNextLevel;
//   pointsLeftElement.value = possibleLevels[currentLevel].goalForNextLevel;
//   // _makeControlBtnsEnabled();
//   if (enteredUserName.value === '') {
//     playerNameElement.value = 'Player 1';
//   } else {
//     playerNameElement.value = enteredUserName.value;
//   }
//   player = playerNameElement.value;
//   userNameWindow.style.display = 'none';
//   isPaused = false;
//   // gameTimerID = setTimeout(startGame, possibleLevels[currentLevel].speed);
// }


// instructionsExitBtn.addEventListener('click', onInstructionsExitBtnClick);
//

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
  // nextTetroDisplay.innerHTML = nextTetroConstruction;
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

// function _askUserName() {
//   userNameWindow.style.display = 'grid';
//   _makeControlBtnsDisabled();
// }



//_________________EVENLISTENER FUNCTIONS____________________________________________//



function onCancelNewGameBtnClick() {
  confirmStartNewGameWindow.classList.add('hidden');
  _makeControlBtnsEnabled();
  pauseBtn.value = 'pause';
  pauseBtn.innerHTML = 'Pause';
  isPaused = false;
  gameTimerID = setTimeout(startGame, possibleLevels[currentLevel].speed);
}

function onPauseBtnClick() {
  if (wasGameStartedBefore === true) {
    if (isPaused === false) {
      pauseBtn.innerHTML = 'Continue';
      clearTimeout(gameTimerID);
    } else if (isPaused === true) {
      pauseBtn.innerHTML = 'Pause';
      gameTimerID = setTimeout(startGame, possibleLevels[currentLevel].speed);
    }
    isPaused = !isPaused;
  }
}


function onExitBtnClick() {

  if (wasGameStartedBefore === false) {
    exitGameModal.innerHTML = `
    <p class="exit-game__notice">
    <i class="fa-sharp fa-solid fa-heart-crack"></i>
    It's a pity you left the game without even giving Tetris a try.
    <i class="fa-sharp fa-solid fa-heart-crack"></i>
    </p>
    <p class="exit-game__prompt">Are you sure you want to proceed?</p>

    <ul class="exit-game__user-btns">
    <li>
      <button class="btn exit-game action-btn" id="btn-sure-exit">
        Exit
      </button>
    </li>
    <li>
      <button class="btn back-to-tetris action-btn" id="btn-back-to-tetris">
        Back to Tetris
      </button>
    </li>
   </ul>
`;

    exitGameModal.classList.remove('hidden');
  } else {
    isPaused = true;
    pauseBtn.innerHTML = 'Pause';

    exitGameModal.innerHTML = `
        
        <p>Hey, ${player}, thank you for your game!</p>
        <p> You were doing fine!</p>
        <p> You have reached level ${reachedLevelInFinishedGame} and scored ${scoredPointsInFinishedGame} points by filling ${linesInFinishedGame} lines.</p>
        <ul class="exit-game__user-btns">
    <li>
      <button class="btn exit-game action-btn" id="btn-sure-exit">
        Exit
      </button>
    </li>
    <li>
      <button class="btn back-to-tetris action-btn" id="btn-back-to-tetris">
        Back to Tetris
      </button>
    </li>
   </ul>
      `;
    exitGameModal.classList.remove('hidden');
  }
  const backToTetrisBtn = document.getElementById('btn-back-to-tetris');
  backToTetrisBtn.addEventListener('click', onBackToTetrisBtnClick);
  const sureExitBtn = document.getElementById('btn-sure-exit');
  sureExitBtn.addEventListener('click', onSureExitBtnClick);
}

function onBackToTetrisBtnClick() {
  exitGameModal.classList.add('hidden')
  exitGameModal.innerHTML = '';
  if (wasGameStartedBefore) {
     pauseBtn.innerHTML = 'Keep playing... ';
  }
}

function onSureExitBtnClick() {
  exitGameModal.classList.add('hidden')
  exitGameModal.innerHTML = '';
  settingsEl.classList.remove('hidden');
  gameEl.classList.add('hidden');
  scoreEl.classList.add('hidden');
  levelBlock.classList.add('hidden');
  playerInfoBlock.classList.add('hidden');
  linesBlock.classList.add('hidden');
  controlButtonsBlock.classList.add('hidden');
  resetAnimations();

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




// function onInstructionBtnClick() {
//   instructionsWindow.style.display = 'grid';
//   pauseBtn.innerHTML = 'Keep playing... ';
//   isPaused = true;
//   _makeControlBtnsDisabled();
// }
//
// function onInstructionsExitBtnClick() {
//   instructionsWindow.style.display = 'none';
//   pauseBtn.innerHTML = 'Pause';
//   _makeControlBtnsEnabled();
//
//   if (wasGameStartedBefore === true) {
//     isPaused = false;
//     gameTimerID = setTimeout(startGame, possibleLevels[currentLevel].speed);
//   }
// }
