import {
    confirmStartNewGameWindow,
    controlButtonsBlock, enteredUserName,
    exitGameModal,
    gameBlock, gameOver, goalOutput, instructionsEl,
    levelBlock, levelOutput, linesBlock, linesOutput, nextTetroBlock, nextTetroDisplay,
    pauseBtn,
    playerInfoBlock, playerNameElement, pointsLeftOutput, rulesEl,
    scoreBlock, scoreOutput,
    settingsBlock, settingsFooterEl,
    startBtn, startEl, usernameEditorEl, usernameEl
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

export function setPauseButtonToPause() {
    pauseBtn.innerHTML = "Pause";
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

export function updatePlayerNameUI() {
    playerNameElement.value = enteredUserName.value || "Player 1";
}

export function setInitialUIOptions() {
    levelOutput.value = TetrisGame.currentLevel;
    linesOutput.value = TetrisGame.linesInFinishedGame;
    scoreOutput.value = TetrisGame.playerScore;
    goalOutput.value = possibleLevels[TetrisGame.currentLevel].goalForNextLevel;
    pointsLeftOutput.value = possibleLevels[TetrisGame.currentLevel].goalForNextLevel;
    updatePlayerNameUI();
    nextTetroDisplay.innerHTML = '';
}

export function showExitModal(wasGameStarted) {
    exitGameModal.innerHTML = wasGameStarted
        ? `
        <p>Hey, ${TetrisGame.player}, thank you for your game!</p>
        <p>You were doing fine!</p>
        <p>You have reached level ${TetrisGame.reachedLevelInFinishedGame} and scored ${TetrisGame.scoredPointsInFinishedGame} points by filling ${TetrisGame.linesInFinishedGame} lines.</p>
        <ul class="exit-game__user-btns">
          <li><button class="btn exit-game action-btn" id="btn-sure-exit">Exit</button></li>
          <li><button class="btn back-to-tetris action-btn" id="btn-back-to-tetris">Back to Tetris</button></li>
        </ul>
      `
        : `
        <p class="exit-game__notice">
          <i class="fa-sharp fa-solid fa-heart-crack"></i>
          It's a pity you left the game without even giving Tetris a try.
          <i class="fa-sharp fa-solid fa-heart-crack"></i>
        </p>
        <p class="exit-game__prompt">Are you sure you want to proceed?</p>
        <ul class="exit-game__user-btns">
          <li><button class="btn exit-game action-btn" id="btn-sure-exit">Exit</button></li>
          <li><button class="btn back-to-tetris action-btn" id="btn-back-to-tetris">Back to Tetris</button></li>
        </ul>
      `;
    exitGameModal.classList.remove("hidden");
}

export function toggleConfirmStartNewGameWindow() {
    confirmStartNewGameWindow.classList.toggle('hidden');
}

export function toggleGameOverWindow() {
    gameOver.classList.toggle('hidden');
}
export function hideGameOverWindow() {
    gameOver.classList.add('hidden');
}



export function showNextTetroBlock() {
    nextTetroBlock.classList.remove('hidden');
}


export function hideElementsBeforeAnimation() {
    usernameEl.classList.add('hidden');
    startEl.classList.add('hidden');
    rulesEl.style.order = -1;
}

export function hideRulesAndStartButton() {
    rulesEl.classList.add('hidden');
    startEl.classList.add('hidden');
    usernameEl.style.order = -1;
}

export function hideSettingsAndShowGameElements() {
    settingsBlock.classList.add('hidden');
    gameBlock.classList.remove('hidden');
    scoreBlock.classList.remove('hidden');
}

export function showUsernameAndRules() {
        usernameEl.classList.remove('hidden');
        rulesEl.style.order = 0;
        rulesEl.classList.remove('hidden');
        usernameEl.style.order = 0;
        startEl.classList.remove('hidden');
}

export function hideRulesAndUsernameEditor() {
        instructionsEl.classList.add('hidden');
        usernameEditorEl.classList.add('hidden');
        settingsFooterEl.classList.add('hidden');
}

export function showRulesAndFooter() {
    instructionsEl.classList.remove('hidden');
    settingsFooterEl.classList.remove('hidden');
}


export function showUsernameEditorAndFooter() {
    usernameEditorEl.classList.remove('hidden');
    settingsFooterEl.classList.remove('hidden');
}



export function showLevelBlockAfterDelay(delay) {
    setTimeout(() => {
        levelBlock.classList.remove('hidden');
    }, delay);
}

export function showPlayerInfoBlockAfterDelay(delay) {
    setTimeout(() => {
        playerInfoBlock.classList.remove('hidden');
    }, delay);
}

export function showLinesAndControlButtonsAfterDelay(delay) {
    setTimeout(() => {
        linesBlock.classList.remove('hidden');
        controlButtonsBlock.classList.remove('hidden');
    }, delay);
}
