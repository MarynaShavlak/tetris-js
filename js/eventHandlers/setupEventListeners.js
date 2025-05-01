import {
    allStartBtns,
    backBtn, cancelNewGameBtn, confirmNewGameBtn,
    exitBtn,
    pauseBtn,
    setPlayerNameBtn,
    showRulesBtn, starNewGameBtnAfterLose,
    startBtn,
    usernameBtn
} from "../elements.js";
import {handleBackToMenu, handleShowRules, handleShowUsernameInterface} from "./menu.js";
import {handleSetPlayerName} from "../index.js";
import {
    initializeGame,
    handleStartGameSession,
    handlePauseGameSession,
    handleExitGameSession,
    handleStartNewGameSession, handleBackToGame,
} from "./game.js";


export function setupEventListeners() {
    showRulesBtn.addEventListener('click', handleShowRules);
    backBtn.addEventListener('click', handleBackToMenu);
    usernameBtn.addEventListener('click', handleShowUsernameInterface);
    setPlayerNameBtn.addEventListener('click', handleSetPlayerName);
    allStartBtns.forEach((btn) => btn.addEventListener('click', initializeGame))

    startBtn.addEventListener('click', handleStartGameSession);
    pauseBtn.addEventListener('click', handlePauseGameSession);
    exitBtn.addEventListener('click', handleExitGameSession);
    cancelNewGameBtn.addEventListener('click', handleBackToGame);

    confirmNewGameBtn.addEventListener('click', () => handleStartNewGameSession(false));

    starNewGameBtnAfterLose.addEventListener('click', () => handleStartNewGameSession(true));
}


