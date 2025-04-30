import {possibleLevels, TetrisGame} from "./gameConfig.js";
import {pointsLeftElement, scoreElement} from "./elements.js";

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
    scoreElement.value = TetrisGame.playerScore;
    TetrisGame.scoredPointsInFinishedGame = scoreElement.value;
}

export function calculatePointLeftForNextLevel(score) {
    let pointsLeft = possibleLevels[TetrisGame.currentLevel].goalForNextLevel - score;
    pointsLeftElement.value = pointsLeft;
}
