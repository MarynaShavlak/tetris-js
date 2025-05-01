import {
    allStartBtns,
    backBtn, cancelNewGameBtn, confirmNewGameBtn,
    exitBtn,
    pauseBtn,
    setPlayerNameBtn,
    showRulesBtn, starNewGameBtnAfterLose,
    startBtn,
    usernameBtn
} from "../../ui/elements.js";
import {handleBackToMenu, handleShowRules, handleShowUsernameInterface} from "./menu.js";
import {
    initializeGame,
    handleStartGameSession,
    handlePauseGameSession,
    handleExitGameSession,
    handleStartNewGameSession, handleBackToGame,
} from "./game.js";
import {handleSetPlayerName} from "../results/calculateResults.js";
import {TetrisGame} from "../../config/gameConfig.js";
import {dropTetro, moveTetroDown, moveTetroHorizontally, rotateTetro, updateGameState} from "../tetro/tetrominoLogic.js";


export function setupEventListeners() {
    setupInterfaceButtons();
    setupGameControlButtons();
    setupNewGameButtons();
    setupKeyboardControls();
}

function setupInterfaceButtons() {
    showRulesBtn.addEventListener('click', handleShowRules);
    backBtn.addEventListener('click', handleBackToMenu);
    usernameBtn.addEventListener('click', handleShowUsernameInterface);
    setPlayerNameBtn.addEventListener('click', handleSetPlayerName);
    allStartBtns.forEach((btn) => btn.addEventListener('click', initializeGame));
}

function setupGameControlButtons() {
    startBtn.addEventListener('click', handleStartGameSession);
    pauseBtn.addEventListener('click', handlePauseGameSession);
    exitBtn.addEventListener('click', handleExitGameSession);
}


function setupNewGameButtons() {
    cancelNewGameBtn.addEventListener('click', handleBackToGame);
    confirmNewGameBtn.addEventListener('click', () => handleStartNewGameSession(false));
    starNewGameBtnAfterLose.addEventListener('click', () => handleStartNewGameSession(true));
}

function setupKeyboardControls() {
    document.onkeydown = function (event) {
        if (TetrisGame.isPaused) return;

        switch (event.key) {
            case 'ArrowUp':
                rotateTetro();
                break;
            case 'ArrowDown':
                moveTetroDown();
                break;
            case 'ArrowLeft':
                moveTetroHorizontally(-1);
                break;
            case 'ArrowRight':
                moveTetroHorizontally(1);
                break;
            case ' ':
                dropTetro();
                break;
        }

        updateGameState();
    };
}
