import {drawCircle} from "../canvas/drawCircle.js";
import {
    controlButtonsBlock,
    gameBlock, instructionsEl,
    levelBlock,
    linesBlock,
    playerInfoBlock,
    rulesEl,
    scoreBlock,
    settingsBlock, settingsFooterEl, startEl, usernameEditorEl, usernameEl
} from "../elements.js";

export function handleShowRules() {
    usernameEl.classList.add('hidden');
    startEl.classList.add('hidden');
    rulesEl.style.order = -1;
    setTimeout(() => {
        instructionsEl.classList.remove('hidden');
        settingsFooterEl.classList.remove('hidden');
    }, 300);

}

export function handleBackToMenu() {
    if(!instructionsEl.classList.contains('hidden')) {
        instructionsEl.classList.add('hidden');
    }

    if(!usernameEditorEl.classList.contains('hidden')) {
        usernameEditorEl.classList.add('hidden');
    }


    settingsFooterEl.classList.add('hidden');

    setTimeout(() => {
        if(usernameEl.classList.contains('hidden')) {
            usernameEl.classList.remove('hidden');
            rulesEl.style.order = 0;
        }

        if(rulesEl.classList.contains('hidden')) {
            rulesEl.classList.remove('hidden');
            usernameEl.style.order = 0;
        }

        if(startEl.classList.contains('hidden')) {
            startEl.classList.remove('hidden');
        }



    }, 300);
}

export function  handleShowUsernameInterface() {
    rulesEl.classList.add('hidden');
    startEl.classList.add('hidden');
    usernameEl.style.order = -1;
    setTimeout(() => {
        usernameEditorEl.classList.remove('hidden');
        settingsFooterEl.classList.remove('hidden');
    }, 300);
}

export function  handleInterfaceToStartGame() {
    settingsBlock.classList.add('hidden');
    gameBlock.classList.remove('hidden');
    scoreBlock.classList.remove('hidden');

    drawCircle();
    setTimeout(() => {
        levelBlock.classList.remove('hidden');

    }, 2000);
    setTimeout(() => {
        playerInfoBlock.classList.remove('hidden');

    }, 3000);
    setTimeout(() => {
        linesBlock.classList.remove('hidden');
        controlButtonsBlock.classList.remove('hidden');
    }, 5000);
}




