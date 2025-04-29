import { canvas, ctx } from "./config.js";
import { centerX, centerY } from "./drawCirlce.js";

export function drawDoubleCircleAt90() {
    const circleX = centerX;
    const circleY = centerY;

    const innerTargetRadius = 110;
    const outerTargetRadius = 120;

    let currentInnerRadius = 0;
    let currentOuterRadius = 0;

    function animateInner() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw inner circle (filled for visibility)
        ctx.beginPath();
        ctx.arc(circleX, circleY, currentInnerRadius, 0, 2 * Math.PI);
        ctx.strokeStyle = "black";
        ctx.stroke();

        currentInnerRadius += 1;

        if (currentInnerRadius <= innerTargetRadius) {
            requestAnimationFrame(animateInner);
        } else  {
            requestAnimationFrame(animateOuter); // Start outer animation when inner is done
        }
    }


    function animateOuter() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc(circleX, circleY, innerTargetRadius, 0, 2 * Math.PI);
        ctx.strokeStyle = "black";
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(circleX, circleY, currentOuterRadius, 0, 2 * Math.PI);
        ctx.strokeStyle = "black";
        ctx.lineWidth = 1;
        ctx.stroke();

        currentOuterRadius += 1;

        if (currentOuterRadius <= outerTargetRadius) {
            requestAnimationFrame(animateOuter);
        }
    }

    animateInner();
}
