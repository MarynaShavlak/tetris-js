import { canvas8, ctx8} from "./config.js";
import {centerX, centerY, radius,

} from "./drawCircle.js";

export function drawDoubleCircleAt280() {

    const circleY = centerY;

    const additionalCircleTargetRadius = 70;
    let currentAdditionalRadius = 0;
    const radiusIncrement = 2;



    function animateAdditionalCircle() {
        ctx8.clearRect(0, 0, canvas8.width, canvas8.height);
        ctx8.beginPath();
        ctx8.arc(centerX - radius+  90, circleY - 250, currentAdditionalRadius, 0, 2 * Math.PI);
        ctx8.fillStyle = "black";
        ctx8.fill();

        currentAdditionalRadius += radiusIncrement;

        if (currentAdditionalRadius <= additionalCircleTargetRadius) {
            requestAnimationFrame(animateAdditionalCircle);
        }
    }

    animateAdditionalCircle();
}


