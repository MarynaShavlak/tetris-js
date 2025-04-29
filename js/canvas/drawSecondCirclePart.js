import {canvas3, ctx3} from "./config.js";
import {drawDoubleCircleAt90} from "./drawDoubleCircleAt90.js";
import {centerX, centerY, drawCircle, radius} from "./drawCirlce.js";

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
    const reverseLimit = Math.PI - Math.PI / 6;

    if (animationDirection3 === 1) {
        if (endAngle3 < Math.PI) {
            endAngle3 = Math.min(endAngle3 + 0.02, Math.PI);
            requestAnimationFrame(drawSecondCirclePart);
        } else {
            animationDirection3 = -1;
            requestAnimationFrame(drawSecondCirclePart);
        }
    } else {
        if (endAngle3 > reverseLimit) {
            endAngle3 = Math.max(endAngle3 - 0.02, reverseLimit);
            requestAnimationFrame(drawSecondCirclePart);
        } else {
            animationDirection3 = 1;
        }
    }

}
