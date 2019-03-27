function drawRectangle(x,y,w,h, fillC, strokeC, lwidth, fill, stroke){
    ctx.beginPath();
    ctx.rect(x,y,w,h);
    if (fill == true){
        ctx.fillStyle = fillC;
        ctx.fill();
    }
    if (stroke == true){
        ctx.strokeStyle = strokeC;
        ctx.lineWidth = lwidth;
        ctx.stroke();
    }
}

ctx.save();
ctx.translate(300,200);
ctx.rotate(30*Math.PI/180);
drawRectangle(0,0,100,200, colArray[0][4], colArray[0][6], 5, true, true);
ctx.restore();

ctx.save();
ctx.translate(500,200);
for(var i = 0; i<360; i+=15){
    ctx.rotate(15*Math.PI/180)
    drawRectangle(0,0,50,50, colArray[2][6], colArray[0][0], 2, false, true);
}
ctx.restore();