import {
    canvas,
    canvas2,
    canvas3,
    canvas4, canvas5,
    canvas6, canvas7,
    canvas8,
    ctx,
    ctx2,
    ctx3,
    ctx4,
    ctx5,
    ctx6,
    ctx7,
    ctx8
} from "./config.js";
import {drawDoubleCircleAt90} from "./drawDoubleCircleAt90.js";
import {drawSecondCirclePart} from "./drawSecondCirclePart.js";

import {drawDoubleCircleAt100} from "./drawDoubleCircleAt100.js";

export const centerX = canvas.width / 2;
export const centerY = canvas.height / 2 + 3;
export const radius = canvas.height / 2 - 20;
// export let startAngle = -Math.PI / 2;   // 12 o'clock
// export let endAngle = startAngle ;       // animation begins from -90°
// export const targetAngle = 0;
// export let animationDirection = 1;

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
            // dotAngle = startAngle + dotStep;
           requestAnimationFrame(drawCircle);
        } else {
            requestAnimationFrame(drawSecondCirclePart)
        }
    }
}





