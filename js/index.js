import {
  handleBackToMenu,
  handleInterfaceToStartGame,
  handleShowRules,
  handleShowUsernameInterface,
} from "./eventHandlers/rules.js";
import { possibleLevels, TetrisGame } from "./gameConfig.js";

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
  enteredUserName,
  exitBtn,
  levelOutput,
  linesOutput,
  pauseBtn,
  setPlayerNameBtn,
  showRulesBtn, starNewGameBtnAfterLose,
  startBtn,
  usernameBtn
} from "./elements.js";
import {makeControlBtnsEnabled, makeControlBtnsDisabled} from "./gameControlsButtons.js";
import {
  toggleConfirmStartNewGameWindow,
  hideExitGameModal, toggleGameOverWindow,
  resetGameControlButtonText, setInitialUIOptions,
  setPauseButtonToContinue, setPauseButtonToPause, showExitModal, showNextTetroBlock,
  updateGameControlButtonText, updateUIForExitGame, updatePlayerNameUI
} from "./ui/uiUpdates.js";


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
starNewGameBtnAfterLose.addEventListener('click', onConfirmNewGameBtnClick)

drawFieldNewState();

function gamePusk() {
  setInitialOptions()
  handleInterfaceToStartGame();
  // onStartBtnClick();

}

function setInitialOptions() {
  setInitialUIOptions();
  TetrisGame.reachedLevelInFinishedGame = levelOutput.value;
  TetrisGame.linesInFinishedGame = linesOutput.value;
  unpauseGame();
}

export function handleSetPlayerName() {
  updatePlayerNameUI()
  TetrisGame.player = enteredUserName.value;
}

function onStartBtnClick() {
  if (TetrisGame.wasGameStartedBefore === false) {
    TetrisGame.wasGameStartedBefore = true;
    updateGameControlButtonText();
    startGame();
    showNextTetroBlock();
    makeControlBtnsEnabled()
  } else {
    toggleConfirmStartNewGameWindow();
    setPauseButtonToContinue()
    TetrisGame.isPaused = true;
    makeControlBtnsDisabled();
  }
}

function continueGame() {
  setPauseButtonToPause();
  TetrisGame.isPaused= false;
  TetrisGame.gameTimerID = setTimeout(startGame, possibleLevels[TetrisGame.currentLevel].speed);
}

function onCancelNewGameBtnClick() {
  toggleConfirmStartNewGameWindow();
  makeControlBtnsEnabled();
  setPauseButtonToPause();
  resumeGame();
}

function onConfirmNewGameBtnClick() {
  toggleConfirmStartNewGameWindow();
  toggleGameOverWindow();
  showNextTetroBlock();
  updateGameControlButtonText();
  resetGame();
  makeControlBtnsEnabled();
  setInitialOptions();
  resumeAndMarkGameStarted()
  startGame();
}

function onPauseBtnClick() {
  if (TetrisGame.wasGameStartedBefore === true) {
    if (TetrisGame.isPaused === false) {
      setPauseButtonToContinue();
      endGame();
    } else if (TetrisGame.isPaused === true) {
      continueGame();
    }
  }
}

function onExitBtnClick() {
  showExitModal(TetrisGame.wasGameStartedBefore);
  if(TetrisGame.wasGameStartedBefore) {
    onPauseBtnClick();
    makeControlBtnsDisabled();
  }
  const backToTetrisBtn = document.getElementById('btn-back-to-tetris');
  backToTetrisBtn.addEventListener('click', onBackToTetrisBtnClick);
  const sureExitBtn = document.getElementById('btn-sure-exit');
  sureExitBtn.addEventListener('click', onSureExitBtnClick);
}

function onBackToTetrisBtnClick() {
  hideExitGameModal();
  makeControlBtnsEnabled();
  if(TetrisGame.wasGameStartedBefore) {
    continueGame()
  }
}

function onSureExitBtnClick() {
  hideExitGameModal();
  updateUIForExitGame();
  resetGameControlButtonText();
  resetGame();
  makeControlBtnsEnabled();
  setInitialOptions();
  resumeAndMarkGameStarted()
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


export function endGame() {
  clearTimeout(TetrisGame.gameTimerID);
  TetrisGame.isPaused = true;
}

export function resetGame() {
  endGame();
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


  setInitialUIOptions();
  drawFieldNewState();
}


function resumeGame() {
  unpauseGame();
  startGameTimer()
}

function startGameTimer() {
  TetrisGame.gameTimerID = setTimeout(startGame, possibleLevels[TetrisGame.currentLevel].speed);
}

function unpauseGame() {
  TetrisGame.isPaused = false;
}

function resumeAndMarkGameStarted() {
  unpauseGame();
  TetrisGame.wasGameStartedBefore = true;
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
