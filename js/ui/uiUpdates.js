import {
    controlButtonsBlock,
    exitGameModal,
    gameBlock,
    levelBlock, linesBlock, nextTetroBlock,
    pauseBtn,
    playerInfoBlock,
    scoreBlock,
    settingsBlock,
    startBtn
} from "../elements.js";
import {resetAnimations} from "../canvas/resetAnimations.js";

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
