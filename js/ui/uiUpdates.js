import {
    controlButtonsBlock, enteredUserName,
    exitGameModal,
    gameBlock, goalOutput,
    levelBlock, levelOutput, linesBlock, linesOutput, nextTetroBlock, nextTetroDisplay,
    pauseBtn,
    playerInfoBlock, playerNameElement, pointsLeftOutput,
    scoreBlock, scoreOutput,
    settingsBlock,
    startBtn
} from "../elements.js";
import {resetAnimations} from "../canvas/resetAnimations.js";
import {possibleLevels, TetrisGame} from "../gameConfig.js";

export function updateGameControlButtonText() {
    startBtn.innerHTML = "NEW GAME";
    pauseBtn.innerHTML = "Pause";
}


export function resetGameControlButtonText() {
    startBtn.innerHTML = "Start";
    pauseBtn.innerHTML = "Pause";
}


export function setPauseButtonToContinue() {
    pauseBtn.innerHTML = "Continue";
}


export function hideExitGameModal() {
    exitGameModal.classList.add("hidden");
    exitGameModal.innerHTML = "";
}


export function updateUIForExitGame() {
    settingsBlock.classList.remove('hidden');
    gameBlock.classList.add('hidden');
    scoreBlock.classList.add('hidden');
    levelBlock.classList.add('hidden');
    playerInfoBlock.classList.add('hidden');
    linesBlock.classList.add('hidden');
    controlButtonsBlock.classList.add('hidden');
    nextTetroBlock.classList.add('hidden');
    resetAnimations();
}

export function setInitialUIOptions() {
    levelOutput.value = TetrisGame.currentLevel;
    linesOutput.value = TetrisGame.linesInFinishedGame;
    scoreOutput.value = TetrisGame.playerScore;
    goalOutput.value = possibleLevels[TetrisGame.currentLevel].goalForNextLevel;
    pointsLeftOutput.value = possibleLevels[TetrisGame.currentLevel].goalForNextLevel;
    playerNameElement.value = enteredUserName.value || "Player 1";
    nextTetroDisplay.innerHTML = '';
}
