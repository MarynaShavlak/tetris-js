import {rulesEl, startEl, usernameEl} from "../index.js";

export function handleShowRules() {
    console.log('show rules')
    usernameEl.classList.add('hidden');
    startEl.classList.add('hidden');

    // Smoothly move rulesEl to the top of the list
    rulesEl.style.order = -1; // Moves it to the top visually
}
