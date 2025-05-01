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
