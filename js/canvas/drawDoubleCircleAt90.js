import {ctx} from "./config.js";
import {centerX, centerY, radius} from "./drawCirlce.js";

export function drawDoubleCircleAt90() {
    const angleAt90 = 0; // 90 degrees from top
    const cx = centerX + radius * Math.cos(angleAt90);
    const cy = centerY + radius * Math.sin(angleAt90);

    let currentRadius = 0;
    const maxInnerRadius = 120;
    const maxOuterRadius = 130;
    const step = 1.5; // Control animation speed

    function animateDoubleCircle() {
        // ctx.clearRect(0, 0, canvas.width, canvas.height); // Optional if you want to clear all
        // redrawAllPrevious(); // 👈 Redraw previous elements (main circle, dots)

        // Inner circle
        ctx.beginPath();
        ctx.arc(cx, cy, Math.min(currentRadius, maxInnerRadius), 0, 2 * Math.PI);
        ctx.strokeStyle = "green";
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Outer circle
        if (currentRadius >= 3) {
            ctx.beginPath();
            ctx.arc(cx, cy, Math.min(currentRadius, maxOuterRadius), 0, 2 * Math.PI);
            ctx.strokeStyle = "green";
            ctx.lineWidth = 1.5;
            ctx.stroke();
        }

        if (currentRadius < maxOuterRadius) {
            currentRadius += step;
            requestAnimationFrame(animateDoubleCircle);
        }
    }

    animateDoubleCircle();
}

