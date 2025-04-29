// import {canvas, ctx} from "./config.js";
// import {drawDoubleCircleAt90} from "./drawDoubleCircleAt90.js";
//
// export const centerX = canvas.width / 2;
// export const centerY = canvas.height / 2 + 3 ;
// export const radius = canvas.height / 2 - 20;
// let endAngle = -Math.PI / 2;
// let animationStage = 2;
//
//
// const dottedRadius = radius + 15;
// let dotAngle = -Math.PI / 2;
// const dotStep = 0.05;
// const dotRadius = 1;
//
// export function drawCircle() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.beginPath();
//     ctx.arc(centerX, centerY, radius, -Math.PI / 2, endAngle);
//     ctx.strokeStyle = "black";
//     ctx.lineWidth = 1;
//     ctx.stroke();
//
//
//
//
//   if (endAngle < 1.5 * Math.PI) {
//       endAngle += 0.02;
//       requestAnimationFrame(drawCircle);
//         }
//         else {
//         animationStage = 3;
//         requestAnimationFrame(drawDottedCircle);
//     }
// }
//
//
//
//
// export function drawDottedCircle() {
//     // Draw one dot at the current angle
//     const x = centerX + dottedRadius * Math.cos(dotAngle);
//     const y = centerY + dottedRadius * Math.sin(dotAngle);
//
//     ctx.beginPath();
//     ctx.arc(x, y, dotRadius, 0, 2 * Math.PI);
//     ctx.fillStyle = "black";
//     ctx.fill();
//
//
//     if (dotAngle < 1.5 * Math.PI) {
//         dotAngle += dotStep;
//         requestAnimationFrame(drawDottedCircle);
//     }
// }
//
// export function redrawAllPrevious() {
//     // Redraw the main full circle
//     ctx.beginPath();
//     ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
//     ctx.strokeStyle = "black";
//     ctx.lineWidth = 1;
//     ctx.stroke();
//
//     // Redraw dotted circle
//     const dottedRadius = radius + 15;
//     for (let a = -Math.PI / 2; a <= 1.5 * Math.PI; a += dotStep) {
//         const x = centerX + dottedRadius * Math.cos(a);
//         const y = centerY + dottedRadius * Math.sin(a);
//         ctx.beginPath();
//         ctx.arc(x, y, dotRadius, 0, 2 * Math.PI);
//         ctx.fillStyle = "black";
//         ctx.fill();
//     }
// }



import { canvas, ctx } from "./config.js";
import {drawDoubleCircleAt90} from "./drawDoubleCircleAt90.js";

export const centerX = canvas.width / 2;
export const centerY = canvas.height / 2 + 3;
export const radius = canvas.height / 2 - 20;
let startAngle = -Math.PI / 2;   // 12 o'clock
let endAngle = startAngle ;       // animation begins from -90°
const targetAngle = 0;

const dottedRadius = radius + 15;
let dotAngle = -Math.PI / 2;
const dotStep = 0.05;
const dotRadius = 1;

let animationDirection = 1;

export function drawCircle() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, -Math.PI / 2, endAngle);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    ctx.stroke();


    // Draw the dot
    const dotX = centerX + radius;
    const dotY = centerY ;
    ctx.beginPath();

    ctx.fillStyle = "blue";
    ctx.fill();

    if (animationDirection === 1) {
        if (endAngle < targetAngle) {
            endAngle += 0.02;
            requestAnimationFrame(drawCircle);
        } else {
            requestAnimationFrame(drawDoubleCircleAt90);
            animationDirection = -1;
            requestAnimationFrame(drawCircle);
        }
    } else if (animationDirection === -1) {


        if (endAngle > startAngle / 6) {
            endAngle -= 0.02;
            dotAngle += dotStep;
           requestAnimationFrame(drawCircle);

        }
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
        }
  }


// if (endAngle < 0.01 * Math.PI) {
//     requestAnimationFrame(drawDoubleCircleAt90)
// }
//
//
// if (endAngle < 1.5 * Math.PI) {
//     endAngle += 0.03;
//     requestAnimationFrame(drawCircle);
//
//
//     } else {
//         // animationStage = 3;
//         requestAnimationFrame(drawDottedCircle);
//     }
