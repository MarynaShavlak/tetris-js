import {possibleLevels, TetrisGame} from "./gameConfig.js";
import {goalOutput, levelOutput, pointsLeftElement, scoreOutput} from "./elements.js";

export function calculateScore(lines) {
    switch (lines.length) {
        case 1:
            TetrisGame.playerScore += possibleLevels[TetrisGame.currentLevel].pointsPerOneFilledLine;
            break;
        case 2:
            TetrisGame.playerScore += possibleLevels[TetrisGame.currentLevel].pointsPerOneFilledLine * 2;
            break;
        case 3:
            TetrisGame.playerScore += possibleLevels[TetrisGame.currentLevel].pointsPerOneFilledLine * 3;
            break;
        case 4:
            TetrisGame.playerScore += possibleLevels[TetrisGame.currentLevel].pointsPerOneFilledLine * 4;
            break;
    }
    scoreOutput.value = TetrisGame.playerScore;
    TetrisGame.scoredPointsInFinishedGame = scoreOutput.value;
}

export function calculatePointLeftForNextLevel(score) {
    let pointsLeft = possibleLevels[TetrisGame.currentLevel].goalForNextLevel - score;
    pointsLeftElement.value = pointsLeft;
}

export function moveToNextLevel(score) {
    if (score >= possibleLevels[TetrisGame.currentLevel].goalForNextLevel) {
        TetrisGame.currentLevel += 1;
        levelOutput.value = TetrisGame.currentLevel;
        TetrisGame.reachedLevelInFinishedGame = levelOutput.value;
        TetrisGame.nextGoal = possibleLevels[TetrisGame.currentLevel].goalForNextLevel;
        goalOutput.value = TetrisGame.nextGoal;
        calculatePointLeftForNextLevel(score);
    }
}
