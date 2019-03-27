console.log("Loops.js is called")

// function to draw circle
// drawCircle(x(int), y(int), (R(int), fillC(rgb string), strokeC(rgb 
// string), lwidth(int), fill(boolean), string(boolean))
function drawCircle(x,y,R, fillC, strokeC, lwidth, fill, stroke){
    ctx.beginPath();
    ctx.arc(x,y,R, 0, 2*Math.PI);
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

// this is a function to draw any rectangle as long as the parameters are provided
function drawRectangle(x,y,x,y, fillC, strokeC, lwidth, fill, stroke){
    ctx.beginPath();
    ctx.rect(x,y,x,y);
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

var i = 0;
drawCircle(100 +50*i,200,100, colArray[0][6], colArray[0][3], 8, true, true);

i = 1;
drawCircle(100 +50*i,200,100, colArray[0][6], colArray[0][3], 8, true, true);

i = 2;
drawCircle(100 +50*i,200,100, colArray[0][6], colArray[0][3], 8, true, true);

i = 3;
drawCircle(100 +50*i,200,100, colArray[0][6], colArray[0][3], 8, true, true);

drawRectangle(200,100,300,100, colArray[1][6], colArray[1][4], 5,true, true);

for( i=0; i<10; i++){
    console.log(i)
    drawCircle(40 +40*i,400,10, colArray[0][6], colArray[0][3], 1, true, true);
}

for( i=0; i<10; i++){
    console.log(i)
    drawCircle(500,10+i*30,10, colArray[0][6], colArray[0][3], 1, true, true);
}

for( i=0; i<5; i++){
    for(var j=0; j<5; j++){
        drawCircle(10+i*30, 10+j*30,10, colArray[0][6], colArray[0][3], 1, true, true)

    }
}