export default function person(ctx, radius){
    // ctx.save();
    ctx.moveTo(radius, radius -45);
    ctx.lineTo(radius, radius);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(radius, radius-65, 20, 0, 2* Math.PI);
    ctx.moveTo(radius -20, radius -10 );
    ctx.quadraticCurveTo(radius , radius -50, radius +20, radius -10 );
    ctx.moveTo(radius -20, radius +30);
    ctx.quadraticCurveTo(radius , radius -30, radius +20, radius +30);
    ctx.stroke();
    ctx.restore();
}
