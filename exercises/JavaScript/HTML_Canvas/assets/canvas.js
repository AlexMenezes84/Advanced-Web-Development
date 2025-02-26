// const w = window.innerWidth;
// const h = window.innerHeight;

// const canvas = document.getElementById('canvas');

// canvas.width = w;
// canvas.height = h;

// const ctx = canvas.getContext('2d');
// //Fill and stroke styles
// ctx.fillStyle = 'yellow';
// ctx.strokeStyle = 'red';
// ctx.lineWidth = 5;
// Drawing a line
// ctx.moveTo(50, 50);
// ctx.lineTo(w - 50, 50);
// ctx.lineTo(w - 50, h - 50);
// ctx.lineTo(50, h - 50);

// Convenience methods
// ctx.rect(50, 50, w/2 -75, h - 100);
// ctx.rect(w/2 +25, 50, w/2 -75, h - 100);
// The API provides some convenience methods for common tasks.
// For example, the rect method will add a rectangle to the path. 
// It takes four arguments, the (x, y) coordinates of the top-left corner,
// the width and the height.
// const margin = 50;
// rectangle height: remove two margins from the canvas height
// const height = h - margin * 2;
// rectangle width: remove three margins from the canvas width and divide by two
// const width = (w - margin * 3) / 2;
// const top = margin;
// const left1 = margin;
// the second rectangle starts after the first
// const left2 = margin + width + margin;
// ctx.rect(left1, top, width, height);
// ctx.rect(left2, top, width, height);

//Managing paths
// const x1 = (w / 3);
// const x2 = x1 * 2;
// const y = h / 2;
// const radius = Math.min(w, h) / 4;

// ctx.arc(x1, y, radius, 0, 2 * Math.PI);
// ctx.fill()
// ctx.stroke()

// ctx.beginPath();
// ctx.arc(x2, y, radius, 0, 2 * Math.PI);
// ctx.fill()
// ctx.stroke()

// const w = window.innerWidth;
// const h = window.innerHeight;

// const canvas = document.getElementById('canvas');

// canvas.width = w;
// canvas.height = h;

// const ctx = canvas.getContext('2d');

// ctx.strokeStyle = 'black';
// ctx.lineWidth = 5;

// // Face
// const faceX = w / 2;
// const faceY = h / 2;
// const faceRadius = Math.min(w, h) / 3;

// // Eyes
// const eyeY = faceY - faceRadius / 3;
// const eyeOffset = faceRadius / 3;
// const eyeXRadius = faceRadius / 6;
// const eyeYRadius = faceRadius / 5;

// // Pupils
// const pupilOffsetX = (Math.random() - 0.5) * eyeXRadius
// const pupilOffsetY = (Math.random() - 0.5) * eyeYRadius
// const pupilXRadius = eyeXRadius * 0.2;
// const pupilYRadius = eyeYRadius * 0.2;

// // Mouth
// const mouthOffset = faceRadius * 0.1;
// const mouthRadius = faceRadius * 0.7;

// // Draw face
// ctx.fillStyle = 'yellow';
// ctx.arc(faceX, faceY, faceRadius, 0, 2 * Math.PI);
// ctx.fill()
// ctx.stroke()

// // Draw mouth
// ctx.beginPath();
// ctx.arc(faceX, faceY + mouthOffset, mouthRadius, 0, Math.PI);
// ctx.stroke()

// // For each eye
// for (const eye of [-1, 1]) {
//     const eyeX = faceX + (eye * eyeOffset);

//     // draw eye
//     ctx.fillStyle = "white";
//     ctx.beginPath();
//     ctx.ellipse(
//         eyeX, eyeY,
//         eyeXRadius, eyeYRadius,
//         0, 0, 2 * Math.PI
//     );
//     ctx.fill();
//     ctx.stroke();

//     // draw pupil
//     ctx.fillStyle = "black";
//     const pupilX = eyeX + pupilOffsetX;
//     const pupilY = eyeY + pupilOffsetY;
//     ctx.beginPath();
//     ctx.ellipse(
//         pupilX, pupilY,
//         pupilXRadius, pupilYRadius,
//         0, 0, 2 * Math.PI
//     );
//     ctx.fill();
// }
// import face from './face.js'

// const w = window.innerWidth;
// const h = window.innerHeight;

// const canvas = document.getElementById('canvas');

// canvas.width = w;
// canvas.height = h;

// const ctx = canvas.getContext('2d');

// const radius = Math.min(w, h) / 4;

// // One in the middle
// ctx.translate(w / 2, h / 2);
// face(ctx, radius);

// // One to the left
// ctx.translate(-radius * 1.5, 0);
// face(ctx, radius / 2);

// // One to the right
// ctx.translate(radius * 3, 0);
// face(ctx, radius / 2);

// // One to the top
// ctx.translate(-radius * 1.5, -radius * 1.5);
// face(ctx, radius / 2);

// // One to the bottom
// ctx.translate(0, radius * 3);
// face(ctx, radius / 2);

//Expanding the complexity

// import face from './face.js'

// const w = window.innerWidth;
// const h = window.innerHeight;

// const canvas = document.getElementById('canvas');

// canvas.width = w;
// canvas.height = h;

// const ctx = canvas.getContext('2d');

// const radius = Math.min(w, h) / 4;

// // One in the middle
// ctx.translate(w / 2, h / 2);
// face(ctx, radius);

// // eight around the outside
// for (const angle of [0, 1, 2, 3, 4, 5, 6, 7]) {
//     ctx.save();
//     ctx.rotate(angle * Math.PI / 4);
//     ctx.translate(0, -radius * 1.5);
//     face(ctx, radius / 2);
//     ctx.restore()    
// }

// Adding structure

import face from './face.js'

const w = window.innerWidth;
const h = window.innerHeight;

const canvas = document.getElementById('canvas');

canvas.width = w;
canvas.height = h;

const ctx = canvas.getContext('2d');

function flower(ctx, radius) {
    const r = radius / 4;

    // One in the middle
    face(ctx, r);
    
    // eight around the outside
    for (const angle of [0, 1, 2, 3, 4, 5, 6, 7]) {
        ctx.save();
        ctx.rotate(angle * Math.PI / 4);
        ctx.translate(0, -r * 1.5);
        face(ctx, r / 2);
        ctx.restore()    
    }
}

function randomFlower(ctx) {
    ctx.save();
    const x = w * Math.random();
    const y = h * Math.random();
    const r = Math.min(w, h) * (0.1 + 0.2 * Math.random());
    ctx.translate(x, y);
    flower(ctx, r);
    ctx.restore()
}

let total = 0;
do {
    total += Math.random();
    randomFlower(ctx);
} while (total < 10);



