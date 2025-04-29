import {canvas5, ctx5} from "./config.js";

import {centerX, centerY,  radius} from "./drawCirlce.js";


let startAngle5 =  -(Math.PI - Math.PI / 11.5);
let endAngle5 = startAngle5 ;
const targetAngle5 = - Math.PI / 2;

export function drawThirdCirclePart() {
    ctx5.clearRect(0, 0, canvas5.width, canvas5.height);
    ctx5.beginPath();
    ctx5.arc(centerX, centerY, radius, -(Math.PI - Math.PI / 11.5) , endAngle5 );
    ctx5.strokeStyle = "black";
    ctx5.lineWidth = 1;
    ctx5.stroke();

    ctx5.beginPath();


    ctx5.fill();

    if (endAngle5 < targetAngle5) {
        endAngle5 += 0.02;
        requestAnimationFrame(drawThirdCirclePart);
    }


}
