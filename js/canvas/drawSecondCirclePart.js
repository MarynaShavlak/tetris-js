import {canvas3, ctx3} from "./config.js";

import {centerX, centerY,  radius} from "./drawCircle.js";
import {drawDoubleCircleAt270} from "./drawDoubleCircleAt270.js";
import {drawThirdCirclePart} from "./drawThirdCirclePart.js";
import {drawDottedCircle} from "./drawDottedCircle.js";
import {drawDoubleCircleAt280} from "./drawDoubleCircleAt280.js";

let startAngle3 = Math.PI / 11.5;
let endAngle3 = startAngle3 ;
const targetAngle3 = Math.PI;



let animationDirection3 = 1;

export function drawSecondCirclePart() {
    ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
    ctx3.beginPath();
    ctx3.arc(centerX, centerY, radius, Math.PI / 11.5, endAngle3);
    ctx3.strokeStyle = "black";
    ctx3.lineWidth = 1;
    ctx3.stroke();

    ctx3.beginPath();

    ctx3.fillStyle = "blue";
    ctx3.fill();
    const reverseLimit = Math.PI - Math.PI / 11.5;

    if (animationDirection3 === 1) {
        if (endAngle3 < Math.PI) {
            endAngle3 = Math.min(endAngle3 + 0.02, Math.PI);
            requestAnimationFrame(drawSecondCirclePart);

        } else {
            requestAnimationFrame(drawDoubleCircleAt270);
            requestAnimationFrame(drawDoubleCircleAt280);
            animationDirection3 = -1;
            requestAnimationFrame(drawSecondCirclePart);
            requestAnimationFrame(drawDottedCircle);

        }
    } else {
        if (endAngle3 > reverseLimit) {
            endAngle3 = Math.max(endAngle3 - 0.02, reverseLimit);
            requestAnimationFrame(drawSecondCirclePart);

        } else {
            animationDirection3 = 1;
            requestAnimationFrame(drawThirdCirclePart)

        }
    }

}
