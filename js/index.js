import {
  handleBackToMenu,
  handleInterfaceToStartGame,
  handleShowRules,
  handleShowUsernameInterface,
} from "./eventHandlers/rules.js";
import { possibleLevels, TetrisGame } from "./gameConfig.js";

import {
  getNewTetro,
  hasCollisions, activeTetro, nextTetro,
  drawFieldNewState,
  dropTetro,
  moveTetroDown,
  rotateTetro,
  updateGameState,
  initializePlayField, moveTetroHorizontally
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
import {
  endGame,
  pauseGame,
  resumeAndMarkGameStarted,
  resumeGame, startGameTimer,
  stopGameTimer,
  unpauseGame
} from "./state/updateState.js";
import {markGameAsStarted, setFinishedGameInitialStats, setPlayerGameName} from "./state/updateResults.js";


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
}

function setInitialOptions() {
  setInitialUIOptions();
  setFinishedGameInitialStats()
  unpauseGame();
}

export function handleSetPlayerName() {
  updatePlayerNameUI()
  setPlayerGameName()
}

function onStartBtnClick() {
  if (TetrisGame.wasGameStartedBefore === false) {
    markGameAsStarted()
    updateGameControlButtonText();
    startGame();
    showNextTetroBlock();
    makeControlBtnsEnabled()
  } else {
    toggleConfirmStartNewGameWindow();
    setPauseButtonToContinue()
    pauseGame();
    makeControlBtnsDisabled();
  }
}

function continueGame() {
  setPauseButtonToPause();
  resumeGame();
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

export function startGame() {
  stopGameTimer()
  moveTetroDown();
  if (!TetrisGame.isPaused) {
    updateGameState();
    startGameTimer()
  }
}




export function resetGame() {
  endGame();
  initializePlayField();
  drawFieldNewState();
  // new
  TetrisGame.wasGameStartedBefore = false;
  TetrisGame.linesInFinishedGame = 0;
  TetrisGame.reachedLevelInFinishedGame = 0;
  TetrisGame.scoredPointsInFinishedGame = 0;
  TetrisGame.playerScore = 0;
  TetrisGame.currentLevel = 1;
  TetrisGame.wasGameStartedBefore = false;

  const newActiveTetro = getNewTetro();
  activeTetro.x = newActiveTetro.x;
  activeTetro.y = newActiveTetro.y;
  activeTetro.shape = newActiveTetro.shape;

  const newNextTetro = getNewTetro();
  nextTetro.x = newNextTetro.x;
  nextTetro.y = newNextTetro.y;
  nextTetro.shape = newNextTetro.shape;


  setInitialUIOptions();
  drawFieldNewState();
}


document.onkeydown = function (event) {
  if (TetrisGame.isPaused) return;

  switch (event.key) {
    case 'ArrowUp':
      rotateTetro();
      break;

    case 'ArrowDown':
      moveTetroDown();
      break;

    case 'ArrowLeft':
      moveTetroHorizontally(-1);
      break;

    case 'ArrowRight':
      moveTetroHorizontally(1);
      break;

    case ' ':
      dropTetro();
      break;
  }

    updateGameState();

};
