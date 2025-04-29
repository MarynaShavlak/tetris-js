import { canvas, ctx } from "./config.js";
import {centerX, centerY, radius, redrawAllPrevious} from "./drawCirlce.js";

export function drawDoubleCircleAt90() {
    const circleX = centerX + radius;
    const circleY = centerY;

    const innerTargetRadius = 110;
    const outerTargetRadius = 120;

    let currentInnerRadius = 0;
    let currentOuterRadius = 0;
    const radiusIncrement = 2; // Increase this value for faster animation

    function animateInner() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        redrawAllPrevious();
        // Draw inner circle (filled for visibility)
        ctx.beginPath();
                ctx.arc(circleX, circleY, currentInnerRadius, 0, 2 * Math.PI);
                ctx.strokeStyle = "black";
                ctx.stroke();

                currentInnerRadius += radiusIncrement;

                if (currentInnerRadius <= innerTargetRadius) {
                    requestAnimationFrame(animateInner);
                } else {
                    requestAnimationFrame(animateOuter);
                }
    }

    function animateOuter() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        redrawAllPrevious();
        // Keep the inner circle visible
        ctx.beginPath();
        ctx.arc(circleX, circleY, innerTargetRadius, 0, 2 * Math.PI);
        ctx.strokeStyle = "black";
        ctx.stroke();

        // Draw outer circle
        ctx.beginPath();
        ctx.arc(circleX, circleY, currentOuterRadius, 0, 2 * Math.PI);
        ctx.strokeStyle = "black";
        ctx.lineWidth = 1;
        ctx.stroke();

        currentOuterRadius += radiusIncrement;

        if (currentOuterRadius <= outerTargetRadius) {
            requestAnimationFrame(animateOuter);
        }
    }

    animateInner();
}


