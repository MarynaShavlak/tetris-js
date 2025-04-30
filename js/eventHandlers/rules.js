export const usernameEl = document.querySelector('.settings__item--username');
export const startEl = document.querySelector('.settings__item--start');
export const rulesEl = document.querySelector('.settings__item--rules');
export const instructionsEl = document.querySelector('.instructions');
const settingsFooterEl = document.querySelector('.settings__footer');

export function handleShowRules() {
    console.log('show rules')
    usernameEl.classList.add('hidden');
    startEl.classList.add('hidden');
    rulesEl.style.order = -1;
    setTimeout(() => {
        instructionsEl.classList.remove('hidden');
        settingsFooterEl.classList.remove('hidden');
    }, 300);


}
