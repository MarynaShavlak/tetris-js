import {canvas, canvasElements, ctx, ctxElements} from "./config.js";
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

        ctxElements.clearRect(0, 0, canvasElements.width, canvasElements.height);
         ctxElements.beginPath();
                ctxElements.arc(circleX, circleY, currentInnerRadius, 0, 2 * Math.PI);
                ctxElements.strokeStyle = "black";
                ctxElements.stroke();

                currentInnerRadius += radiusIncrement;

                if (currentInnerRadius <= innerTargetRadius) {
                    requestAnimationFrame(animateInner);
                } else {
                    requestAnimationFrame(animateOuter);
                }
    }

    function animateOuter() {
        ctxElements.clearRect(0, 0, canvas.width, canvas.height);

        // Keep the inner circle visible
        ctxElements.beginPath();
        ctxElements.arc(circleX, circleY, innerTargetRadius, 0, 2 * Math.PI);
        ctxElements.strokeStyle = "black";
        ctxElements.stroke();

        // Draw outer circle
        ctxElements.beginPath();
        ctxElements.arc(circleX, circleY, currentOuterRadius, 0, 2 * Math.PI);
        ctxElements.strokeStyle = "black";
        ctxElements.lineWidth = 1;
        ctxElements.stroke();

        currentOuterRadius += radiusIncrement;

        if (currentOuterRadius <= outerTargetRadius) {
            requestAnimationFrame(animateOuter);
        }
    }

    animateInner();
}


