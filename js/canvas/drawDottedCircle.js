import { ctx7 } from "./config.js";
import { centerX, centerY, radius } from "./drawCircle.js";

export const circleStateDotted = {
    dotAngle: -Math.PI / 2,
    dotStep: 0.05,
    dotRadius: 1,
}

export function drawDottedCircle() {
    const dottedRadius = radius + 15;

    const inFirstSkipRange = circleStateDotted.dotAngle < -Math.PI / 11.5 || circleStateDotted.dotAngle > Math.PI / 12;
    const inSecondSkipRange = circleStateDotted.dotAngle < (Math.PI - Math.PI / 11.5) || circleStateDotted.dotAngle > (Math.PI + Math.PI /12);
    if (inFirstSkipRange && inSecondSkipRange) {

        const x = centerX + dottedRadius * Math.cos(circleStateDotted.dotAngle);
        const y = centerY + dottedRadius * Math.sin(circleStateDotted.dotAngle);

        ctx7.beginPath();
        ctx7.arc(x, y, circleStateDotted.dotRadius, 0, 2 * Math.PI);
        ctx7.fillStyle = "black";
        ctx7.fill();
    }

    if (circleStateDotted.dotAngle < 1.5 * Math.PI) {
        circleStateDotted.dotAngle += circleStateDotted.dotStep;
        requestAnimationFrame(drawDottedCircle);
    }
}
