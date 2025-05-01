import { canvas,  ctx} from "./config.js";
import {drawDoubleCircleAt90} from "./drawDoubleCircleAt90.js";
import {drawSecondCirclePart} from "./drawSecondCirclePart.js";

import {drawDoubleCircleAt100} from "./drawDoubleCircleAt100.js";

export const centerX = canvas.width / 2;
export const centerY = canvas.height / 2 + 3;
export const radius = canvas.height / 2 - 20;

export const circleState = {
    startAngle: -Math.PI / 2,
    endAngle: -Math.PI / 2,
    animationDirection: 1,
    dotAngle: -Math.PI / 2,
    targetAngle: 0,
};

export function drawCircle() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, -Math.PI / 2, circleState.endAngle);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    ctx.stroke();


     ctx.beginPath();

    ctx.fill();

    if (circleState.animationDirection === 1) {
        if (circleState.endAngle < circleState.targetAngle) {
            circleState.endAngle += 0.02;
            requestAnimationFrame(drawCircle);

        } else {
            requestAnimationFrame(drawDoubleCircleAt90);
            requestAnimationFrame(drawDoubleCircleAt100);
            circleState.animationDirection = -1;
            requestAnimationFrame(drawCircle);
        }
    } else if (circleState.animationDirection === -1) {
        if (circleState.endAngle > circleState.startAngle / 6) {
            circleState.endAngle -= 0.02;

           requestAnimationFrame(drawCircle);
        } else {
            requestAnimationFrame(drawSecondCirclePart)
        }
    }
}
