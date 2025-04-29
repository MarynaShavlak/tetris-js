import {canvas, ctx} from "./config.js";
import {drawDoubleCircleAt90} from "./drawDoubleCircleAt90.js";

export const centerX = canvas.width / 2;
export const centerY = canvas.height / 2 + 3 ;
export const radius = canvas.height / 2 - 20; // Circle radius = half of canvas width
let endAngle = -Math.PI / 2;
let animationStage = 1; // Start at top (-90 degrees)

const dottedRadius = radius + 15;
let dotAngle = -Math.PI / 2;
const dotStep = 0.05; // angle between dots
const dotRadius = 1;

export function drawCircle() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, -Math.PI / 2, endAngle); // From top, clockwise
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    ctx.stroke();

    if (endAngle < 1.5 * Math.PI) { // Until full circle (270 deg from start)
        endAngle += 0.02; // Adjust for speed/smoothness
        requestAnimationFrame(drawCircle);
    } else {
        animationStage = 2;
        requestAnimationFrame(drawDottedCircle);
    }
}




export function drawDottedCircle() {
    // Draw one dot at the current angle
    const x = centerX + dottedRadius * Math.cos(dotAngle);
    const y = centerY + dottedRadius * Math.sin(dotAngle);

    ctx.beginPath();
    ctx.arc(x, y, dotRadius, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();


    if (dotAngle < 1.5 * Math.PI) {
        dotAngle += dotStep;
        requestAnimationFrame(drawDottedCircle);
    } else {
        drawDoubleCircleAt90(); // 👈 Call it here
    }
}
