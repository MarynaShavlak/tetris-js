// import { ctx7} from "./config.js";
// import {centerX, centerY, radius} from "./drawCircle.js";
//
//
// let dotAngle = - Math.PI / 2;
// const dotStep = 0.05;
// const dotRadius = 1;
//
// export function drawDottedCircle() {
//
//
//     const  dottedRadius = radius + 15;
//     const x = centerX + dottedRadius * Math.cos(dotAngle);
//     const y = centerY + dottedRadius * Math.sin(dotAngle);
//
//     ctx7.beginPath();
//     ctx7.arc(x, y, dotRadius, 0, 2 * Math.PI);
//     ctx7.fillStyle = "black";
//     ctx7.fill();
//
//     if (dotAngle < 1.5 * Math.PI) {
//         dotAngle += dotStep;
//         requestAnimationFrame(drawDottedCircle);
//     }
// }
import { ctx7 } from "./config.js";
import { centerX, centerY, radius } from "./drawCircle.js";

let dotAngle = -Math.PI / 2; // Start at 12am
const dotStep = 0.05;
const dotRadius = 1;

export function drawDottedCircle() {
    const dottedRadius = radius + 15;

    const inFirstSkipRange = dotAngle < -Math.PI / 11.5 || dotAngle > Math.PI / 12;
    const inSecondSkipRange = dotAngle < (Math.PI - Math.PI / 11.5) || dotAngle > (Math.PI + Math.PI /12);
    if (inFirstSkipRange && inSecondSkipRange) {

        const x = centerX + dottedRadius * Math.cos(dotAngle);
        const y = centerY + dottedRadius * Math.sin(dotAngle);

        ctx7.beginPath();
        ctx7.arc(x, y, dotRadius, 0, 2 * Math.PI);
        ctx7.fillStyle = "black";
        ctx7.fill();
    }

    if (dotAngle < 1.5 * Math.PI) {
        dotAngle += dotStep;
        requestAnimationFrame(drawDottedCircle);
    }
}
