import {
    canvas,
    canvas2,
    canvas3,
    canvas4,
    canvas5,
    canvas6,
    canvas7, canvas8,
    ctx,
    ctx2,
    ctx3,
    ctx4,
    ctx5,
    ctx6,
    ctx7, ctx8
} from "./config.js";
import { circleState} from "./drawCircle.js";

import {circleState3} from "./drawSecondCirclePart.js";
import { circleState5} from "./drawThirdCirclePart.js";
import {circleStateDotted} from "./drawDottedCircle.js";


export function resetAnimations() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Reset variables
    circleState.startAngle = -Math.PI / 2;
    circleState.endAngle = circleState.startAngle;
    circleState.animationDirection = 1;
    circleState.dotAngle = -Math.PI / 2;
    circleState3.startAngle = Math.PI / 11.5;
    circleState3.endAngle = circleState3.startAngle;
    circleState5.startAngle =  -(Math.PI - Math.PI / 11.5);
    circleState5.endAngle = circleState5.startAngle ;
    circleState5.targetAngle = - Math.PI / 2;
    circleStateDotted.dotAngle = -Math.PI / 2;

    ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
    ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
    ctx4.clearRect(0, 0, canvas4.width, canvas4.height);
    ctx5.clearRect(0, 0, canvas5.width, canvas5.height);
    ctx6.clearRect(0, 0, canvas6.width, canvas6.height);
    ctx7.clearRect(0, 0, canvas7.width, canvas7.height);
    ctx8.clearRect(0, 0, canvas8.width, canvas8.height);
}
