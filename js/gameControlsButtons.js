import {allControlBtns, enabledFromStartControlBtns} from "./elements.js";
import {TetrisGame} from "./gameConfig.js";

export function makeControlBtnsDisabled() {
    allControlBtns.forEach(btn => {
        btn.disabled = true;
    });
}

export function makeControlBtnsEnabled() {
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
