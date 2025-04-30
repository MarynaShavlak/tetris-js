import {
  handleBackToMenu,
  handleInterfaceToStartGame,
  handleShowRules,
  handleShowUsernameInterface,
} from "./eventHandlers/rules.js";
import {figures, possibleLevels, tetroColors} from "./gameConfig.js";
import {resetAnimations} from "./canvas/resetAnimations.js";
import {_hasCollisions, drawFieldNewState, dropTetro, moveTetroDown, rotateTetro, updateGameState} from "./tetro.js";
import {
  allStartBtns,
  backBtn, controlButtonsBlock, enteredUserName, exitBtn, gameEl,
  goalOutput, levelBlock,
  levelOutput, linesBlock, linesOutput, pauseBtn, playerInfoBlock, playerNameElement, pointsLeftElement, scoreEl,
  setPlayerNameBtn, settingsEl,
  showRulesBtn, startBtn,
  usernameBtn
} from "./elements.js";

showRulesBtn.addEventListener('click', handleShowRules);
backBtn.addEventListener('click', handleBackToMenu);
usernameBtn.addEventListener('click', handleShowUsernameInterface);
setPlayerNameBtn.addEventListener('click', handleSetPlayerName);
allStartBtns.forEach((btn)=> btn.addEventListener('click', gamePusk))

startBtn.addEventListener('click', onStartBtnClick);
pauseBtn.addEventListener('click', onPauseBtnClick);
exitBtn.addEventListener('click', onExitBtnClick);


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
    confirmNewGameBtn.addEventListener('click', onConfirmNewGameBtnClick)
    cancelNewGameBtn.addEventListener('click', onCancelNewGameBtnClick);
    pauseBtn.innerHTML = 'Continue';
    isPaused = true;
    _makeControlBtnsDisabled();
  }
}

function continueGame() {
  pauseBtn.innerHTML = 'Pause';
  isPaused= false;
  gameTimerID = setTimeout(startGame, possibleLevels[currentLevel].speed);
}

function onCancelNewGameBtnClick() {
  confirmStartNewGameWindow.classList.add('hidden');
  _makeControlBtnsEnabled();
  pauseBtn.value = 'pause';
  pauseBtn.innerHTML = 'Pause';
  isPaused = false;
  gameTimerID = setTimeout(startGame, possibleLevels[currentLevel].speed);
}

function onConfirmNewGameBtnClick() {
  confirmStartNewGameWindow.classList.add('hidden');
  // _makeControlBtnsEnabled();
  // pauseBtn.value = 'pause';
  // pauseBtn.innerHTML = 'Pause';
  // isPaused = false;
  // gameTimerID = setTimeout(startGame, possibleLevels[currentLevel].speed);


  startBtn.innerHTML = 'NEW GAME';
  pauseBtn.innerHTML = 'Pause';
  // _askUserName();
  // submitNameBtn.addEventListener('click', onSubmitPlayerNameBtnClick);
  resetGame();
  _makeControlBtnsEnabled();
  setTimeout(()=>{
    console.log('playField', playField)
        isPaused = false;
        wasGameStartedBefore = true;
        startGame();
      },
      1000
      )
}


function onPauseBtnClick() {
  if (wasGameStartedBefore === true) {
    if (isPaused === false) {
      pauseBtn.innerHTML = 'Continue';
      clearTimeout(gameTimerID);
      isPaused= true;
    } else if (isPaused === true) {
      continueGame();

    }
    // isPaused = !isPaused;
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
  }
  else {
    // isPaused = true;
    onPauseBtnClick();
    // pauseBtn.innerHTML = 'Pause';
    _makeControlBtnsDisabled();

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
  continueGame()
  _makeControlBtnsEnabled();
  // if (wasGameStartedBefore) {
  //   pauseBtn.innerHTML = 'Pause';
  // }

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
  // tetrisField.innerHTML= '';
  // drawFieldNewState();
  // resetGame();


}

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





//____________________________________________________________________________________________________________//
function startGame() {
  moveTetroDown();
  console.log('pause', isPaused)
  if (!isPaused) {
    updateGameState();
    gameTimerID = setTimeout(startGame, possibleLevels[currentLevel].speed); // we need to move our element to the lower border of Tetris
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
  drawFieldNewState();
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
