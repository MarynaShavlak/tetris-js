import {figures, tetroColors} from "./gameConfig.js";
import {gameTimerID, isPaused, linesInFinishedGame, playerScore, playField } from "./index.js";

const tetrisField = document.getElementById('tetris-field');


let activeTetro = _getNewTetro();
let nextTetro = _getNewTetro();


export function moveTetroDown() {
    activeTetro.y += 1;
    if (_hasCollisions()) {
        activeTetro.y -= 1;
        fixTetro();
        deleteFullLine();
        // activeTetro = _getNewTetro();
        activeTetro = nextTetro;
        if (_hasCollisions()) {
            resetGame();
            console.log('Game is over!');
        }
        nextTetro = _getNewTetro();
    }
}

export function updateGameState() {
    if (!isPaused) {
        addActiveTetro();
        drawFieldNewState();
        showWhatTetroWillBeNext();
    }
}

export function drawFieldNewState() {
    let field = '';

    for (let y = 0; y < playField.length; y++) {
        for (let x = 0; x < playField[y].length; x++) {
            switch (playField[y][x]) {
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
    _removePreviousActiveTetroPosition();

    for (let y = 0; y < activeTetro.shape.length; y++) {
        for (let x = 0; x < activeTetro.shape[y].length; x++) {
            if (activeTetro.shape[y][x] === 1) {
                playField[activeTetro.y + y][activeTetro.x + x] =
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
                nextTetroConstruction += '<div class="empty-cell"></div>';
            } else {
                nextTetroConstruction += _renderMovingCell(nextTetro);
            }
        }
        // nextTetroConstruction += '<br/>';
    }
    // nextTetroDisplay.innerHTML = nextTetroConstruction;
}

export function dropTetro() {
    for (let y = activeTetro.y; y < playField.length; y++) {
        activeTetro.y += 1;
        if (_hasCollisions()) {
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
    if (_hasCollisions()) {
        activeTetro.shape = PREVIOUS_ELEMENT_STATE;
    }
}

function fixTetro() {
    //  we transform our element with moving cells into elemnt with fixed cells
    for (let y = 0; y < playField.length; y++) {
        for (let x = 0; x < playField[y].length; x++) {
            if (playField[y][x] === 1) {
                playField[y][x] = 2;
            }
        }
    }
}
let allFilledLines = [];
function deleteFullLine() {
    // we need to check if all the cells of tetris rows are  fixed cells
    let canDeleteLine = true;
    let filledLines = [];

    for (let y = 0; y < playField.length; y++) {
        for (let x = 0; x < playField[y].length; x++) {
            if (playField[y][x] !== 2) {
                canDeleteLine = false; // it is possible  delete the row if at least one its cell is not fixed cell
                continue;
            }
        }
        if (canDeleteLine) {
            playField.splice(y, 1); //  we need to delete this one row
            playField.unshift([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
            filledLines.push(y);
            allFilledLines.push(filledLines);
            linesElement.value = allFilledLines.length;
            linesInFinishedGame = linesElement.value;
        }

        canDeleteLine = true;
    }

    calculateScore(filledLines);
    calculatePointLeftForNextLevel(playerScore);
    moveToNextLevel(playerScore);
}

function _getNewTetro() {
    let newTetroColor =
        tetroColors[Math.floor(Math.random() * tetroColors.length)];
    const POSSIBLE_FIGURES = 'OISZLJT';
    const RANDOM_FIGURE_NAME = Math.floor(Math.random() * 7);
    const newElement = figures[POSSIBLE_FIGURES[RANDOM_FIGURE_NAME]];
    // const newTetroColor = tetroColors[Math.floor(Math.random() * tetroColors.length)];
    return {
        x: Math.floor((playField[0].length - newElement[0].length) / 2),
        y: 0,
        shape: newElement,
        color: newTetroColor,
    };
}

function _renderMovingCell(nextTetro) {
    return `<div class="moving-cell" style="background-color: ${nextTetro.color}"></div>`;
}
export function _hasCollisions() {
    for (let y = 0; y < activeTetro.shape.length; y++) {
        for (let x = 0; x < activeTetro.shape[y].length; x++) {
            if (
                activeTetro.shape[y][x] === 1 &&
                (playField[activeTetro.y + y] === undefined ||
                    playField[activeTetro.y + y][activeTetro.x + x] === undefined ||
                    playField[activeTetro.y + y][activeTetro.x + x] === 2)
            ) {
                return true;
            }
        }
    }
    return false;
}

function _removePreviousActiveTetroPosition() {
    for (let y = 0; y < playField.length; y++) {
        for (let x = 0; x < playField[y].length; x++) {
            if (playField[y][x] === 1) {
                playField[y][x] = 0;
            }
        }
    }
}


export function resetGame() {
    isPaused = true;
    clearTimeout(gameTimerID);
    playField = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
    drawFieldNewState();

}
