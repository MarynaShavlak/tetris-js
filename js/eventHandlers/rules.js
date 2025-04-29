import {rulesEl, startEl, usernameEl} from "../index.js";

export function handleShowRules() {
    console.log('show rules')
    usernameEl.classList.add('hidden');
    startEl.classList.add('hidden');
    rulesEl.style.order = -1;
}
