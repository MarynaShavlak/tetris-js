import {drawCircle} from "../../canvas/drawCircle.js";

import {
    hideElementsBeforeAnimation,
    hideRulesAndUsernameEditor,
    hideRulesAndStartButton,
    hideSettingsAndShowGameElements,
    showRulesAndFooter,
    showUsernameAndRules,
    showUsernameEditorAndFooter,
    showLevelBlockAfterDelay,
    showPlayerInfoBlockAfterDelay,
    showLinesAndControlButtonsAfterDelay
} from "../../ui/uiUpdates.js";

export function handleShowRules() {
    hideElementsBeforeAnimation()
    setTimeout(() => {
        showRulesAndFooter()
    }, 300);

}

export function handleBackToMenu() {
    hideRulesAndUsernameEditor()
    setTimeout(() => {
        showUsernameAndRules()
    }, 300);
}

export function  handleShowUsernameInterface() {
    hideRulesAndStartButton();
    setTimeout(() => {
        showUsernameEditorAndFooter()
    }, 300);
}

export function  handleInterfaceToStartGame() {
    hideSettingsAndShowGameElements()
    drawCircle();
    showLevelBlockAfterDelay(2000);
    showPlayerInfoBlockAfterDelay(3000);
    showLinesAndControlButtonsAfterDelay(5000);
}




