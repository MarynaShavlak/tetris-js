import {handleInterfaceToStartGame} from "./menu.js";
import {
    hideExitGameModal, hideGameOverWindow, resetGameControlButtonText,
    setInitialUIOptions, setPauseButtonToContinue, showExitModal,
    showNextTetroBlock,
    toggleConfirmStartNewGameWindow,
    updateGameControlButtonText, updateUIForExitGame
} from "../../ui/uiUpdates.js";
import {markGameAsStarted, setFinishedGameInitialStats} from "../state/updateResults.js";
import {
    continueGame,
    endGame,
    pauseGame, resetGame,
    resumeAndMarkGameStarted,
    runGameCycle,
    unpauseGame
} from "../state/updateState.js";
import {TetrisGame} from "../../config/gameConfig.js";
import {makeControlBtnsDisabled, makeControlBtnsEnabled} from "../../ui/gameControlsButtons.js";


export function initializeGame() {
    setInitialOptions()
    handleInterfaceToStartGame();
}

function setInitialOptions() {
    setInitialUIOptions();
    setFinishedGameInitialStats()
    unpauseGame();
}

export function handleStartGameSession() {
    if (TetrisGame.wasGameStartedBefore === false) {
        markGameAsStarted()
        updateGameControlButtonText();
        runGameCycle();
        showNextTetroBlock();
        makeControlBtnsEnabled()
    } else {
        toggleConfirmStartNewGameWindow();
        setPauseButtonToContinue()
        pauseGame();
        makeControlBtnsDisabled();
    }
}

export function handlePauseGameSession() {
    if (!TetrisGame.wasGameStartedBefore) return;
        if (TetrisGame.isPaused === false) {
            setPauseButtonToContinue();
            endGame();
        } else if (TetrisGame.isPaused === true) {
            continueGame();
        }
}


export function handleExitGameSession() {
    showExitModal(TetrisGame.wasGameStartedBefore);
    if(TetrisGame.wasGameStartedBefore) {
        handlePauseGameSession();
        makeControlBtnsDisabled();
    }
    const backToTetrisBtn = document.getElementById('btn-back-to-tetris');
    backToTetrisBtn.addEventListener('click', handleContinueGameSession);
    const sureExitBtn = document.getElementById('btn-sure-exit');
    sureExitBtn.addEventListener('click', handleCloseGameSession );
}


export function handleStartNewGameSession(isAfterLose = false) {
    if (isAfterLose) {
        hideGameOverWindow();
    } else {
        toggleConfirmStartNewGameWindow();
    }

    showNextTetroBlock();
    updateGameControlButtonText();
    resetGame();
    makeControlBtnsEnabled();
    setInitialOptions();
    resumeAndMarkGameStarted();
    runGameCycle();
}

export function handleBackToGame() {
    toggleConfirmStartNewGameWindow();
    makeControlBtnsEnabled();
    continueGame();
}

export function handleContinueGameSession() {
    hideExitGameModal();
    makeControlBtnsEnabled();
    if(TetrisGame.wasGameStartedBefore) {
        continueGame()
    }
}

function handleCloseGameSession () {
    hideExitGameModal();
    updateUIForExitGame();
    resetGameControlButtonText();
    resetGame();
    makeControlBtnsEnabled();
    setInitialOptions();
    resumeAndMarkGameStarted()
}
