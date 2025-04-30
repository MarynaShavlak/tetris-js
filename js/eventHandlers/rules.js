export const usernameEl = document.querySelector('.settings__item--username');
export const startEl = document.querySelector('.settings__item--start');
export const rulesEl = document.querySelector('.settings__item--rules');
export const instructionsEl = document.querySelector('.instructions');
export const usernameEditorEl = document.querySelector('.usernameEditor');
const settingsFooterEl = document.querySelector('.settings__footer');



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

