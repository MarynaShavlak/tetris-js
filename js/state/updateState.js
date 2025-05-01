import {possibleLevels, TetrisGame} from "../gameConfig.js";
import {startGame} from "../index.js";

export function resumeGame() {
    unpauseGame();
    startGameTimer()
}

export function startGameTimer() {
    TetrisGame.gameTimerID = setTimeout(startGame, possibleLevels[TetrisGame.currentLevel].speed);
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
