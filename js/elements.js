export const settingsBlock = document.querySelector('.settings');
export const usernameEl = document.querySelector('.settings__item--username');
export const startEl = document.querySelector('.settings__item--start');
export const rulesEl = document.querySelector('.settings__item--rules');
export const instructionsEl = document.querySelector('.instructions');
export const usernameEditorEl = document.querySelector('.usernameEditor');
export const settingsFooterEl = document.querySelector('.settings__footer');

export const gameBlock = document.querySelector('.game');
export const scoreBlock = document.querySelector( '.player__score')
export const gameResults = document.querySelector('.game__results');
export const linesBlock = document.querySelector('.player__lines');
export const levelBlock = document.querySelector('.player__level');
export const playerInfoBlock = document.querySelector('.player__info');
export const controlButtonsBlock = document.querySelector('.game__controlButtons');

export const showRulesBtn = document.getElementById('rules-btn');
export const backBtn = document.getElementById('back-btn');
export const usernameBtn = document.getElementById('username-btn');
export const setPlayerNameBtn = document.getElementById('submit-user-name');
export const allStartBtns = document.querySelectorAll('.settings__btn--start');
export const enteredUserName = document.getElementById('user-entered-name');
export const playerNameElement = document.getElementById('player-name');





export const startBtn = document.getElementById('start-btn');
export const pauseBtn = document.getElementById('pause-btn');
export const exitBtn = document.getElementById('exit-btn');


export const gameWindow = document.getElementById('game-window');
export const nextTetroDisplay = document.getElementById('next-tetro');

export const levelOutput = levelBlock.querySelector('#player-level-output');
export const scoreOutput = document.getElementById('player-score-output');
export const goalOutput = document.getElementById('player-goal-output');
export const linesOutput = document.getElementById('player-lines-output');
export const pointsLeftOutput = document.getElementById(
    'player-points-left-for-next-level',
);


export const confirmNewGameBtn = document.getElementById('confirm-start-new-game');
export const cancelNewGameBtn = document.getElementById('cancel-start-new-game');
export const confirmStartNewGameWindow = document.getElementById(
    'confirm-new-game-window',
);
export const exitGameModal = document.querySelector('.exit-message',);

export const gameOver = document.getElementById('lose-game-window');
export const nextTetroBlock = document.querySelector('.next__wrapper');


export const allControlBtns = [startBtn, pauseBtn, exitBtn];
export const enabledFromStartControlBtns = [startBtn, exitBtn];

export const starNewGameBtnAfterLose = document.getElementById('start-new-game-after-lose');
