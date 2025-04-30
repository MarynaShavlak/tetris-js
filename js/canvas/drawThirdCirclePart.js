import {canvas5, ctx5} from "./config.js";

import {centerX, centerY,  radius} from "./drawCircle.js";

export const circleState5 = {
    startAngle: -(Math.PI - Math.PI / 11.5),
    endAngle: -(Math.PI - Math.PI / 11.5),
    targetAngle: - Math.PI / 2
};


//
// export let startAngle5 =  -(Math.PI - Math.PI / 11.5);
// export let endAngle5 = startAngle5 ;
// export const targetAngle5 = - Math.PI / 2;

export function drawThirdCirclePart() {
    ctx5.clearRect(0, 0, canvas5.width, canvas5.height);
    ctx5.beginPath();
    ctx5.arc(centerX, centerY, radius, -(Math.PI - Math.PI / 11.5) , circleState5.endAngle );
    ctx5.strokeStyle = "black";
    ctx5.lineWidth = 1;
    ctx5.stroke();
    ctx5.beginPath();
    ctx5.fill();
    if (circleState5.endAngle < circleState5.targetAngle) {
        circleState5.endAngle += 0.02;
        requestAnimationFrame(drawThirdCirclePart);
    }
}
