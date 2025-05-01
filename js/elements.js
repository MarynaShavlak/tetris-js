export const settingsEl = document.querySelector('.settings');
export const usernameEl = document.querySelector('.settings__item--username');
export const startEl = document.querySelector('.settings__item--start');
export const rulesEl = document.querySelector('.settings__item--rules');
export const instructionsEl = document.querySelector('.instructions');
export const usernameEditorEl = document.querySelector('.usernameEditor');
export const settingsFooterEl = document.querySelector('.settings__footer');

export const gameEl = document.querySelector('.game');
export const scoreEl = document.querySelector( '.player__score')
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
export const levelOutput = levelBlock.querySelector('#player__level');

export const goalOutput = document.getElementById('player-goal');
export const pointsLeftElement = document.getElementById(
    'player-points-left-for-next-level',
);

export const startBtn = document.getElementById('start-btn');
export const pauseBtn = document.getElementById('pause-btn');
export const exitBtn = document.getElementById('exit-btn');


export const gameWindow = document.getElementById('game-window');
export const nextTetroDisplay = document.getElementById('next-tetro');

export const scoreElement = document.getElementById('player-score');
export const goalElement = document.getElementById('player-goal');
export const linesElement = document.getElementById('player__filled-lines');
export const confirmNewGameBtn = document.getElementById('confirm-start-new-game');
export const cancelNewGameBtn = document.getElementById('cancel-start-new-game');
export const confirmStartNewGameWindow = document.getElementById(
    'confirm-new-game-window',
);
export const exitGameModal = document.querySelector('.exit-message',);

export const gameOver = document.getElementById('game-over');
export const nextBlockWrapper = document.querySelector('.next__wrapper');
