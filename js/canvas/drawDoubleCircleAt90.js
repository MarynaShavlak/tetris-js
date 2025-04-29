import {canvas, canvas2, ctx, ctx2} from "./config.js";
import {centerX, centerY, radius,

} from "./drawCirlce.js";

export function drawDoubleCircleAt90() {
    const circleX = centerX + radius;
    const circleY = centerY;

    const innerTargetRadius = 103;
    const outerTargetRadius = 96;
    let currentInnerRadius = 0;
    let currentOuterRadius = 0;
    const radiusIncrement = 4; // Increase this value for faster animation

    function animateInner() {

        ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
         ctx2.beginPath();
                ctx2.arc(circleX, circleY, currentInnerRadius, 0, 2 * Math.PI);
                ctx2.strokeStyle = "black";
                ctx2.stroke();

                currentInnerRadius += radiusIncrement;

                if (currentInnerRadius <= innerTargetRadius) {
                    requestAnimationFrame(animateInner);
                } else {
                    requestAnimationFrame(animateOuter);
                }
    }

    function animateOuter() {
        ctx2.clearRect(0, 0, canvas.width, canvas.height);

        // Keep the inner circle visible
        ctx2.beginPath();
        ctx2.arc(circleX, circleY, innerTargetRadius, 0, 2 * Math.PI);
        ctx2.strokeStyle = "black";
        ctx2.stroke();

        // Draw outer circle
        ctx2.beginPath();
        ctx2.arc(circleX, circleY, currentOuterRadius, 0, 2 * Math.PI);
        ctx2.strokeStyle = "black";
        ctx2.lineWidth = 1;
        ctx2.stroke();

        currentOuterRadius += radiusIncrement;

        if (currentOuterRadius <= outerTargetRadius) {
            requestAnimationFrame(animateOuter);
        }
    }

    animateInner();
}


