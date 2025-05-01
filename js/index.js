import {
  handleBackToMenu,
  handleInterfaceToStartGame,
  handleShowRules,
  handleShowUsernameInterface,
} from "./eventHandlers/rules.js";
import { possibleLevels, TetrisGame } from "./gameConfig.js";
import {resetAnimations} from "./canvas/resetAnimations.js";
import {
  _getNewTetro,
  _hasCollisions, activeTetro,  nextTetro,
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
  gameEl,
  goalOutput,
  levelBlock, levelOutput,
  linesBlock, linesElement, nextBlockWrapper, nextTetroDisplay,
  pauseBtn,
  playerInfoBlock,
  playerNameElement,
  pointsLeftElement,
  scoreEl, scoreOutput,
  setPlayerNameBtn,
  settingsEl,
  showRulesBtn,
  startBtn,
  usernameBtn
} from "./elements.js";
import {_makeControlBtnsEnabled, _makeControlBtnsDisabled} from "./gameControlsButtons.js";


showRulesBtn.addEventListener('click', handleShowRules);
backBtn.addEventListener('click', handleBackToMenu);
usernameBtn.addEventListener('click', handleShowUsernameInterface);
setPlayerNameBtn.addEventListener('click', handleSetPlayerName);
allStartBtns.forEach((btn)=> btn.addEventListener('click', gamePusk))

startBtn.addEventListener('click', onStartBtnClick);
pauseBtn.addEventListener('click', onPauseBtnClick);
exitBtn.addEventListener('click', onExitBtnClick);

confirmNewGameBtn.addEventListener('click', onConfirmNewGameBtnClick)
cancelNewGameBtn.addEventListener('click', onCancelNewGameBtnClick);

drawFieldNewState();

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
  playerNameElement.value = enteredUserName.value;
  TetrisGame.player = playerNameElement.value;
}

function onStartBtnClick() {
  if (TetrisGame.wasGameStartedBefore === false) {
    TetrisGame.wasGameStartedBefore = true;
    startBtn.innerHTML = 'NEW GAME';
    pauseBtn.innerHTML = 'Pause';
    startGame();
    nextBlockWrapper.classList.remove('hidden');
    _makeControlBtnsEnabled()
  } else {
    confirmStartNewGameWindow.classList.remove('hidden')

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
  startBtn.innerHTML = 'NEW GAME';
  pauseBtn.innerHTML = 'Pause';

  resetGame();
  _makeControlBtnsEnabled();
  setInitialOptions();

  //new
  TetrisGame.isPaused = false;
  TetrisGame.wasGameStartedBefore = true;
  nextBlockWrapper.classList.remove('hidden');
  startGame();
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
  nextBlockWrapper.classList.add('hidden');
  resetAnimations();
  // tetrisField.innerHTML= '';
  // drawFieldNewState();
  // resetGame();
  startBtn.innerHTML = 'Start';
  pauseBtn.innerHTML = 'Pause';

  // resetGame();
  _makeControlBtnsEnabled();

  resetGame();
  _makeControlBtnsEnabled();
  setInitialOptions();

  //new
  TetrisGame.isPaused = false;
  TetrisGame.wasGameStartedBefore = false;


}

function startGame() {
  //new
  clearTimeout(TetrisGame.gameTimerID);

  moveTetroDown();

  if (!TetrisGame.isPaused) {
    updateGameState();
    TetrisGame.gameTimerID = setTimeout(startGame, possibleLevels[TetrisGame.currentLevel].speed);
  }
}

export function resetGame() {

  clearTimeout(TetrisGame.gameTimerID);
  TetrisGame.isPaused = true;
  TetrisGame.playField = Array.from({ length: 20 }, () => Array(10).fill(0));
  drawFieldNewState();
  // new
  TetrisGame.wasGameStartedBefore = false;
  TetrisGame.linesInFinishedGame = 0;
  TetrisGame.reachedLevelInFinishedGame = 0;
  TetrisGame.scoredPointsInFinishedGame = 0;
  TetrisGame.playerScore = 0;
  TetrisGame.currentLevel = 1;
  TetrisGame.wasGameStartedBefore = false;

  const newActiveTetro = _getNewTetro();
  activeTetro.x = newActiveTetro.x;
  activeTetro.y = newActiveTetro.y;
  activeTetro.shape = newActiveTetro.shape;

  const newNextTetro = _getNewTetro();
  nextTetro.x = newNextTetro.x;
  nextTetro.y = newNextTetro.y;
  nextTetro.shape = newNextTetro.shape;

  // Reset UI
  levelOutput.value = TetrisGame.currentLevel;
  linesElement.value = TetrisGame.linesInFinishedGame;
  scoreOutput.value = TetrisGame.playerScore;
  goalOutput.value = possibleLevels[TetrisGame.currentLevel].goalForNextLevel;
  pointsLeftElement.value = possibleLevels[TetrisGame.currentLevel].goalForNextLevel;
  nextTetroDisplay.innerHTML = '';

  // Redraw the empty field
  drawFieldNewState();
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
