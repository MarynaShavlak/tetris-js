import {
  handleBackToMenu,
  handleInterfaceToStartGame,
  handleShowRules,
  handleShowUsernameInterface,
} from "./eventHandlers/rules.js";
import {figures, possibleLevels, TetrisGame, tetroColors} from "./gameConfig.js";
import {resetAnimations} from "./canvas/resetAnimations.js";
import {
  _hasCollisions,
  activeTetro,
  drawFieldNewState,
  dropTetro,
  moveTetroDown,
  rotateTetro,
  updateGameState
} from "./tetro.js";
import {
  allStartBtns,
  backBtn,
  cancelNewGameBtn,
  confirmNewGameBtn,
  confirmStartNewGameWindow,
  controlButtonsBlock,
  enteredUserName,
  exitBtn, exitGameModal,
  gameEl, goalElement,
  goalOutput,
  levelBlock, levelOutput,

  linesBlock, linesElement, nextBlockWrapper,
  pauseBtn,
  playerInfoBlock,
  playerNameElement,
  pointsLeftElement,
  scoreEl, scoreElement,
  setPlayerNameBtn,
  settingsEl,
  showRulesBtn,
  startBtn,
  usernameBtn
} from "./elements.js";
import {calculatePointLeftForNextLevel} from "./calculateResults.js";

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
  levelOutput.value = TetrisGame.currentLevel;
  TetrisGame.reachedLevelInFinishedGame = levelOutput.value;
  TetrisGame.linesInFinishedGame = linesElement.value;
  goalOutput.value = possibleLevels[TetrisGame.currentLevel].goalForNextLevel;
  pointsLeftElement.value = possibleLevels[TetrisGame.currentLevel].goalForNextLevel;
  TetrisGame.isPaused = false;
  if (enteredUserName.value === '') {
    playerNameElement.value = 'Player 1';
  }
}

export function handleSetPlayerName() {
  // pauseBtn.innerHTML = 'Pause';

  // // _makeControlBtnsEnabled();

    playerNameElement.value = enteredUserName.value;

  TetrisGame.player = playerNameElement.value;
  // userNameWindow.style.display = 'none';


  // TetrisGame.gameTimerID = setTimeout(startGame, possibleLevels[TetrisGame.currentLevel].speed);
}


function onStartBtnClick() {
  if (TetrisGame.wasGameStartedBefore === false) {
    TetrisGame.wasGameStartedBefore = true;
    startBtn.innerHTML = 'NEW GAME';
    pauseBtn.innerHTML = 'Pause';
    // _askUserName();
    // submitNameBtn.addEventListener('click', onSubmitPlayerNameBtnClick);
    startGame();
    nextBlockWrapper.classList.remove('hidden');
    _makeControlBtnsEnabled()
  } else {
    confirmStartNewGameWindow.classList.remove('hidden')
    confirmNewGameBtn.addEventListener('click', onConfirmNewGameBtnClick)
    cancelNewGameBtn.addEventListener('click', onCancelNewGameBtnClick);
    pauseBtn.innerHTML = 'Continue';
    TetrisGame.isPaused = true;
    _makeControlBtnsDisabled();
  }
}

function continueGame() {
  pauseBtn.innerHTML = 'Pause';
  TetrisGame.isPaused= false;
  TetrisGame.gameTimerID = setTimeout(startGame, possibleLevels[TetrisGame.currentLevel].speed);
}

function onCancelNewGameBtnClick() {
  confirmStartNewGameWindow.classList.add('hidden');
  _makeControlBtnsEnabled();
  pauseBtn.value = 'pause';
  pauseBtn.innerHTML = 'Pause';
  TetrisGame.isPaused = false;
  TetrisGame.gameTimerID = setTimeout(startGame, possibleLevels[TetrisGame.currentLevel].speed);
}

function onConfirmNewGameBtnClick() {
  confirmStartNewGameWindow.classList.add('hidden');
  // _makeControlBtnsEnabled();
  // pauseBtn.value = 'pause';
  // pauseBtn.innerHTML = 'Pause';
  // TetrisGame.isPaused = false;
  // TetrisGame.gameTimerID = setTimeout(startGame, possibleLevels[TetrisGame.currentLevel].speed);


  startBtn.innerHTML = 'NEW GAME';
  pauseBtn.innerHTML = 'Pause';
  // _askUserName();
  // submitNameBtn.addEventListener('click', onSubmitPlayerNameBtnClick);
  resetGame();
  _makeControlBtnsEnabled();
  setTimeout(()=>{
    console.log('playField', TetrisGame.playField)
        TetrisGame.isPaused = false;
        TetrisGame.wasGameStartedBefore = true;
        startGame();
      },
      1000
      )
}

function onPauseBtnClick() {
  if (TetrisGame.wasGameStartedBefore === true) {
    if (TetrisGame.isPaused === false) {
      pauseBtn.innerHTML = 'Continue';
      clearTimeout(TetrisGame.gameTimerID);
      TetrisGame.isPaused= true;
    } else if (TetrisGame.isPaused === true) {
      continueGame();

    }
    // TetrisGame.isPaused = !TetrisGame.isPaused;
  }
}

function onExitBtnClick() {

  if (TetrisGame.wasGameStartedBefore === false) {
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
    // TetrisGame.isPaused = true;
    onPauseBtnClick();
    // pauseBtn.innerHTML = 'Pause';
    _makeControlBtnsDisabled();

    exitGameModal.innerHTML = `
        
        <p>Hey, ${TetrisGame.player}, thank you for your game!</p>
        <p> You were doing fine!</p>
        <p> You have reached level ${TetrisGame.reachedLevelInFinishedGame} and scored ${TetrisGame.scoredPointsInFinishedGame} points by filling ${TetrisGame.linesInFinishedGame} lines.</p>
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
  // if (TetrisGame.wasGameStartedBefore) {
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
  if (TetrisGame.wasGameStartedBefore === true) {
    allControlBtns.forEach(btn => {
      btn.disabled = false;
    });
  } else {
    enabledFromStartControlBtns.forEach(btn => {
      btn.disabled = false;
    });
  }
}


drawFieldNewState();

//____________________________________________________________________________________________________________//
function startGame() {
  moveTetroDown();
  console.log('pause', TetrisGame.isPaused)
  if (!TetrisGame.isPaused) {
    updateGameState();
    TetrisGame.gameTimerID = setTimeout(startGame, possibleLevels[TetrisGame.currentLevel].speed);
  }
}

function resetGame() {
  TetrisGame.isPaused = true;
  clearTimeout(TetrisGame.gameTimerID);
  TetrisGame.playField = Array.from({ length: 20 }, () => Array(10).fill(0));
  drawFieldNewState();
  // gameOver.style.display = 'block';
}



export function moveToNextLevel(score) {
  if (score >= possibleLevels[TetrisGame.currentLevel].goalForNextLevel) {
    TetrisGame.currentLevel += 1;
    levelOutput.value = TetrisGame.currentLevel;
    TetrisGame.reachedLevelInFinishedGame = levelOutput.value;
    TetrisGame.nextGoal = possibleLevels[TetrisGame.currentLevel].goalForNextLevel;
    goalElement.value = TetrisGame.nextGoal;
    calculatePointLeftForNextLevel(score);
  }
}




document.onkeydown = function (event) {

  if (!TetrisGame.isPaused) {
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
