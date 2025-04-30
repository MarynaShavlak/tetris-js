import {canvas3, ctx3} from "./config.js";

import {centerX, centerY,  radius} from "./drawCircle.js";
import {drawDoubleCircleAt270} from "./drawDoubleCircleAt270.js";
import {drawThirdCirclePart} from "./drawThirdCirclePart.js";
import {drawDottedCircle} from "./drawDottedCircle.js";
import {drawDoubleCircleAt280} from "./drawDoubleCircleAt280.js";

export const circleState3 = {
    startAngle: Math.PI / 11.5,
    endAngle: Math.PI / 11.5,
    targetAngle: Math.PI,
    animationDirection: 1
};


export function drawSecondCirclePart() {
    ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
    ctx3.beginPath();
    ctx3.arc(centerX, centerY, radius, Math.PI / 11.5, circleState3.endAngle);
    ctx3.strokeStyle = "black";
    ctx3.lineWidth = 1;
    ctx3.stroke();

    ctx3.beginPath();

    ctx3.fillStyle = "blue";
    ctx3.fill();
    const reverseLimit = Math.PI - Math.PI / 11.5;

    if (circleState3.animationDirection === 1) {
        if (circleState3.endAngle < Math.PI) {
            circleState3.endAngle = Math.min(circleState3.endAngle + 0.02, Math.PI);
            requestAnimationFrame(drawSecondCirclePart);

        } else {
            requestAnimationFrame(drawDoubleCircleAt270);
            requestAnimationFrame(drawDoubleCircleAt280);
            circleState3.animationDirection = -1;
            requestAnimationFrame(drawSecondCirclePart);
            requestAnimationFrame(drawDottedCircle);

        }
    } else {
        if (circleState3.endAngle > reverseLimit) {
            circleState3.endAngle = Math.max(circleState3.endAngle - 0.02, reverseLimit);
            requestAnimationFrame(drawSecondCirclePart);

        } else {
            circleState3.animationDirection = 1;
            requestAnimationFrame(drawThirdCirclePart)

        }
    }

}
