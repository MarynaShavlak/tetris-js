import {allControlBtns, enabledFromStartControlBtns} from "./elements.js";
import {TetrisGame} from "./gameConfig.js";

export function _makeControlBtnsDisabled() {
    allControlBtns.forEach(btn => {
        btn.disabled = true;
    });
}

export function _makeControlBtnsEnabled() {
    if (TetrisGame.wasGameStartedBefore === true) {
        allControlBtns.forEach(btn => {
            btn.disabled = false;
        });
    } else {
        enabledFromStartControlBtns.forEach(btn => {
            btn.disabled = false;
        });
    }
}
