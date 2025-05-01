import {possibleLevels, TetrisGame} from "../../config/gameConfig.js";

import {setInitialUIOptions, setPauseButtonToPause} from "../../ui/uiUpdates.js";
import {
    drawFieldNewState,
    initializePlayField,
    moveTetroDown,
    resetActiveAndNextTetros,
    updateGameState
} from "../tetro/tetrominoLogic.js";
import {resetGameState} from "./updateResults.js";


export function runGameCycle() {
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

export function resumeGame() {
    unpauseGame();
    startGameTimer()
}

export function startGameTimer() {
    TetrisGame.gameTimerID = setTimeout(runGameCycle, possibleLevels[TetrisGame.currentLevel].speed);
}

export function stopGameTimer() {
    clearTimeout(TetrisGame.gameTimerID);
}

export function unpauseGame() {
    TetrisGame.isPaused = false;
}
export function pauseGame() {
    TetrisGame.isPaused = true;
}

export function resumeAndMarkGameStarted() {
    unpauseGame();
    TetrisGame.wasGameStartedBefore = true;
}

export function endGame() {
    stopGameTimer()
    pauseGame();
}

export function continueGame() {
    setPauseButtonToPause();
    resumeGame();
}
