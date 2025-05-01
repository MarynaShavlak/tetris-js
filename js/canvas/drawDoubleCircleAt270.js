import {canvas4,  ctx4} from "./config.js";
import {centerX, centerY, radius,

} from "./drawCircle.js";

export function drawDoubleCircleAt270() {
    const circleX = centerX - radius;
    const circleY = centerY;

    const innerTargetRadius = 103;
    const outerTargetRadius = 96;
    let currentInnerRadius = 0;
    let currentOuterRadius = 0;
    const radiusIncrement = 4;

    function animateInner() {

        ctx4.clearRect(0, 0, canvas4.width, canvas4.height);
         ctx4.beginPath();
                ctx4.arc(circleX, circleY, currentInnerRadius, 0, 2 * Math.PI);
                ctx4.strokeStyle = "black";
                ctx4.stroke();

                currentInnerRadius += radiusIncrement;

                if (currentInnerRadius <= innerTargetRadius) {
                    requestAnimationFrame(animateInner);
                } else {
                    requestAnimationFrame(animateOuter);
                }
    }

    function animateOuter() {
        ctx4.clearRect(0, 0, canvas4.width, canvas4.height);

        // Keep the inner circle visible
        ctx4.beginPath();
        ctx4.arc(circleX, circleY, innerTargetRadius, 0, 2 * Math.PI);
        ctx4.strokeStyle = "black";
        ctx4.stroke();

        // Draw outer circle
        ctx4.beginPath();
        ctx4.arc(circleX, circleY, currentOuterRadius, 0, 2 * Math.PI);
        ctx4.strokeStyle = "black";
        ctx4.lineWidth = 1;
        ctx4.stroke();

        currentOuterRadius += radiusIncrement;

        if (currentOuterRadius <= outerTargetRadius) {
            requestAnimationFrame(animateOuter);
        }
    }

    animateInner();
}

