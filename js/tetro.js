import {figures, TetrisGame} from "./gameConfig.js";
import { linesOutput, nextTetroDisplay} from "./elements.js";
import {calculatePointLeftForNextLevel, calculateScore, moveToNextLevel} from "./calculateResults.js";
import {toggleGameOverWindow} from "./ui/uiUpdates.js";
import {endGame} from "./state/updateState.js";


const tetrisField = document.getElementById('tetris-field');


export let activeTetro = getNewTetro();
export let nextTetro = getNewTetro();


export function initializePlayField() {
    TetrisGame.playField = createPlayField();
}

function createPlayField() {
    return Array.from({ length: 20 }, () => Array(10).fill(0));
}

export function moveTetroDown() {
    activeTetro.y += 1;
    if (hasCollisions()) {
        activeTetro.y -= 1;
        fixTetro();
        deleteFullLine();

        activeTetro = nextTetro;
        if (hasCollisions()) {
            toggleGameOverWindow()
            endGame();
                    }
        nextTetro = getNewTetro();
    }
}

export function updateGameState() {
    if (!TetrisGame.isPaused) {
        addActiveTetro();
        drawFieldNewState();
        showWhatTetroWillBeNext();
    }
}

export function drawFieldNewState() {

    let field = '';

    for (let y = 0; y < TetrisGame.playField.length; y++) {
        for (let x = 0; x < TetrisGame.playField[y].length; x++) {
            switch (TetrisGame.playField[y][x]) {
                case 1:
                    field += '<div class="moving-cell"></div>';
                    break;
                case 2:
                    field += '<div class="fixed-cell"></div>';
                    break;

                default:
                    field += '<div class="empty-cell"></div>';
            }
        }
    }
    tetrisField.innerHTML = field;
}

function addActiveTetro() {
    removePreviousActiveTetroPosition();

    for (let y = 0; y < activeTetro.shape.length; y++) {
        for (let x = 0; x < activeTetro.shape[y].length; x++) {
            if (activeTetro.shape[y][x] === 1) {
                TetrisGame.playField[activeTetro.y + y][activeTetro.x + x] =
                    activeTetro.shape[y][x];
            }
        }
    }
}

function showWhatTetroWillBeNext() {
    let nextTetroConstruction = '';

    for (let y = 0; y < nextTetro.shape.length; y++) {
        for (let x = 0; x < nextTetro.shape[y].length; x++) {
            if (nextTetro.shape[y][x] === 0) {
                nextTetroConstruction += '<div class="empty-cell-next"></div>';
            } else {
                nextTetroConstruction += renderMovingCell(nextTetro);
            }
        }
        // nextTetroConstruction += '<br/>';
    }
    nextTetroDisplay.innerHTML = nextTetroConstruction;
}

export function dropTetro() {
    for (let y = activeTetro.y; y < TetrisGame.playField.length; y++) {
        activeTetro.y += 1;
        if (hasCollisions()) {
            activeTetro.y -= 1;
            break;
        }
    }
}

export function rotateTetro() {
    const PREVIOUS_ELEMENT_STATE = activeTetro.shape;

    activeTetro.shape = activeTetro.shape[0].map((val, index) =>
        activeTetro.shape.map(row => row[index]).reverse(),
    );
    if (hasCollisions()) {
        activeTetro.shape = PREVIOUS_ELEMENT_STATE;
    }
}

function fixTetro() {
    //  we transform our element with moving cells into elemnt with fixed cells
    for (let y = 0; y < TetrisGame.playField.length; y++) {
        for (let x = 0; x < TetrisGame.playField[y].length; x++) {
            if (TetrisGame.playField[y][x] === 1) {
                TetrisGame.playField[y][x] = 2;
            }
        }
    }
}
let allFilledLines = [];

function deleteFullLine() {
    // we need to check if all the cells of tetris rows are  fixed cells
    let canDeleteLine = true;
    let filledLines = [];

    for (let y = 0; y < TetrisGame.playField.length; y++) {
        for (let x = 0; x < TetrisGame.playField[y].length; x++) {
            if (TetrisGame.playField[y][x] !== 2) {
                canDeleteLine = false; // it is possible  delete the row if at least one its cell is not fixed cell
                continue;
            }
        }
        if (canDeleteLine) {
            TetrisGame.playField.splice(y, 1); //  we need to delete this one row
            TetrisGame.playField.unshift([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
            filledLines.push(y);
            allFilledLines.push(filledLines);
            linesOutput.value = allFilledLines.length;
            TetrisGame.linesInFinishedGame = linesOutput.value;
        }

        canDeleteLine = true;
    }

    calculateScore(filledLines);
    calculatePointLeftForNextLevel(TetrisGame.playerScore);
    moveToNextLevel(TetrisGame.playerScore);
}

export function getNewTetro() {
    const POSSIBLE_FIGURES = 'OISZLJT';
    const RANDOM_FIGURE_NAME = Math.floor(Math.random() * 7);
    const newElement = figures[POSSIBLE_FIGURES[RANDOM_FIGURE_NAME]];

    return {
        x: Math.floor((TetrisGame.playField[0].length - newElement[0].length) / 2),
        y: 0,
        shape: newElement,

    };
}

function renderMovingCell(nextTetro) {
    return `<div class="moving-cell" style="background-color: ${nextTetro.color}"></div>`;
}

export function hasCollisions() {
    for (let y = 0; y < activeTetro.shape.length; y++) {
        for (let x = 0; x < activeTetro.shape[y].length; x++) {
            if (
                activeTetro.shape[y][x] === 1 &&
                (TetrisGame.playField[activeTetro.y + y] === undefined ||
                    TetrisGame.playField[activeTetro.y + y][activeTetro.x + x] === undefined ||
                    TetrisGame.playField[activeTetro.y + y][activeTetro.x + x] === 2)
            ) {
                return true;
            }
        }
    }
    return false;
}

function removePreviousActiveTetroPosition() {
    for (let y = 0; y < TetrisGame.playField.length; y++) {
        for (let x = 0; x < TetrisGame.playField[y].length; x++) {
            if (TetrisGame.playField[y][x] === 1) {
                TetrisGame.playField[y][x] = 0;
            }
        }
    }
}


export function moveTetroHorizontally(direction) {
    activeTetro.x += direction;

    if (hasCollisions()) {
        activeTetro.x -= direction;
    }
}

export function resetActiveAndNextTetros() {
    const newActiveTetro = getNewTetro();
    activeTetro.x = newActiveTetro.x;
    activeTetro.y = newActiveTetro.y;
    activeTetro.shape = newActiveTetro.shape;

    const newNextTetro = getNewTetro();
    nextTetro.x = newNextTetro.x;
    nextTetro.y = newNextTetro.y;
    nextTetro.shape = newNextTetro.shape;
}
