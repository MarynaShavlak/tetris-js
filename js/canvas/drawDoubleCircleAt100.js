import {canvas6,  ctx6} from "./config.js";
import {centerX, centerY, radius,

} from "./drawCircle.js";

export function drawDoubleCircleAt100() {
    const circleX = centerX + radius;
    const circleY = centerY;

    const additionalCircleTargetRadius = 70;
    let currentAdditionalRadius = 0;
    const radiusIncrement = 2;



    function animateAdditionalCircle() {
        ctx6.clearRect(0, 0, canvas6.width, canvas6.height);
        ctx6.beginPath();
        ctx6.arc(circleX - 90, circleY + 250, currentAdditionalRadius, 0, 2 * Math.PI);
        ctx6.fillStyle = "black";
        ctx6.fill();

        currentAdditionalRadius += radiusIncrement;

        if (currentAdditionalRadius <= additionalCircleTargetRadius) {
            requestAnimationFrame(animateAdditionalCircle);
        }
    }

    animateAdditionalCircle();
}


