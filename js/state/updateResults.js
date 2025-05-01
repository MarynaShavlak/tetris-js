import {TetrisGame} from "../gameConfig.js";
import {enteredUserName, levelOutput, linesOutput} from "../elements.js";

export function setFinishedGameInitialStats() {
    TetrisGame.reachedLevelInFinishedGame = levelOutput.value;
    TetrisGame.linesInFinishedGame = linesOutput.value;
}


export function setPlayerGameName() {
    TetrisGame.player = enteredUserName.value;
}

export function markGameAsStarted() {
    TetrisGame.wasGameStartedBefore = true;
}

export function resetGameState() {
    TetrisGame.wasGameStartedBefore = false;
    TetrisGame.linesInFinishedGame = 0;
    TetrisGame.reachedLevelInFinishedGame = 0;
    TetrisGame.scoredPointsInFinishedGame = 0;
    TetrisGame.playerScore = 0;
    TetrisGame.currentLevel = 1;
}
