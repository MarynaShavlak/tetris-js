import {  TetrisGame } from "./gameConfig.js";
import {
  drawFieldNewState,
  dropTetro,
  moveTetroDown,
  rotateTetro,
  updateGameState,
  initializePlayField, moveTetroHorizontally, resetActiveAndNextTetros
} from "./tetro.js";
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
   startGameTimer,
  stopGameTimer,

} from "./state/updateState.js";
import {

  resetGameState,

  setPlayerGameName
} from "./state/updateResults.js";
import {setupEventListeners} from "./eventHandlers/setupEventListeners.js";


// showRulesBtn.addEventListener('click', handleShowRules);
// backBtn.addEventListener('click', handleBackToMenu);
// usernameBtn.addEventListener('click', handleShowUsernameInterface);
// setPlayerNameBtn.addEventListener('click', handleSetPlayerName);
// allStartBtns.forEach((btn)=> btn.addEventListener('click', initializeGame))
//
// startBtn.addEventListener('click', handleStartGameSession);
// pauseBtn.addEventListener('click', handlePauseGameSession);
// exitBtn.addEventListener('click', onExitBtnClick);
//
// confirmNewGameBtn.addEventListener('click', onConfirmNewGameBtnClick)
// cancelNewGameBtn.addEventListener('click', onCancelNewGameBtnClick);
// starNewGameBtnAfterLose.addEventListener('click', onConfirmNewGameBtnClick)
setupEventListeners()
drawFieldNewState();





export function handleSetPlayerName() {
  updatePlayerNameUI()
  setPlayerGameName()
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
  resetGameState();
  resetActiveAndNextTetros()
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
